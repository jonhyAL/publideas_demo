import { motion } from 'framer-motion'
import { CreditCard, Megaphone, BookOpen, Layers, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/services'
import AnimatedButton from '../components/ui/AnimatedButton'

const iconMap = { CreditCard, Megaphone, BookOpen, Layers }
const accentColors = {
  tarjetas: '#E53935',
  publicidad: '#FDD835',
  editorial: '#2DC653',
  adhesivos: '#1E88E5',
}

export default function Servicios() {
  const navigate = useNavigate()

  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="paper-texture absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Lo que ofrecemos</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B] mb-5">
              Nuestros{' '}
              <span className="italic" style={{ background: 'linear-gradient(90deg,#E53935,#FDD835,#2DC653,#1E88E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                servicios
              </span>
            </h1>
            <p className="text-[#8A8175] text-lg max-w-xl mx-auto leading-relaxed">
              Impresión digital CMYK de alta calidad en la más amplia variedad de formatos, materiales y acabados.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, i) => {
        const Icon = iconMap[service.icon]
        const color = accentColors[service.id]
        const isEven = i % 2 === 0
        return (
          <section key={service.id} id={service.id} className={`py-20 ${isEven ? 'bg-[#F6F1E8]' : 'bg-[#EFE8DC]'}`}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-square rounded-3xl flex items-center justify-center" style={{ backgroundColor: color + '14', border: `2px dashed ${color}33` }}>
                    <Icon size={80} style={{ color: color + '88' }} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ backgroundColor: color + '18', color }}>
                    <Icon size={12} /> {service.title}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-[#2B2B2B] mb-4">{service.title}</h2>
                  <p className="text-[#8A8175] leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#2B2B2B]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <AnimatedButton onClick={() => navigate('/cotizar')}>
                    Cotizar este servicio <ArrowRight size={14} />
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
