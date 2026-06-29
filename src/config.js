// Central config. The model source URL is a SINGLE constant so swapping
// localhost (dev) -> HuggingFace (prod) is a one-line change (see task #12).

export const MODEL = {
  // DDColor (transformer colorizer) — vivid, semantically accurate output.
  // DEV: serve the reassembled model locally (public/models/, gitignored).
  // PROD: set VITE_MODEL_URL to the HuggingFace resolve URL.
  url:
    import.meta.env.VITE_MODEL_URL ??
    './models/ddcolor-fp16.onnx',

  // sha256 of the reassembled ddcolor-fp16.onnx — integrity check.
  sha256: '40ff5091157701a76f05f630b40ce1de7de8d15f1abfa8c403947e4e4ebab73c',

  // Model I/O contract (DDColor, verified end-to-end):
  //   input  "input"  : float32 [1,3,256,256]  grayscale-RGB (L->Lab->RGB) in [0,1]
  //   output "output" : float32 [1,2,256,256]  ab directly in Lab units (~±128)
  inputName: 'input',
  outputName: 'output',
  inputSize: 256, // color pass runs at 256x256; ab is upsampled to full res
}

// Cache Storage bucket name for the persisted model (task #12).
// v3: switched model (DDColor) + I/O contract changed.
export const MODEL_CACHE = 'colorize-model-v3'
