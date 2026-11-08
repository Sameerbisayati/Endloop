import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollY } from '../hooks/useScroll'

const line1 = ['We', 'prepare', 'the', 'work.']
const line2 = ['You', 'make', 'the', 'call.']

const floatingCards = [
  { text: '📄 142 invoices read', small: 'extracted automatically', pos: 'top-0 left-10', depth: 40, color: 'text-emerald-300' },
  { text: '✓ Invoice #1042', small: 'matched to the ledger', pos: 'top-36 right-0', depth: 70, color: 'text-emerald-300' },
  { text: '⚠ Duplicate found', small: '#1044 repeats #1042', pos: 'top-72 left-0', depth: 55, color: 'text-red-300' },
  { text: '📝 Working paper drafted', small: 'ready for your review', pos: 'bottom-0 right-12', depth: 30, color: 'text-sky-300' },
]

export default function Hero() {
  const scrollY = useScrollY()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  function handleMove(e) {
    setMouse({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-[calc(100vh-68px)] overflow-hidden bg-navy text-white flex items-center"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="blob bg-g w-[520px] h-[520px] -left-40 -top-20 animate-pulse"
        style={{ transform: `translate(${mouse.x * 90}px, ${mouse.y * 90 + scrollY * 0.3}px)` }} />
      <div className="blob bg-b w-[480px] h-[480px] -right-32 top-10 animate-pulse"
        style={{ transform: `translate(${mouse.x * -70}px, ${mouse.y * -70 + scrollY * 0.2}px)`, animationDuration: '5s' }} />
      <div className="blob bg-p w-[420px] h-[420px] left-1/3 -bottom-48 animate-pulse"
        style={{ transform: `translate(${mouse.x * 50}px, ${scrollY * 0.4}px)`, animationDuration: '7s' }} />

      <div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20 grid lg:grid-cols-2 gap-10 items-center"
        style={{ transform: `translateY(${scrollY * 0.25}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        <div>
          <span className="inline-block px-4 py-1 mb-6 text-sm font-bold text-emerald-300 border border-white/20 rounded-full bg-white/5">
            Automation for Financial Professionals
          </span>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {line1.map((word, i) => (
              <span key={word} className="rise mr-3" style={{ animationDelay: i * 0.12 + 's' }}>{word}</span>
            ))}
            <br />
            {line2.map((word, i) => (
              <span key={word} className="rise mr-3 gradient-text" style={{ animationDelay: 0.5 + i * 0.12 + 's' }}>{word}</span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-9">
            Endloops automates the repetitive side of accounting, audit and property finance,
            so your people can focus on judgement and clients.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-main">Talk to us →</Link>
            <Link to="/solutions" className="btn btn-line">Explore products</Link>
          </div>
        </div>

        <div className="relative hidden lg:block h-[520px]">
          {floatingCards.map((card, i) => (
            <div
              key={card.text}
              className={`absolute ${card.pos}`}
              style={{ transform: `translate(${mouse.x * card.depth}px, ${mouse.y * card.depth - scrollY * 0.1}px)` }}
            >
              <div
                className="floaty w-64 p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"
                style={{ animationDelay: i * 0.8 + 's' }}
              >
                <p className={`font-bold ${card.color}`}>{card.text}</p>
                <p className="text-sm text-white/60">{card.small}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50 flex flex-col items-center gap-2">
        SCROLL
        <span className="block w-px h-10 bg-white/50 animate-bounce" />
      </div>
    </section>
  )
}