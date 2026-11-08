import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { solutions, tools } from '../data'

const cards = [
  { label: 'End-to-end solutions', title: 'Complete processes, start to finish', link: '/solutions', color: 'from-navy to-g', items: solutions, from: 'left' },
  { label: 'Standalone tools', title: 'One focused tool, used on its own', link: '/tools', color: 'from-navy to-p', items: tools, from: 'right' },
]

export default function OfferCards() {
  return (
    <section className="py-24 px-6 bg-soft">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-g font-extrabold uppercase tracking-widest text-sm">Two ways to work with us</p>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight my-4 max-w-4xl">
            A whole service, or just the tool you need.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {cards.map((card) => (
            <Reveal key={card.label} from={card.from}>
              <Link
                to={card.link}
                className={`card block min-h-[460px] rounded-[2rem] p-10 text-white bg-gradient-to-br ${card.color} flex flex-col justify-end`}
              >
                <p className="text-xs font-extrabold tracking-widest uppercase opacity-80">{card.label}</p>
                <h3 className="text-3xl md:text-4xl font-extrabold my-3">{card.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.items.map((item) => (
                    <span key={item.name} className="bg-white/15 border border-white/30 px-3 py-1 rounded-full text-sm">
                      {item.name}
                    </span>
                  ))}
                </div>
                <span className="font-bold">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}