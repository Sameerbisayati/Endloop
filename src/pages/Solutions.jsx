import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { solutions } from '../data'

const flow = [
  { title: 'Documents go in', text: 'Invoices, statements, contracts and ledgers are loaded into the solution.' },
  { title: 'Software prepares', text: 'It reads, matches, checks against rules and drafts the working papers.' },
  { title: 'You review and sign off', text: 'A professional reviews every exception. The final decision is always yours.' },
]

export default function Solutions() {
  return (
    <>
      <PageHeader
        label="End-to-end solutions"
        title="Entire processes, run from start to finish."
        text="Complete software that runs a whole financial service. Documents go in, review-ready work comes out."
      />
      <ProductGrid items={solutions} />

      <section className="py-24 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12">How a solution runs.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {flow.map((item, i) => (
              <Reveal key={item.title} from="zoom" delay={i * 150}>
                <div className="card h-full rounded-[2rem] border border-line bg-white p-10">
                  <p className="text-7xl font-extrabold gradient-text">0{i + 1}</p>
                  <h3 className="text-2xl font-extrabold mt-3 mb-2">{item.title}</h3>
                  <p className="text-lg text-ink/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}