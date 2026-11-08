import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Stats from '../components/Stats'
import OfferCards from '../components/OfferCards'
import ScrollStory from '../components/ScrollStory'
import BigStatement from '../components/BigStatement'
import Capabilities from '../components/Capabilities'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <OfferCards />
      <ScrollStory />
      <BigStatement />
      <Capabilities />
      <CTA />
    </>
  )
}