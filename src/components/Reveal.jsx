import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, from = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const watcher = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true)
        watcher.disconnect()
      }
    }, { threshold: 0.15 })
    watcher.observe(ref.current)
    return () => watcher.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay + 'ms' }}
      className={`reveal ${from} ${show ? 'show' : ''} ${className}`}
    >
      {children}
    </div>
  )
}