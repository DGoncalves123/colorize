// Copies the ONNX Runtime Web artifacts we self-host into public/ort/.
// We use the "jsep" build: it includes BOTH the WebGPU backend and the
// single-threaded WASM CPU fallback in one .wasm, covering our runtime plan
// (WebGPU primary, WASM fallback) without multithreading (no COOP/COEP on
// GitHub Pages). Run automatically before dev/build via package.json.

import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'node_modules', 'onnxruntime-web', 'dist')
const dst = join(root, 'public', 'ort')

const FILES = [
  'ort-wasm-simd-threaded.jsep.wasm',
  'ort-wasm-simd-threaded.jsep.mjs',
]

mkdirSync(dst, { recursive: true })
for (const f of FILES) {
  copyFileSync(join(src, f), join(dst, f))
  console.log(`copied ort/${f}`)
}
