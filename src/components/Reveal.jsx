import { useEffect, useRef } from 'react'

export default function Reveal({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    document.documentElement.classList.add('has-motion-reveal')
    const node = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.disconnect() }
    }, { threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className="section-reveal">{children}</div>
}
