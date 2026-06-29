// ONNX Runtime Web setup. Self-hosts the WASM artifacts (no CDN) so the app
// is fully offline, and selects WebGPU with a single-threaded WASM fallback.
//
// We import the "webgpu" entry, which uses the jsep .wasm that also contains
// the WASM CPU backend — so one runtime build serves both providers.
import * as ort from 'onnxruntime-web/webgpu'

let configured = false

// import.meta.env.BASE_URL is '/colorize/' in build, '/colorize/' in dev too
// (Vite respects `base`), so artifacts resolve at /colorize/ort/<file>.
function configureOnce() {
  if (configured) return
  // Point the loader at our self-hosted copies (see scripts/copy-ort.mjs).
  ort.env.wasm.wasmPaths = `${import.meta.env.BASE_URL}ort/`
  // No cross-origin isolation on GitHub Pages -> no threads.
  ort.env.wasm.numThreads = 1
  configured = true
}

// Returns 'webgpu' if available in this browser, else 'wasm'.
function pickProvider() {
  return typeof navigator !== 'undefined' && 'gpu' in navigator
    ? 'webgpu'
    : 'wasm'
}

// Create an inference session from raw model bytes (ArrayBuffer/Uint8Array),
// trying WebGPU first and transparently falling back to WASM.
export async function createSession(modelBytes) {
  configureOnce()
  const preferred = pickProvider()
  const order = preferred === 'webgpu' ? ['webgpu', 'wasm'] : ['wasm']

  let lastErr
  for (const ep of order) {
    try {
      const session = await ort.InferenceSession.create(modelBytes, {
        executionProviders: [ep],
        graphOptimizationLevel: 'all',
      })
      return { session, provider: ep }
    } catch (err) {
      lastErr = err
      // fall through to next provider
    }
  }
  throw lastErr
}

export { ort }
