import Reveal from './Reveal'
import { capabilities } from '../data'

export default function Capabilities() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-g font-extrabold uppercase tracking-widest text-sm">What our technology can do</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight my-4">Five things we do really well.</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} from="zoom" delay={i * 100}>
              <div className="card h-full rounded-3xl border border-line p-7 bg-white">
                <span className="grid place-items-center w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-g to-b text-white font-extrabold">{i + 1}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-ink/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}