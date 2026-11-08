import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'

const next = [
  'You tell us about your process.',
  'We show you a demo built around it.',
  'You decide what fits. The sign-off is always yours.',
]

export default function Contact() {
  return (
    <>
      <PageHeader
        label="Let's talk"
        title="Request a demo."
        text="Tell us what takes up your team's time and we will show you how Endloops can prepare it."
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <Reveal from="left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">What happens next</h2>
            {next.map((text, i) => (
              <div key={text} className="flex items-center gap-5 mb-6">
                <span className="grid place-items-center w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-g to-b text-white text-xl font-extrabold">{i + 1}</span>
                <p className="text-xl text-ink/70">{text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal from="right">
            <div className="rounded-[2rem] border border-line p-8 md:p-10 shadow-2xl shadow-ink/10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}