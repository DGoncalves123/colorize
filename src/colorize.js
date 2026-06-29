// Colorization with DDColor (transformer colorizer) via ONNX Runtime Web.
//
// DDColor I/O (verified end-to-end against the reference model):
//   input  "input"  : float32 [1,3,256,256]  grayscale-RGB in [0,1]
//            built as L -> Lab(L,0,0) -> sRGB, i.e. the neutral-gray image.
//   output "output" : float32 [1,2,256,256]  ab directly in Lab units (~±128)
// We upsample ab to full resolution and recombine with the ORIGINAL full-res L
// so the result stays sharp. DDColor outputs final ab (no color distribution),
// so there is no "vividness" temperature control — only post adjustments.

import { createSession, ort } from './ort.js'
import { MODEL } from './config.js'
import { imageDataToLab, resizePlane, labToImageData, labToRgb } from './lab.js'

// Build the model input: a size×size grayscale-RGB image in [0,1], NCHW.
// We take the full-res L, resize to size, then map each L -> sRGB of Lab(L,0,0).
function buildGrayInput(lab, size) {
  const lSmall = resizePlane(lab.L, lab.width, lab.height, size, size)
  const n = size * size
  const data = new Float32Array(3 * n) // NCHW: [R plane, G plane, B plane]
  for (let i = 0; i < n; i++) {
    const [r, g, b] = labToRgb(lSmall[i], 0, 0) // 0..255
    data[i] = r / 255
    data[n + i] = g / 255
    data[2 * n + i] = b / 255
  }
  return data
}

export class Colorizer {
  constructor(session, provider) {
    this.session = session
    this.provider = provider
  }

  static async create(modelBytes) {
    const { session, provider } = await createSession(modelBytes)
    return new Colorizer(session, provider)
  }

  // Run the model. Returns { imageData, lab, abFull } where abFull = {a,b}
  // full-resolution Float32 planes for instant post-adjustments (#9).
  async colorize(imageData) {
    const size = MODEL.inputSize
    const lab = imageDataToLab(imageData)

    const input = new ort.Tensor('float32', buildGrayInput(lab, size), [1, 3, size, size])
    const out = await this.session.run({ [MODEL.inputName]: input })
    const ab = out[MODEL.outputName].data // Float32 NCHW [1,2,size,size]

    const n = size * size
    const aFull = resizePlane(ab.subarray(0, n), size, size, lab.width, lab.height)
    const bFull = resizePlane(ab.subarray(n, 2 * n), size, size, lab.width, lab.height)

    const imageOut = labToImageData(lab.width, lab.height, lab.L, aFull, bFull)
    return { imageData: imageOut, lab, abFull: { a: aFull, b: bFull } }
  }
}

// Re-render with post adjustments — NO inference.
//   saturation: multiplier on a,b (1 = unchanged, 0 = grayscale)
//   temperature: shift b (warm +), slight a nudge
//   strength: blend ab toward 0 (1 = full color, 0 = grayscale)
export function applyAdjustments(lab, abFull, { saturation = 1, temperature = 0, strength = 1 } = {}) {
  const n = lab.width * lab.height
  const a = new Float32Array(n)
  const b = new Float32Array(n)
  const k = saturation * strength
  for (let i = 0; i < n; i++) {
    a[i] = abFull.a[i] * k + temperature * 0.3
    b[i] = abFull.b[i] * k + temperature
  }
  return labToImageData(lab.width, lab.height, lab.L, a, b)
}
