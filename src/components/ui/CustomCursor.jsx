import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#E53935', '#FDD835', '#2DC653', '#1E88E5']

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const colorIndexRef = useRef(0)
  const lastColorChange = useRef(Date.now())
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let rafId

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const now = Date.now()
      if (now - lastColorChange.current > 800) {
        colorIndexRef.current = (colorIndexRef.current + 1) % COLORS.length
        dot.style.background = COLORS[colorIndexRef.current]
        ring.style.borderColor = COLORS[colorIndexRef.current]
        lastColorChange.current = now
      }
    }

    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      dot.style.transform = `translate(${pos.current.x - 5}px, ${pos.current.y - 5}px)`
      ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`

      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: COLORS[0],
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background 0.4s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `2px solid ${COLORS[0]}`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'border-color 0.4s ease',
        }}
      />
    </>
  )
}
