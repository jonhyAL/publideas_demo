import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import FAQ from '../components/sections/FAQ'
import CotizarCTA from '../components/sections/CotizarCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <Stats />
      <FAQ />
      <CotizarCTA />
    </>
  )
}
