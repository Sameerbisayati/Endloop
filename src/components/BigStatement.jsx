import { useRef } from 'react'
import { useSectionProgress } from '../hooks/useScroll'

export default function BigStatement() {
  const ref = useRef(null)
  const p = useSectionProgress(ref) 

  const scale = 0.5 + p * 0.8 
  const angle = 120 + p * 220 
  const second = p > 0.45 

  return (
    <section ref={ref} style={{ height: '300vh' }} className="relative">
      <div
        className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden flex items-center justify-center text-white text-center px-4"
        style={{ background: `linear-gradient(${angle}deg, #0b1432 0%, #3b6cff ${30 + p * 40}%, #7c4dff 100%)` }}
      >
        <h2
          className="text-6xl md:text-9xl font-extrabold tracking-tight leading-[1.05]"
          style={{ transform: `scale(${scale})` }}
        >
          Software <span className="text-emerald-300">prepares.</span>
          <br />
          <span style={{ opacity: second ? 1 : 0.1, transition: 'opacity 0.6s' }}>
            People <span className="text-emerald-300">decide.</span>
          </span>
        </h2>
      </div>
    </section>
  )
}