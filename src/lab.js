// CIE Lab color pipeline for colorization.
//
// The ECCV16 model works in Lab space: it takes the L (lightness) channel and
// predicts the a,b (chrominance) channels. We keep the ORIGINAL full-res L for
// the final image (so output stays sharp) and only run the expensive color
// pass at a small fixed size, then upsample the predicted a,b back up.
//
// Model I/O contract (normalization baked into the graph):
//   input  L  : float32 [1,1,H,W]  lightness in [0,100]
//   output ab : float32 [1,2,H,W]  chrominance in ~[-110,110]
//
// References: D65 white point, sRGB transfer function.

const Xn = 0.95047
const Yn = 1.0
const Zn = 1.08883

// --- sRGB <-> linear ---------------------------------------------------------
function srgbToLinear(c) {
  c /= 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

function linearToSrgb(c) {
  const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055
  return Math.max(0, Math.min(255, Math.round(v * 255)))
}

// --- Lab helpers -------------------------------------------------------------
function fLab(t) {
  const d = 6 / 29
  return t > d * d * d ? Math.cbrt(t) : t / (3 * d * d) + 4 / 29
}

function fLabInv(t) {
  const d = 6 / 29
  return t > d ? t * t * t : 3 * d * d * (t - 4 / 29)
}

// Convert one sRGB pixel to Lab. Returns [L, a, b].
function rgbToLab(r, g, b) {
  const rl = srgbToLinear(r)
  const gl = srgbToLinear(g)
  const bl = srgbToLinear(b)

  const x = (0.4124 * rl + 0.3576 * gl + 0.1805 * bl) / Xn
  const y = (0.2126 * rl + 0.7152 * gl + 0.0722 * bl) / Yn
  const z = (0.0193 * rl + 0.1192 * gl + 0.9505 * bl) / Zn

  const fx = fLab(x)
  const fy = fLab(y)
  const fz = fLab(z)

  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]
}

// Convert one Lab triple back to sRGB [r,g,b] (0..255).
function labToRgb(L, a, b) {
  const fy = (L + 16) / 116
  const fx = fy + a / 500
  const fz = fy - b / 200

  const x = Xn * fLabInv(fx)
  const y = Yn * fLabInv(fy)
  const z = Zn * fLabInv(fz)

  const rl = 3.2406 * x - 1.5372 * y - 0.4986 * z
  const gl = -0.9689 * x + 1.8758 * y + 0.0415 * z
  const bl = 0.0557 * x - 0.204 * y + 1.057 * z

  return [linearToSrgb(rl), linearToSrgb(gl), linearToSrgb(bl)]
}

// --- Canvas <-> Lab ----------------------------------------------------------

// Full-resolution Lab planes extracted from an ImageData.
//   { width, height, L: Float32Array, a: Float32Array, b: Float32Array }
export function imageDataToLab(imageData) {
  const { width, height, data } = imageData
  const n = width * height
  const L = new Float32Array(n)
  const a = new Float32Array(n)
  const b = new Float32Array(n)
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const [l, aa, bb] = rgbToLab(data[p], data[p + 1], data[p + 2])
    L[i] = l
    a[i] = aa
    b[i] = bb
  }
  return { width, height, L, a, b }
}

// Build an ImageData from Lab planes (alpha forced opaque).
export function labToImageData(width, height, L, a, b) {
  const out = new Uint8ClampedArray(width * height * 4)
  for (let i = 0, p = 0; i < width * height; i++, p += 4) {
    const [r, g, bl] = labToRgb(L[i], a[i], b[i])
    out[p] = r
    out[p + 1] = g
    out[p + 2] = bl
    out[p + 3] = 255
  }
  return new ImageData(out, width, height)
}

// --- Resampling --------------------------------------------------------------

// Bilinear resample a single Float32 plane from (sw,sh) to (dw,dh).
export function resizePlane(src, sw, sh, dw, dh) {
  const dst = new Float32Array(dw * dh)
  const sx = sw / dw
  const sy = sh / dh
  for (let y = 0; y < dh; y++) {
    const fy = (y + 0.5) * sy - 0.5
    const y0 = Math.max(0, Math.floor(fy))
    const y1 = Math.min(sh - 1, y0 + 1)
    const wy = fy - y0
    for (let x = 0; x < dw; x++) {
      const fx = (x + 0.5) * sx - 0.5
      const x0 = Math.max(0, Math.floor(fx))
      const x1 = Math.min(sw - 1, x0 + 1)
      const wx = fx - x0
      const a00 = src[y0 * sw + x0]
      const a01 = src[y0 * sw + x1]
      const a10 = src[y1 * sw + x0]
      const a11 = src[y1 * sw + x1]
      const top = a00 + (a01 - a00) * wx
      const bot = a10 + (a11 - a10) * wx
      dst[y * dw + x] = top + (bot - top) * wy
    }
  }
  return dst
}

// --- Model tensor prep -------------------------------------------------------

// Prepare the model input: resize the full-res L plane to size×size, as the
// NCHW Float32 buffer the model expects (raw L in [0,100]).
export function prepareInputL(lab, size) {
  const small = resizePlane(lab.L, lab.width, lab.height, size, size)
  return small // Float32Array length size*size; caller wraps in a tensor [1,1,size,size]
}

// Combine model output ab (at modelSize×modelSize) with the original full-res L.
// abData is the flat NCHW Float32 [1,2,size,size]; returns final ImageData.
export function recombine(lab, abData, modelSize) {
  const n = modelSize * modelSize
  const aSmall = abData.subarray(0, n)
  const bSmall = abData.subarray(n, 2 * n)
  const aFull = resizePlane(aSmall, modelSize, modelSize, lab.width, lab.height)
  const bFull = resizePlane(bSmall, modelSize, modelSize, lab.width, lab.height)
  return labToImageData(lab.width, lab.height, lab.L, aFull, bFull)
}

// Expose pixel-level converters for tests / reuse.
export { rgbToLab, labToRgb }
