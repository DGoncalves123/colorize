// Register the service worker (production builds only — in dev it would cache
// stale assets and fight Vite's HMR). The SW makes the app shell work fully
// offline; the model is cached separately by modelStore.js.
export function registerSW() {
  if (!import.meta.env.PROD) return
  if (!('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`, {
        scope: import.meta.env.BASE_URL,
      })
      .catch(() => {
        // Offline-first is best-effort; failure just means no offline shell.
      })
  })
}
