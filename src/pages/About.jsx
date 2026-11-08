import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Capabilities from '../components/Capabilities'
import CTA from '../components/CTA'

const values = [
  { title: 'Software prepares', text: 'Repetitive, error-prone tasks are handled by software.' },
  { title: 'People decide', text: 'Review and final sign-off always stay with professionals.' },
  { title: 'Built to be trusted', text: 'Reliability and clarity matter as much as appearance.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        label="About Endloops"
        title="Born inside an audit firm. Built for the people who do the work."
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal from="left">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Where we come from.</h2>
          </Reveal>
          <Reveal from="right">
            <p className="text-xl text-ink/70 mb-5">
              Alkazim is an accounting and audit firm based in Dubai. Over the years, its technology department built software that automates financial work. That department is now Endloops.
            </p>
            <p className="text-xl text-ink/70">
              Our users are accountants, auditors, finance teams and property management companies. Their work is detailed and time-sensitive, so they need tools they can trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-soft">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <Reveal key={item.title} from="zoom" delay={i * 150}>
              <div className="card h-full rounded-[2rem] p-10 text-white bg-gradient-to-br from-navy to-b min-h-[280px]">
                <h3 className="text-3xl font-extrabold mb-3">{item.title}</h3>
                <p className="text-lg text-white/80">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 text-center">
        <Reveal from="zoom">
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            Our ambition: to be the trusted automation partner for accounting, audit and property finance teams across the <span className="gradient-text">GCC and beyond.</span>
          </p>
        </Reveal>
      </section>

      <CTA />
    </>
  )
}