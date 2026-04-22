import Portfolio from '../components/sections/Portfolio'

export default function Portafolio() {
  return (
    <div className="pt-16 bg-[#F6F1E8]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Galería</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B]">Nuestro trabajo</h1>
        </div>
      </section>
      <Portfolio />
    </div>
  )
}
