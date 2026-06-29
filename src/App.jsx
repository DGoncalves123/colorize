import { useCallback, useMemo, useRef, useState } from 'react'
import { useModel } from './useModel.js'
import { Colorizer, applyAdjustments } from './colorize.js'
import BeforeAfter from './BeforeAfter.jsx'

// Model load states surfaced to the user. The fetch-and-cache layer
// (modelStore.js) drives these via the useModel hook.
const STATUS_LABEL = {
  unknown: 'Checking…',
  'not-downloaded': 'Model not downloaded',
  'cached-idle': 'Model ready (cached, works offline)',
  downloading: 'Downloading model…',
  verifying: 'Verifying…',
  ready: 'Model ready (cached, works offline)',
  'offline-unavailable': 'Offline — model not downloaded yet',
  error: 'Model failed to load',
}

const READY = new Set(['ready', 'cached-idle'])

const DEFAULT_ADJ = { saturation: 1, temperature: 0, strength: 1 }

function ModelStatus({ status, progress }) {
  return (
    <div className={`status status--${status}`} role="status" aria-live="polite">
      <span className="status__dot" />
      <span className="status__text">
        {STATUS_LABEL[status] ?? status}
        {status === 'downloading' && progress != null
          ? ` ${Math.round(progress * 100)}%`
          : ''}
      </span>
    </div>
  )
}

// Cap the working resolution. A 12MP phone photo would blow up into hundreds
// of MB of Float32 L/a/b planes + canvases and can OOM-crash a mobile tab.
// 2048px on the long edge keeps full detail for screen use while staying safe.
const MAX_DIM = 2048

// Read a File into an ImageData via an offscreen canvas, downscaling if large.
async function fileToImageData(file) {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height))
  const w = Math.round(bitmap.width * scale)
  const h = Math.round(bitmap.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  ctx.drawImage(bitmap, 0, 0, w, h)
  bitmap.close()
  return ctx.getImageData(0, 0, w, h)
}

function imageDataToDataURL(imageData) {
  const canvas = document.createElement('canvas')
  canvas.width = imageData.width
  canvas.height = imageData.height
  canvas.getContext('2d').putImageData(imageData, 0, 0)
  return canvas.toDataURL('image/png')
}

