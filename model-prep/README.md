# model-prep — Colorization model conversion

One-time, offline step that produces the ONNX model the browser app fetches at
runtime. **Nothing here is committed** except the script + this README
(see `.gitignore`): the venv and `.onnx` files are build artifacts, and the
model is hosted remotely and downloaded once by the app, then cached forever.

## Model

Zhang, Isola & Efros — "Colorful Image Colorization" (ECCV 2016), `eccv16`
variant from [richzhang/colorization](https://github.com/richzhang/colorization).
**License: BSD-3-Clause** (weights redistributable with the copyright notice —
ship a NOTICE crediting the authors in the app).

- Architecture: VGG-style CNN, input = L channel, output = ab channels.
- Normalization is baked into the graph, so the I/O contract is raw Lab:

  | tensor | shape | meaning |
  |--------|-------|---------|
  | input `L`  | float32 `[1,1,H,W]` | lightness in `[0,100]` |
  | output `ab`| float32 `[1,2,H,W]` | chrominance in ~`[-110,110]` |

  Dynamic H/W axes — any input size works (app resizes L to 256×256 for the
  color pass, then recombines ab with full-res L; see task #7).

## Reproduce

Requires [`uv`](https://docs.astral.sh/uv/). System Python is 3.14 (no torch
wheels yet), so we pin a 3.12 venv:

```sh
uv venv --python 3.12 .venv
source .venv/bin/activate
uv pip install torch==2.5.1 onnx==1.17.0 onnxruntime==1.20.1 "numpy<2" \
               onnxconverter-common==1.14.0
python convert.py
```

`convert.py` downloads the pretrained weights (~123 MB, cached by torch hub),
exports fp32 ONNX (opset 17, dynamic H/W), also emits fp16 + int8 variants,
and verifies each against PyTorch.

## Results (verified against PyTorch, CPUExecutionProvider)

| file | size | accuracy vs PyTorch | notes |
|------|------|---------------------|-------|
| `colorizer_fp32.onnx` | 123.0 MB | exact (max abs diff 1e-4) | **SHIPPED TARGET** |
| `colorizer_fp16.onnx` |  61.5 MB | mean ab err 6.7 / max 28 (range ±110) | WebGPU-friendly, mild hue shift |
| `colorizer_int8.onnx` |  36.8 MB | — | ⚠️ unusable: emits `ConvInteger`, unsupported by ORT (incl. ORT Web) for this conv net |

**Decision: ship `colorizer_fp32.onnx`** — exact quality, runs on every ORT Web
backend (WASM + WebGPU). 123 MB is a one-time download, then cached forever, so
size is not a hard constraint under the fetch-at-runtime architecture.

sha256 (current build):
- fp32: `5f802147f41ab02899f33223a9767581c3db08f524f44da0ba25f1265dab5e8e`
- fp16: `11a7ac57b5fe8d1c31897e195cde1f3f6ecf5d8d9613d4e02d62f09d8d8a82cd`
- int8: `f5c39c3e1779d9bbef6f885e5bcdbf788d93b2c466eb6b0d21f753a849baf94f`

## Next

Upload `colorizer_fp32.onnx` to the model host (HuggingFace repo — verified
CORS + range support). Record its URL + sha256 for the app's fetch-and-cache
layer + integrity check (task #12).
