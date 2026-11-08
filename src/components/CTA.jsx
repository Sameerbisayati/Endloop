import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-white text-center py-28 px-6">
      <div className="blob bg-g w-96 h-96 -left-20 -top-20 animate-pulse" />
      <div className="blob bg-p w-96 h-96 -right-20 bottom-0 animate-pulse" />
      <Reveal from="zoom" className="relative">
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight">
          See what <span className="gradient-text">your team</span><br />could stop doing by hand.
        </h2>
        <p className="text-white/70 text-xl my-8 max-w-xl mx-auto">
          Tell us about your process and we will show you a demo built around it.
        </p>
        <Link to="/contact" className="btn btn-main">Request a demo →</Link>
      </Reveal>
    </section>
  )
}