// Model fetch-and-cache layer.
//
// On first use the model is downloaded (with progress), its integrity is
// verified against a known sha256, and the bytes are persisted in the Cache
// Storage API so the app works fully offline forever after. Subsequent loads
// read straight from the cache — no network.
//
// The model source is a single config constant (MODEL.url) so swapping
// localhost (dev) -> HuggingFace (prod) is a one-line change.

import { MODEL, MODEL_CACHE } from './config.js'

// Load states surfaced to the UI (mirror App.jsx STATUS_LABEL):
//   'not-downloaded' | 'downloading' | 'verifying' | 'ready'
//   | 'offline-unavailable' | 'error'

async function sha256Hex(buffer) {
  const digest = await crypto.subtle.digest('SHA-256', buffer)
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// Is the model already cached and usable offline?
export async function isModelCached() {
  if (!('caches' in window)) return false
  const cache = await caches.open(MODEL_CACHE)
  const hit = await cache.match(MODEL.url)
  return !!hit
}

// Return the cached model bytes, or null if not cached.
async function readFromCache() {
  if (!('caches' in window)) return null
  const cache = await caches.open(MODEL_CACHE)
  const res = await cache.match(MODEL.url)
  if (!res) return null
  return res.arrayBuffer()
}

// Download with progress, verify, store. Returns the model ArrayBuffer.
async function downloadAndCache({ onProgress } = {}) {
  let res
  try {
    res = await fetch(MODEL.url)
  } catch (err) {
    // Network failure (offline, DNS, CORS preflight, ...)
    const e = new Error('network')
    e.cause = err
    throw e
  }
  if (!res.ok) throw new Error(`http ${res.status}`)

  const total = Number(res.headers.get('content-length')) || 0
  const reader = res.body.getReader()
  const chunks = []
  let received = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    received += value.length
    if (onProgress) onProgress(total ? received / total : null, received, total)
  }

  // Assemble into one ArrayBuffer.
  const bytes = new Uint8Array(received)
  let offset = 0
  for (const c of chunks) {
    bytes.set(c, offset)
    offset += c.length
  }
  const buffer = bytes.buffer

  // Integrity check (skip only if no expected hash configured).
  if (MODEL.sha256) {
    const got = await sha256Hex(buffer)
    if (got !== MODEL.sha256) {
      const e = new Error('integrity')
      e.expected = MODEL.sha256
      e.got = got
      throw e
    }
  }

  // Persist for offline use. Store a fresh Response so headers are clean.
  if ('caches' in window) {
    const cache = await caches.open(MODEL_CACHE)
    await cache.put(MODEL.url, new Response(buffer.slice(0), {
      headers: { 'content-type': 'application/octet-stream' },
    }))
  }

  return buffer
}

// Top-level entry: get the model bytes, using cache when possible.
// Calls onState(state) as it progresses so the UI can react.
export async function loadModel({ onState, onProgress } = {}) {
  const setState = (s) => onState && onState(s)

  // 1. Already cached -> ready immediately, fully offline.
  const cached = await readFromCache()
  if (cached) {
    setState('ready')
    return cached
  }

  // 2. Not cached and offline -> can't get it.
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    setState('offline-unavailable')
    throw new Error('offline-unavailable')
  }

  // 3. Download.
  setState('downloading')
  try {
    const buffer = await downloadAndCache({ onProgress })
    setState('verifying') // (verification already happened inside; brief state)
    setState('ready')
    return buffer
  } catch (err) {
    if (err.message === 'network' && navigator.onLine === false) {
      setState('offline-unavailable')
    } else {
      setState('error')
    }
    throw err
  }
}

// Force re-download (e.g. retry after a failed/corrupt download).
export async function clearModelCache() {
  if (!('caches' in window)) return
  const cache = await caches.open(MODEL_CACHE)
  await cache.delete(MODEL.url)
}
