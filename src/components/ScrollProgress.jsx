import { useScrollY } from '../hooks/useScroll'

export default function ScrollProgress() {
  const y = useScrollY()
  const max = document.body.scrollHeight - window.innerHeight
  const percent = max > 0 ? (y / max) * 100 : 0

  return (
    <div
      className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-g via-b to-p"
      style={{ width: percent + '%' }}
    />
  )
}