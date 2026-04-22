import { motion } from 'framer-motion'
import { papers, adhesives, finishes, banners } from '../data/materials'

const Section = ({ title, items, color }) => (
  <div>
    <h2 className="font-display text-2xl text-[#2B2B2B] mb-6" style={{ borderLeft: `4px solid ${color}`, paddingLeft: 16 }}>
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-5 border border-[#E2D8C8] hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-[#2B2B2B] text-sm">{item.name}</h3>
            <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: color }}>
              {item.price}
            </span>
          </div>
          {item.description && <p className="text-xs text-[#8A8175] leading-relaxed">{item.description}</p>}
          {item.gsm && <p className="text-xs text-[#8A8175] mt-1">Gramaje: {item.gsm}</p>}
        </motion.div>
      ))}
    </div>
  </div>
)

export default function Materiales() {
  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Catálogo</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B] mb-4">
              Materiales &{' '}
              <span className="italic" style={{ background: 'linear-gradient(90deg,#E53935,#FDD835,#2DC653,#1E88E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                acabados
              </span>
            </h1>
            <p className="text-[#8A8175] max-w-lg mx-auto">Selección de papeles, adhesivos, acabados especiales y formatos de banner con precios referenciales.</p>
          </motion.div>

          <div className="flex flex-col gap-16">
            <Section title="Tipos de papel" items={papers} color="#E53935" />
            <Section title="Adhesivos & Vinil" items={adhesives} color="#1E88E5" />
            <Section title="Acabados especiales" items={finishes} color="#2DC653" />
            <Section title="Banners y pendones" items={banners} color="#FDD835" />
          </div>
        </div>
      </section>
    </div>
  )
}
