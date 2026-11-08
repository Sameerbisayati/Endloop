import { useEffect, useState } from 'react'

export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    function onScroll() { setY(window.scrollY) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return y
}

export function useSectionProgress(ref) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    function onScroll() {
      if (!ref.current) return
      const box = ref.current.getBoundingClientRect()
      const scrollable = box.height - window.innerHeight
      const value = -box.top / scrollable
      setProgress(Math.min(1, Math.max(0, value)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
  return progress
}