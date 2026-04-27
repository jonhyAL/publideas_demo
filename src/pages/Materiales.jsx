import { motion } from 'framer-motion'
import { papers, adhesives, finishes } from '../data/materials'

// Card for papers (has variants/gramajes)
function PaperCard({ paper, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-5 border border-[#E2D8C8] hover:shadow-md transition-shadow flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[#2B2B2B] text-sm">{paper.name}</h3>
        <span className="w-3 h-3 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: color }} />
      </div>
      {paper.description && (
        <p className="text-xs text-[#8A8175] leading-relaxed">{paper.description}</p>
      )}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {paper.variants.map((v) => (
          <span
            key={v.label}
            className="text-xs px-2.5 py-1 rounded-full border font-medium flex items-center gap-1.5"
            style={{ borderColor: color + '55', color, backgroundColor: color + '10' }}
          >
            {v.label}
            {v.price && v.price !== 'consultar' && (
              <span className="font-bold text-[#2B2B2B]">{v.price}</span>
            )}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Card for simple items (adhesives, finishes)
function SimpleCard({ item, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-5 border border-[#E2D8C8] hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: color }} />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-[#2B2B2B] text-sm">{item.name}</h3>
            {item.price && item.price !== 'consultar' && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white shrink-0" style={{ backgroundColor: color }}>
                {item.price}
              </span>
            )}
          </div>
          {item.description && <p className="text-xs text-[#8A8175] leading-relaxed">{item.description}</p>}
        </div>
      </div>
    </motion.div>
  )
}

const SectionHeader = ({ title, color }) => (
  <h2
    className="font-display text-2xl text-[#2B2B2B] mb-6"
    style={{ borderLeft: `4px solid ${color}`, paddingLeft: 16 }}
  >
    {title}
  </h2>
)

export default function Materiales() {
  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Catálogo</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B] mb-4">
              Materiales &{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(90deg,#E53935,#FDD835,#2DC653,#1E88E5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                acabados
              </span>
            </h1>
            <p className="text-[#8A8175] max-w-lg mx-auto">
              Selección de sustratos, gramajes y acabados disponibles para tu impresión.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {/* Papeles */}
            <div>
              <SectionHeader title="Tipos de papel" color="#E53935" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {papers.map((paper) => (
                  <PaperCard key={paper.id} paper={paper} color="#E53935" />
                ))}
              </div>
            </div>

            {/* Adhesivos */}
            <div>
              <SectionHeader title="Adhesivos & Vinil" color="#1E88E5" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {adhesives.map((item) => (
                  <SimpleCard key={item.id} item={item} color="#1E88E5" />
                ))}
              </div>
            </div>

            {/* Acabados */}
            <div>
              <SectionHeader title="Acabados" color="#2DC653" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {finishes.map((item) => (
                  <SimpleCard key={item.id} item={item} color="#2DC653" />
                ))}
              </div>
            </div>

            {/* Medidas disponibles */}
            <div>
              <SectionHeader title="Medidas estándar" color="#FDD835" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Carta', sub: '21.6 × 27.9 cm' },
                  { label: 'Tabloide', sub: '27.9 × 43.2 cm' },
                  { label: 'Tabloide rebasado', sub: '33 × 47 cm' },
                  { label: 'Adhesivo', sub: '33 × 48 cm' },
                ].map(({ label, sub }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl p-5 border border-[#E2D8C8] flex flex-col items-center text-center gap-2"
                  >
                    <span className="font-semibold text-[#2B2B2B] text-sm">{label}</span>
                    <span className="text-xs text-[#8A8175] font-mono">{sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
