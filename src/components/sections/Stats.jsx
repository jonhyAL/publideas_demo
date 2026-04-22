import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, staggerContainer } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '+500', label: 'Clientes satisfechos', color: '#E53935' },
  { value: '+50', label: 'Tipos de producto', color: '#FDD835' },
  { value: '5+', label: 'Años de experiencia', color: '#2DC653' },
  { value: '100%', label: 'Impresión CMYK real', color: '#1E88E5' },
]

export default function Stats() {
  const { ref, controls } = useScrollAnimation(0.2)

  return (
    <section className="py-20 bg-[#EFE8DC] relative overflow-hidden">
      {/* Noise texture */}
      <div className="paper-texture absolute inset-0 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map(({ value, label, color }) => (
            <motion.div key={label} variants={fadeUp} className="text-center">
              <div
                className="font-display text-5xl md:text-6xl font-bold mb-2"
                style={{ color }}
              >
                {value}
              </div>
              <p className="text-sm text-[#8A8175] font-medium leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
