# Colorize

A fully offline, in-browser photo colorizer. Loads a neural colorization model
(ECCV16, Zhang et al.) via ONNX Runtime Web, runs entirely client-side, and
works 100% offline after the first load. Served from GitHub Pages at
`https://<user>.github.io/colorize/`.

## Architecture

- **React + Vite**, `base: '/colorize/'` so all assets resolve under `/colorize/xxx`.
- **Model fetched at runtime, not committed** — downloaded once from a remote
  host and cached forever in the browser (Cache Storage). Removes any repo/Pages
  size limit. See `src/config.js` for the single source URL.
- **ONNX Runtime Web**, WebGPU primary with single-threaded WASM fallback
  (GitHub Pages can't set COOP/COEP, so multithreaded WASM is unavailable).
- **Service worker**: two-tier cache — app shell (precached) + model (cached on
  first download).

## Develop

```sh
npm install
npm run dev        # http://localhost:5173/colorize/
npm run build      # -> dist/  (also copies ORT wasm + generates sw.js)
npm run preview
```

For correct colorization output during dev, drop the converted model at
`public/models/colorizer_dist_fp32.onnx` (see `model-prep/`). It's gitignored;
in production the model is fetched from a remote host via `VITE_MODEL_URL`.

## Deploy (GitHub Pages, served from repo root)

```sh
npm run deploy     # build + copy output to repo root (index.html, assets/, ort/, sw.js, ...)
git add -A && git commit -m "deploy" && git push
```

`scripts/deploy-root.mjs` copies the build to the repo root, renaming the Vite
entry `index.src.html` -> `index.html`, and writes `.nojekyll`. A
`.deployed-manifest` (gitignored) tracks deployed paths so re-deploys clean the
previous output without touching source. In the repo's GitHub Pages settings,
set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.

The Vite entry is `index.src.html` precisely so the built `index.html` can live
at the root without overwriting the source entry.

> **Before the live site can colorize**, set the production model URL: build with
> `VITE_MODEL_URL=https://<huggingface-resolve-url>/colorizer_dist_fp32.onnx npm run deploy`.
> Until then the app shell loads and works offline, but the model download 404s
> (the ~123 MB model is intentionally never committed). Upload the file from
> `model-prep/` to a CORS-enabled host (HuggingFace) — see `model-prep/README.md`.

## Model

See [`model-prep/`](./model-prep/) for the one-time, reproducible conversion of
the ECCV16 model to ONNX (distribution variant + `ab_bins.json` for the
Vividness control). Model is BSD-3-Clause (Zhang, Isola & Efros).
