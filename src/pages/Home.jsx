import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Process from '../components/sections/Process'
import Portfolio from '../components/sections/Portfolio'
import Features from '../components/sections/Features'
import FAQ from '../components/sections/FAQ'
import CotizarCTA from '../components/sections/CotizarCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <Stats />
      <Process />
      <Portfolio />
      <Features />
      <FAQ />
      <CotizarCTA />
    </>
  )
}
