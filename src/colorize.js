// Colorization: ties together the ORT runtime (ort.js), the Lab pipeline
// (lab.js), and the loaded model bytes (modelStore/useModel).
//
// The model outputs raw 313-bin color logits per pixel (at H/4 x W/4). We turn
// those into ab via an ANNEALED MEAN: softmax(logits / T) . binCenters.
//   - T = 1   -> plain mean = the model's natural (often dull/brown) output
//   - T small -> sharpened   = the model's confident, vivid colors
// This "Vividness" control is what actually fixes the brownization, because it
// changes WHICH color wins, not just its intensity.

import { createSession, ort } from './ort.js'
import { MODEL } from './config.js'
import { imageDataToLab, resizePlane, prepareInputL, labToImageData } from './lab.js'

// Map a 0..1 Vividness value to a softmax temperature. v=0 -> T=1 (original),
// v=1 -> T=0.15 (max vivid). v=0.5 -> T~0.39 (the paper's recommended default).
export function vividnessToT(v) {
  return Math.pow(0.15, Math.max(0, Math.min(1, v)))
}

export const DEFAULT_VIVIDNESS = 0.5

let binsPromise = null
function loadBins() {
  if (!binsPromise) {
    binsPromise = fetch(MODEL.binsURL)
      .then((r) => r.json())
      .then((j) => Float32Array.from(j.ab.flat())) // [313*2], (a,b) interleaved
  }
  return binsPromise
}

// Annealed-mean: logits [bins, h, w] -> small ab planes {a,b} each [h*w].
// centers is Float32 [bins*2] interleaved (a,b).
function annealedMean(logits, bins, h, w, centers, T) {
  const hw = h * w
  const a = new Float32Array(hw)
  const b = new Float32Array(hw)
  const invT = 1 / T
  const probs = new Float32Array(bins)
  for (let px = 0; px < hw; px++) {
    // softmax over the 313 bins for this pixel (numerically stable).
    let max = -Infinity
    for (let c = 0; c < bins; c++) {
      const v = logits[c * hw + px] * invT
      probs[c] = v
      if (v > max) max = v
    }
    let sum = 0
    for (let c = 0; c < bins; c++) {
      const e = Math.exp(probs[c] - max)
      probs[c] = e
      sum += e
    }
    const norm = 1 / sum
    let av = 0
    let bv = 0
    for (let c = 0; c < bins; c++) {
      const p = probs[c] * norm
      av += p * centers[c * 2]
      bv += p * centers[c * 2 + 1]
    }
    a[px] = av
    b[px] = bv
  }
  return { a, b }
}

export class Colorizer {
  constructor(session, provider, centers) {
    this.session = session
    this.provider = provider
    this.centers = centers
  }

  static async create(modelBytes) {
    const [{ session, provider }, centers] = await Promise.all([
      createSession(modelBytes),
      loadBins(),
    ])
    return new Colorizer(session, provider, centers)
  }

  // Run the model. Returns { imageData, lab, logits, abFull }.
  //   logits = { data, bins, h, w } kept so Vividness re-renders without re-infer
  //   abFull = { a, b } full-res planes for the chosen vividness
  async colorize(imageData, vividness = DEFAULT_VIVIDNESS) {
    const size = MODEL.inputSize
    const lab = imageDataToLab(imageData)

    const lSmall = prepareInputL(lab, size)
    const input = new ort.Tensor('float32', lSmall, [1, 1, size, size])

    const out = await this.session.run({ [MODEL.inputName]: input })
    const t = out[MODEL.outputName]
    const [, bins, h, w] = t.dims // [1, 313, h, w]
    const logits = { data: t.data, bins, h, w }

    const abFull = this.deriveAb(lab, logits, vividness)
    const imageOut = labToImageData(lab.width, lab.height, lab.L, abFull.a, abFull.b)
    return { imageData: imageOut, lab, logits, abFull }
  }

  // Compute full-res ab planes from stored logits at a given vividness.
  // Cheap (no model run): annealed mean over 313 bins + bilinear upsample.
  deriveAb(lab, logits, vividness) {
    const T = vividnessToT(vividness)
    const { a, b } = annealedMean(logits.data, logits.bins, logits.h, logits.w, this.centers, T)
    const aFull = resizePlane(a, logits.w, logits.h, lab.width, lab.height)
    const bFull = resizePlane(b, logits.w, logits.h, lab.width, lab.height)
    return { a: aFull, b: bFull }
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
