import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import Capabilities from '../components/Capabilities'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { tools } from '../data'

export default function Tools() {
  return (
    <>
      <PageHeader
        label="Standalone tools"
        title="One need. One focused tool."
        text="Use any tool on its own. Some are in use today and others are in development. The range keeps growing."
      />
      <ProductGrid items={tools} />

      <section className="py-24 px-6 bg-soft text-center">
        <Reveal from="zoom">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto">
            Start with one tool. <span className="gradient-text">Grow when you are ready.</span>
          </h2>
        </Reveal>
      </section>

      <Capabilities />
      <CTA />
    </>
  )
}