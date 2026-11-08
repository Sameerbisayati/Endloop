import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ProductGrid({ items }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Reveal key={item.name} from={i % 2 === 0 ? 'left' : 'right'}>
            <div className="card h-full rounded-[2rem] border border-line p-10 bg-white">
              <div className="flex items-center justify-between mb-6">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-g to-b text-white text-xl font-extrabold">
                  {i + 1}
                </span>
                <span className={'text-sm font-extrabold ' + (item.status === 'Live' ? 'text-g' : 'text-p')}>
                  ● {item.status}
                </span>
              </div>
              <h3 className="text-3xl font-extrabold mb-3">{item.name}</h3>
              <p className="text-lg text-ink/60 mb-8">{item.text}</p>
              <Link to="/contact" className="font-bold text-g hover:underline">Talk to us about this →</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}