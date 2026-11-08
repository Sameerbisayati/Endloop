import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const watcher = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      watcher.disconnect()
      let n = 0
      const timer = setInterval(() => {
        n = Math.min(to, n + Math.ceil(to / 30))
        setValue(n)
        if (n >= to) clearInterval(timer)
      }, 40)
    })
    watcher.observe(ref.current)
    return () => watcher.disconnect()
  }, [to])

  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  { number: 100, suffix: '+', label: 'Documents processed in bulk' },
  { number: 11, suffix: '', label: 'Products across two ranges' },
  { number: 5, suffix: '', label: 'Core capabilities' },
  { number: 100, suffix: '%', label: 'Final sign-off by people' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} from="zoom" delay={i * 100}>
            <div className="card rounded-3xl border border-line p-8 text-center">
              <p className="text-5xl md:text-6xl font-extrabold gradient-text"><Counter to={s.number} suffix={s.suffix} /></p>
              <p className="mt-2 text-ink/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}