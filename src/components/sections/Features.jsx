import { motion } from 'framer-motion'
import { Palette, Zap, Shield, HeartHandshake } from 'lucide-react'
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation'

const features = [
  {
    icon: Palette,
    title: 'Colores CMYK reales',
    description: 'Impresión de alta fidelidad con tintas CMYK. Lo que ves en pantalla es lo que obtienes impreso.',
    color: '#E53935',
  },
  {
    icon: Zap,
    title: 'Entrega rápida',
    description: 'Órdenes urgentes disponibles. Tiempo de producción según producto — consultanos.',
    color: '#FDD835',
  },
  {
    icon: Shield,
    title: 'Materiales premium',
    description: 'Couché, opalina, kraft, lino, adhesivos, metalizados, holográficos y más — todo certificado.',
    color: '#2DC653',
  },
  {
    icon: HeartHandshake,
    title: 'Atención personalizada',
    description: 'Te asesoramos en material, gramaje y acabados para que tu impresión luzca perfecta.',
    color: '#1E88E5',
  },
]

export default function Features() {
  const { ref, controls } = useScrollAnimation(0.15)

  return (
    <section className="py-24 bg-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">¿Por qué elegirnos?</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#2B2B2B]">
            La diferencia <span className="italic">Publideas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-7 rounded-2xl bg-[#EFE8DC] border border-[#E2D8C8] group hover:border-transparent hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center"
                style={{ backgroundColor: color + '20' }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <h3 className="font-semibold text-[#2B2B2B] mb-1.5">{title}</h3>
                <p className="text-sm text-[#8A8175] leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
