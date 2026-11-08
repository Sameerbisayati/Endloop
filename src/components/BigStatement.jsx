import { useRef } from 'react'
import { useSectionProgress } from '../hooks/useScroll'


export default function BigStatement() {
  const ref = useRef(null)
  const p = useSectionProgress(ref) // 0 to 1

  const scale = 0.55 + p * 0.7 
  const second = p > 0.45 

  return (
    <section ref={ref} style={{ height: '300vh' }} className="relative">
      <div className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden flex items-center justify-center bg-white text-ink text-center px-4">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(#0f1b3d 1px, transparent 1px), linear-gradient(90deg, #0f1b3d 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="blob bg-g w-[460px] h-[460px] -left-32 top-0" style={{ transform: `translateY(${p * 120}px)` }} />
        <div className="blob bg-b w-[420px] h-[420px] -right-24 bottom-0" style={{ transform: `translateY(${-p * 120}px)` }} />

        <div className="relative" style={{ transform: `scale(${scale})` }}>
          <p className="text-g font-extrabold uppercase tracking-widest text-sm mb-4">Our approach</p>
          <h2 className="text-6xl md:text-9xl font-extrabold tracking-tight leading-[1.05]">
            Software <span className="gradient-text">prepares.</span>
            <br />
            <span style={{ opacity: second ? 1 : 0.12, transition: 'opacity 0.8s' }}>
              People <span className="gradient-text">decide.</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}