import { useEffect, useRef, useState } from 'react'

// Anima la parte numérica de un valor ("7", "100%") cuando entra en pantalla.
export default function CountUp({ value, duration = 1200 }) {
  const match = String(value).match(/^(\d+)(%?)$/)
  const [shown, setShown] = useState(value)
  const ref = useRef(null)

  useEffect(() => {
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const target = Number(match[1])
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration)
        setShown(`${Math.round(target * (1 - (1 - progress) ** 3))}${match[2]}`)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{shown}</span>
}
