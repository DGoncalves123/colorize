"""
Convert the Zhang et al. ECCV16 colorization model to int8 ONNX for browser use.

Model & weights: richzhang/colorization (BSD-3-Clause).
This script vendors a clean, self-contained copy of the ECCVGenerator
architecture (the upstream file imports IPython and uses package-relative
imports, neither of which we want here).

Pipeline:
  1. Build ECCVGenerator, load pretrained weights from the official S3 URL.
  2. Export to ONNX (opset 17) with dynamic H/W so any input size works.
  3. Dynamic int8 quantization (shrinks weights ~4x for download).
  4. Verify ORT output matches PyTorch within tolerance.
  5. Report file sizes + sha256 hashes.

I/O contract of the exported model:
  input  "L"  : float32 [1, 1, H, W]  raw lightness in [0, 100]
  output "ab" : float32 [1, 2, H, W]  chrominance in ~[-110, 110]
"""

import hashlib
import os
import sys

import numpy as np
import torch
import torch.nn as nn
import torch.utils.model_zoo as model_zoo

WEIGHTS_URL = "https://colorizers.s3.us-east-2.amazonaws.com/colorization_release_v2-9b330a0b.pth"
OUT_DIR = os.path.dirname(os.path.abspath(__file__))
FP32_ONNX = os.path.join(OUT_DIR, "colorizer_fp32.onnx")
FP16_ONNX = os.path.join(OUT_DIR, "colorizer_fp16.onnx")
INT8_ONNX = os.path.join(OUT_DIR, "colorizer_int8.onnx")
# Distribution model + bin centers for the "Vividness" (annealed-mean) control.
DIST_ONNX = os.path.join(OUT_DIR, "colorizer_dist_fp32.onnx")
BINS_JSON = os.path.join(OUT_DIR, "ab_bins.json")
OPSET = 17


class BaseColor(nn.Module):
    def __init__(self):
        super().__init__()
        self.l_cent = 50.0
        self.l_norm = 100.0
        self.ab_norm = 110.0

    def normalize_l(self, in_l):
        return (in_l - self.l_cent) / self.l_norm

    def unnormalize_ab(self, in_ab):
        return in_ab * self.ab_norm


