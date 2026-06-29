import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from GitHub Pages at https://<user>.github.io/colorize/
// so every asset must resolve under /colorize/xxx.
export default defineConfig({
  base: '/colorize/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    // ORT Web ships large .wasm assets; don't inline them as base64.
    assetsInlineLimit: 0,
    // The Vite entry is index.src.html so the BUILT index.html can be
    // committed to the repo root (Pages serves from root) without clobbering
    // the source entry. The deploy script renames it to index.html.
    rollupOptions: {
      input: 'index.src.html',
    },
  },
  // Needed for ORT Web's WASM in dev (single-threaded; no COOP/COEP since
  // GitHub Pages can't set those headers — see task #3/#6).
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
})