function Slider({ label, value, min, max, step, onChange, format }) {
  return (
    <label className="ctrl">
      <span className="ctrl__label">
        {label}
        <span className="ctrl__value">{format ? format(value) : value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  )
}

export default function App() {
  const { status, progress, load, retry, getBytes } = useModel()
  const colorizerRef = useRef(null)

  const [sourceURL, setSourceURL] = useState(null)
  const [resultURL, setResultURL] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [adj, setAdj] = useState(DEFAULT_ADJ)
  const pendingImageData = useRef(null)
  // Raw colorize output kept so the sliders re-render instantly (no re-infer).
  const resultRef = useRef(null) // { lab, abFull }

  const ready = READY.has(status)
  const failed = status === 'error' || status === 'offline-unavailable'
  const hasResult = !!resultURL

  // Ensure we have a live Colorizer (model loaded + ORT session created).
  const ensureColorizer = useCallback(async () => {
    if (colorizerRef.current) return colorizerRef.current
    let bytes = getBytes()
    if (!bytes) bytes = await load()
    if (!bytes) return null
    const c = await Colorizer.create(bytes)
    colorizerRef.current = c
    return c
  }, [getBytes, load])

  const onPick = useCallback(async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setError(null)
    setResultURL(null)
    resultRef.current = null
    setAdj(DEFAULT_ADJ)
    const imageData = await fileToImageData(file)
    pendingImageData.current = imageData
    setSourceURL(imageDataToDataURL(imageData))
  }, [])

  const onColorize = useCallback(async () => {
    if (!pendingImageData.current) return
    setBusy(true)
    setError(null)
    try {
      const c = await ensureColorizer()
      if (!c) {
        setBusy(false)
        return
      }
      const { imageData, lab, abFull } = await c.colorize(pendingImageData.current)
      resultRef.current = { lab, abFull }
      setAdj(DEFAULT_ADJ)
      setResultURL(imageDataToDataURL(imageData))
    } catch (err) {
      setError(err?.message || 'Colorization failed')
    } finally {
      setBusy(false)
    }
  }, [ensureColorizer])

  // Re-apply adjustments instantly from the stored Lab + ab planes (no infer).
  const updateAdj = useCallback((next) => {
    setAdj(next)
    const r = resultRef.current
    if (!r) return
    const imageData = applyAdjustments(r.lab, r.abFull, next)
    setResultURL(imageDataToDataURL(imageData))
  }, [])

  const isDefault = useMemo(
    () =>
      adj.saturation === DEFAULT_ADJ.saturation &&
      adj.temperature === DEFAULT_ADJ.temperature &&
      adj.strength === DEFAULT_ADJ.strength,
    [adj],
  )

  const resetAll = useCallback(() => updateAdj(DEFAULT_ADJ), [updateAdj])

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__statusrow">
          <ModelStatus status={status} progress={progress} />
          {status === 'not-downloaded' && (
            <button className="btn" onClick={load}>
              Download model (~108 MB, one time)
            </button>
          )}
          {failed && (
            <button className="btn btn--retry" onClick={retry}>
              Retry
            </button>
          )}
        </div>
      </header>

      <main className="app__main">
        <div className="toolbar">
          <label className="btn">
            Choose image
            <input type="file" accept="image/*" onChange={onPick} hidden />
          </label>
          <button className="btn" onClick={onColorize} disabled={!sourceURL || busy}>
            {busy ? 'Colorizing…' : 'Colorize'}
          </button>
          {resultURL && (
            <a className="btn btn--retry" href={resultURL} download="colorized.png">
              Save result
            </a>
          )}
        </div>

        {error && <p className="error">{error}</p>}

        {sourceURL ? (
          <div className="workspace">
            {hasResult ? (
              <BeforeAfter before={sourceURL} after={resultURL} alt="photo" />
            ) : (
              <div className="compare">
                <figure>
                  <img src={sourceURL} alt="original" />
                  <figcaption>Original</figcaption>
                </figure>
                <figure>
                  <div className="compare__empty">
                    {ready ? 'Press Colorize' : 'Download the model, then Colorize'}
                  </div>
                  <figcaption>Colorized</figcaption>
                </figure>
              </div>
            )}

            {hasResult && (
              <div className="controls">
                <Slider
                  label="Saturation"
                  value={adj.saturation}
                  min={0}
                  max={2}
                  step={0.01}
                  onChange={(v) => updateAdj({ ...adj, saturation: v })}
                  format={(v) => `${Math.round(v * 100)}%`}
                />
                <Slider
                  label="Temperature"
                  value={adj.temperature}
                  min={-40}
                  max={40}
                  step={1}
                  onChange={(v) => updateAdj({ ...adj, temperature: v })}
                  format={(v) => (v > 0 ? `+${v}` : `${v}`)}
                />
                <Slider
                  label="Strength"
                  value={adj.strength}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={(v) => updateAdj({ ...adj, strength: v })}
                  format={(v) => `${Math.round(v * 100)}%`}
                />
                <button
                  className="btn btn--retry"
                  onClick={resetAll}
                  disabled={isDefault}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="placeholder">
            <p>Choose a black-and-white photo to begin.</p>
            <p className="placeholder__hint">
              Everything runs in your browser. Works fully offline after the
              model is downloaded once.
            </p>
          </div>
        )}
      </main>

      <footer className="app__footer">
        <span>100% offline after first load</span>
        <span>·</span>
        <span>Model: DDColor (Kang et al.)</span>
      </footer>
    </div>
  )
}
