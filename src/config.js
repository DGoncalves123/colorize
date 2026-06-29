// Central config. The model source URL is a SINGLE constant so swapping
// localhost (dev) -> HuggingFace (prod) is a one-line change (see task #12).

export const MODEL = {
  // Distribution model: outputs raw 313-bin logits so the browser can apply an
  // annealed-mean temperature ("Vividness"). The plain-ab model is superseded.
  // DEV: serve locally (drop it in public/models/). PROD: HuggingFace URL.
  url: import.meta.env.VITE_MODEL_URL ?? './models/colorizer_dist_fp32.onnx',

  // sha256 of colorizer_dist_fp32.onnx (from model-prep). Integrity check.
  sha256: 'd08cda26ecc31642088972cbde705c2135f0fb9346f89fb76f7e7f2db850a574',

  // Model I/O contract (ECCV16 distribution variant, normalization on input
  // baked into the graph):
  //   input  "L"      : float32 [1,1,H,W]    lightness in [0,100]
  //   output "logits" : float32 [1,313,H/4,W/4]  per-pixel color-bin logits
  inputName: 'L',
  outputName: 'logits',
  inputSize: 256, // color pass runs at 256x256; ab is upsampled to full res
  bins: 313,
  // 313 ab bin centers, bundled in the app shell (small, committed).
  binsURL: `${import.meta.env.BASE_URL}ab_bins.json`,
}

// Cache Storage bucket name for the persisted model (task #12).
// Bumped to v2: model file + output contract changed (distribution variant).
export const MODEL_CACHE = 'colorize-model-v2'
