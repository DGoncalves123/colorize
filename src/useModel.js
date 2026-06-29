// React hook wrapping the model fetch-and-cache layer. Surfaces load status +
// progress to the UI and exposes the loaded model bytes for inference (#8).

import { useCallback, useEffect, useRef, useState } from 'react'
import { isModelCached, loadModel, clearModelCache } from './modelStore.js'

export function useModel() {
  const [status, setStatus] = useState('unknown')
  const [progress, setProgress] = useState(null)
  const bytesRef = useRef(null)

  // On mount, check whether the model is already cached (offline-ready).
  useEffect(() => {
    let cancelled = false
    isModelCached().then((cached) => {
      if (cancelled) return
      setStatus(cached ? 'cached-idle' : 'not-downloaded')
    })
    return () => {
      cancelled = true
    }
  }, [])

  // Trigger download (or load-from-cache). Resolves to the model ArrayBuffer.
  const load = useCallback(async () => {
    setProgress(null)
    try {
      const buffer = await loadModel({
        onState: setStatus,
        onProgress: (p) => setProgress(p),
      })
      bytesRef.current = buffer
      return buffer
    } catch {
      // status already set to 'error' / 'offline-unavailable' by loadModel
      return null
    }
  }, [])

  // Retry after failure/corruption: drop cache, then load again.
  const retry = useCallback(async () => {
    await clearModelCache()
    setStatus('not-downloaded')
    return load()
  }, [load])

  return { status, progress, load, retry, getBytes: () => bytesRef.current }
}
