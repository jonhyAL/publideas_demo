import { motion } from 'framer-motion'
import { MessageSquare, FileUp, Printer, Package } from 'lucide-react'
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Solicita tu cotización',
    description: 'Cuéntanos qué necesitas por WhatsApp o nuestro formulario. Respondemos en minutos.',
    color: '#E53935',
  },
  {
    icon: FileUp,
    number: '02',
    title: 'Envía tu arte',
    description: 'Sube tu diseño en PDF, AI, PSD o CDR. ¿No tienes diseño? Te ayudamos.',
    color: '#FDD835',
  },
  {
    icon: Printer,
    number: '03',
    title: 'Imprimimos',
    description: 'Procesamos tu orden con impresión CMYK de alta fidelidad en los materiales elegidos.',
    color: '#2DC653',
  },
  {
    icon: Package,
    number: '04',
    title: 'Recibe o retira',
    description: 'Entrega a domicilio o retiro en local. Tiempo de entrega según producto y cantidad.',
    color: '#1E88E5',
  },
]

export default function Process() {
  const { ref, controls } = useScrollAnimation(0.15)

  return (
    <section className="py-24 bg-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">¿Cómo funciona?</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#2B2B2B]">
            Tu pedido, <span className="italic">en 4 pasos</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#E2D8C8] z-0" />

          {steps.map(({ icon: Icon, number, title, description, color }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-sm"
                style={{ backgroundColor: color + '18', border: `2px solid ${color}44` }}
              >
                <Icon size={24} style={{ color }} />
              </div>

              {/* Number */}
              <span className="font-display text-xs font-bold tracking-widest text-[#2B2B2B]/20 mb-1">{number}</span>

              <h3 className="font-semibold text-[#2B2B2B] mb-2 text-base">{title}</h3>
              <p className="text-sm text-[#8A8175] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