class ECCVGenerator(BaseColor):
    def __init__(self, norm_layer=nn.BatchNorm2d):
        super().__init__()

        model1 = [nn.Conv2d(1, 64, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(64, 64, 3, 2, 1, bias=True), nn.ReLU(True), norm_layer(64)]
        model2 = [nn.Conv2d(64, 128, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(128, 128, 3, 2, 1, bias=True), nn.ReLU(True), norm_layer(128)]
        model3 = [nn.Conv2d(128, 256, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(256, 256, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(256, 256, 3, 2, 1, bias=True), nn.ReLU(True), norm_layer(256)]
        model4 = [nn.Conv2d(256, 512, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 1, bias=True), nn.ReLU(True), norm_layer(512)]
        model5 = [nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True), norm_layer(512)]
        model6 = [nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 2, dilation=2, bias=True), nn.ReLU(True), norm_layer(512)]
        model7 = [nn.Conv2d(512, 512, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(512, 512, 3, 1, 1, bias=True), nn.ReLU(True), norm_layer(512)]
        model8 = [nn.ConvTranspose2d(512, 256, 4, 2, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(256, 256, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(256, 256, 3, 1, 1, bias=True), nn.ReLU(True),
                  nn.Conv2d(256, 313, 1, 1, 0, bias=True)]

        self.model1 = nn.Sequential(*model1)
        self.model2 = nn.Sequential(*model2)
        self.model3 = nn.Sequential(*model3)
        self.model4 = nn.Sequential(*model4)
        self.model5 = nn.Sequential(*model5)
        self.model6 = nn.Sequential(*model6)
        self.model7 = nn.Sequential(*model7)
        self.model8 = nn.Sequential(*model8)

        self.softmax = nn.Softmax(dim=1)
        self.model_out = nn.Conv2d(313, 2, 1, 1, 0, bias=False)
        self.upsample4 = nn.Upsample(scale_factor=4, mode="bilinear")

    def forward(self, input_l):
        c1 = self.model1(self.normalize_l(input_l))
        c2 = self.model2(c1)
        c3 = self.model3(c2)
        c4 = self.model4(c3)
        c5 = self.model5(c4)
        c6 = self.model6(c5)
        c7 = self.model7(c6)
        c8 = self.model8(c7)
        out_reg = self.model_out(self.softmax(c8))
        return self.unnormalize_ab(self.upsample4(out_reg))


class ECCVLogits(ECCVGenerator):
    """Same backbone, but outputs the raw 313-bin logits at H/4 x W/4 (before
    softmax + the mean-collapse). This lets the browser apply an annealed-mean
    temperature (the "Vividness" control) instead of the dull plain mean."""

    def forward(self, input_l):
        c1 = self.model1(self.normalize_l(input_l))
        c2 = self.model2(c1)
        c3 = self.model3(c2)
        c4 = self.model4(c3)
        c5 = self.model5(c4)
        c6 = self.model6(c5)
        c7 = self.model7(c6)
        return self.model8(c7)  # [N, 313, H/4, W/4] logits


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def mb(path):
    return os.path.getsize(path) / (1024 * 1024)


def main():
    torch.manual_seed(0)
    print(">> Building model + loading pretrained weights ...")
    model = ECCVGenerator()
    state = model_zoo.load_url(WEIGHTS_URL, map_location="cpu", check_hash=True)
    model.load_state_dict(state)
    model.eval()

    dummy = torch.rand(1, 1, 256, 256) * 100.0  # raw L in [0,100]

    print(">> Exporting fp32 ONNX (opset %d, dynamic H/W) ..." % OPSET)
    torch.onnx.export(
        model, dummy, FP32_ONNX,
        input_names=["L"], output_names=["ab"],
        opset_version=OPSET, do_constant_folding=True,
        dynamic_axes={"L": {0: "N", 2: "H", 3: "W"},
                      "ab": {0: "N", 2: "H", 3: "W"}},
    )

    # fp16 is the browser target: ~2x smaller than fp32, cleanly supported by
    # ORT Web (esp. WebGPU). We avoid dynamic int8 — it emits ConvInteger ops
    # that ORT's CPU/Web conv kernels don't implement for this architecture.
    print(">> Converting to fp16 ...")
    import onnx
    from onnxconverter_common import float16
    fp32_model = onnx.load(FP32_ONNX)
    fp16_model = float16.convert_float_to_float16(fp32_model, keep_io_types=True)
    onnx.save(fp16_model, FP16_ONNX)

    print(">> Also producing dynamic int8 (kept for reference; not browser-recommended) ...")
    from onnxruntime.quantization import quantize_dynamic, QuantType
    quantize_dynamic(FP32_ONNX, INT8_ONNX, weight_type=QuantType.QInt8)

    print(">> Verifying ORT (fp32 + fp16) vs PyTorch ...")
    import onnxruntime as ort
    with torch.no_grad():
        torch_out = model(dummy).numpy()
    for label, path in (("fp32", FP32_ONNX), ("fp16", FP16_ONNX)):
        sess = ort.InferenceSession(path, providers=["CPUExecutionProvider"])
        ort_out = sess.run(["ab"], {"L": dummy.numpy()})[0]
        diff = np.abs(torch_out - ort_out)
        print("   [%s] shape: %s | mean abs diff: %.4f | max abs diff: %.4f (ab range ~±110)"
              % (label, ort_out.shape, diff.mean(), diff.max()))

    # --- Distribution model + ab bin centers (for the Vividness control) -----
    # model_out is a 1x1 conv (no bias) mapping the 313-bin probabilities to the
    # 2 ab channels: its weights ARE the ab centers of the 313 bins, scaled by
    # ab_norm in unnormalize_ab. So center_k = (Wa_k, Wb_k) * ab_norm.
    print(">> Exporting distribution model + extracting ab bin centers ...")
    w = model.model_out.weight.detach().numpy()  # [2, 313, 1, 1]
    centers = (w[:, :, 0, 0].T * model.ab_norm).astype(np.float32)  # [313, 2]

    import json
    with open(BINS_JSON, "w") as f:
        json.dump({"ab": centers.tolist(), "count": int(centers.shape[0])}, f)

    dist = ECCVLogits()
    dist.load_state_dict(state)
    dist.eval()
    torch.onnx.export(
        dist, dummy, DIST_ONNX,
        input_names=["L"], output_names=["logits"],
        opset_version=OPSET, do_constant_folding=True,
        dynamic_axes={"L": {0: "N", 2: "H", 3: "W"},
                      "logits": {0: "N", 2: "H", 3: "W"}},
    )

    # Verify: annealed-mean at T=1 (plain softmax-mean) reproduces the original
    # ab output (upsampled). This proves the bins + dist model are consistent.
    print(">> Verifying annealed-mean (T=1) vs original ab ...")
    sess = ort.InferenceSession(DIST_ONNX, providers=["CPUExecutionProvider"])
    logits = sess.run(["logits"], {"L": dummy.numpy()})[0][0]  # [313, h, w]
    C, h, wq = logits.shape
    flat = logits.reshape(C, -1)
    flat = flat - flat.max(0, keepdims=True)
    p = np.exp(flat)
    p /= p.sum(0, keepdims=True)
    ab_small = (centers.T @ p).reshape(2, h, wq)  # [2, h, w] in ab units
    # Upsample x4 to match original output size, compare.
    ab_up = np.repeat(np.repeat(ab_small, 4, axis=1), 4, axis=2)
    base = torch_out[0]
    # bilinear vs nearest upsample differ slightly; compare at the 64-grid level.
    base_small = base[:, ::4, ::4][:, :h, :wq]
    d = np.abs(base_small - ab_small)
    print("   [T=1 annealed-mean] mean abs diff vs orig: %.3f | max: %.3f (ab ~±110)"
          % (d.mean(), d.max()))

    print("\n=== RESULTS ===")
    for p in (FP32_ONNX, FP16_ONNX, INT8_ONNX, DIST_ONNX):
        print("  %-24s %6.1f MB  sha256=%s" % (os.path.basename(p), mb(p), sha256(p)))
    print("  %-24s (313 ab bin centers)" % os.path.basename(BINS_JSON))
    print("\nBROWSER TARGET (vivid): colorizer_dist_fp32.onnx + ab_bins.json")
    print("  -> JS applies softmax(logits/T) . centers ; low T = vivid, T=1 = original.")


if __name__ == "__main__":
    sys.exit(main())
