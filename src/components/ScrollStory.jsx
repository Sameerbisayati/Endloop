import { useRef } from 'react'
import { steps } from '../data'
import { useSectionProgress } from '../hooks/useScroll'

const colors = ['#0b1432', '#0d2a52', '#0b4a45', '#2d1b69', '#0b5a3e']

export default function ScrollStory() {
  const ref = useRef(null)
  const progress = useSectionProgress(ref)

  const index = Math.min(steps.length - 1, Math.floor(progress * steps.length))
  const step = steps[index]

  return (
    <section ref={ref} style={{ height: '500vh' }} className="relative">
      <div
        className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden flex items-center text-white px-6"
        style={{ background: colors[index], transition: 'background 0.8s' }}
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
          <div key={index} className="page-fade">
            <p className="text-emerald-300 font-extrabold uppercase tracking-widest text-sm">How it works</p>
            <p className="text-8xl md:text-[10rem] font-extrabold leading-none opacity-30">0{index + 1}</p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight -mt-4">{step.title}</h2>
            <p className="text-lg md:text-2xl text-white/70 mt-4 max-w-md">{step.text}</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-6 md:p-8">
            <div className="flex gap-2 mb-6">
              {steps.map((s, i) => (
                <span key={s.title} className={'h-2 flex-1 rounded-full ' + (i <= index ? 'bg-emerald-300' : 'bg-white/20')} />
              ))}
            </div>

            <div key={'rows' + index}>
              {step.rows.map(([label, value, type], i) => (
                <div
                  key={label}
                  style={{ animationDelay: i * 0.15 + 's' }}
                  className={'row-in flex justify-between gap-4 p-4 mb-3 rounded-xl ' + (type === 'bad' ? 'bg-red-500/20 ring-1 ring-red-300' : 'bg-white/10')}
                >
                  <span>{label}</span>
                  <b className={type === 'ok' ? 'text-emerald-300' : type === 'bad' ? 'text-red-300' : ''}>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}