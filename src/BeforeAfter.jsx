import { useCallback, useEffect, useRef, useState } from 'react'

// Drag-divider before/after comparison. `before` and `after` are image src
// URLs. The after image is clipped to the divider position.
export default function BeforeAfter({ before, after, alt = '' }) {
  const [pos, setPos] = useState(50) // percent
  const [width, setWidth] = useState(0) // rendered container width (px)
  const ref = useRef(null)
  const dragging = useRef(false)

  // Track the rendered width so the clipped after-image stays aligned.
  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  const onDown = useCallback(
    (e) => {
      dragging.current = true
      setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
    },
    [setFromClientX],
  )
  const onMove = useCallback(
    (e) => {
      if (!dragging.current) return
      setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
    },
    [setFromClientX],
  )
  const onUp = useCallback(() => {
    dragging.current = false
  }, [])

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
      role="slider"
      aria-label="Before/after comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Colorized image is the base (fills the right/"After" side). The
          original is overlaid in the left region up to the divider, so the
          left shows "Before" and the right shows "After". */}
      <img className="ba__img" src={after} alt={`${alt} colorized`} draggable={false} />
      <div className="ba__after" style={{ width: `${pos}%` }}>
        {/* Inner image is pinned to the full container width so the clip
            (the parent's width) reveals it in place, keeping layers aligned. */}
        <img
          className="ba__img ba__img--after"
          src={before}
          alt={`${alt} original`}
          draggable={false}
          style={width ? { width: `${width}px` } : undefined}
        />
      </div>
      <div className="ba__divider" style={{ left: `${pos}%` }}>
        <span className="ba__handle" />
      </div>
      <span className="ba__label ba__label--left">Before</span>
      <span className="ba__label ba__label--right">After</span>
    </div>
  )
}
