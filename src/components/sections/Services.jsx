import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CreditCard, Megaphone, BookOpen, Layers, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { services } from '../../data/services'

const iconMap = { CreditCard, Megaphone, BookOpen, Layers }
const colors = {
  tarjetas: '#E53935',
  publicidad: '#FDD835',
  editorial: '#2DC653',
  adhesivos: '#1E88E5',
}
const textColors = {
  tarjetas: '#2B2B2B',
  publicidad: '#2B2B2B',
  editorial: '#F6F1E8',
  adhesivos: '#F6F1E8',
}
const bgColors = {
  tarjetas: '#FDE8E8',
  publicidad: '#FFFCE0',
  editorial: '#1C3A26',
  adhesivos: '#0D1E35',
}

function ServiceCard({ service, index }) {
  const navigate = useNavigate()
  const Icon = iconMap[service.icon] || CreditCard
  const accent = colors[service.id] || '#E53935'
  const bg = bgColors[service.id] || '#F6F1E8'
  const fg = textColors[service.id] || '#2B2B2B'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="rounded-3xl overflow-hidden cursor-pointer group relative"
      style={{ backgroundColor: bg }}
      onClick={() => navigate(service.href)}
    >
      <div className="p-8 flex flex-col gap-6 min-h-[320px]">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: accent + '22' }}
        >
          <Icon size={26} style={{ color: accent }} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: fg }}>
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: fg + 'bb' }}>
            {service.description}
          </p>
        </div>

        {/* Items chips */}
        <div className="flex flex-wrap gap-2">
          {service.items.slice(0, 4).map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: accent + '22', color: accent === '#FDD835' ? '#7A6000' : accent }}
            >
              {item}
            </span>
          ))}
          {service.items.length > 4 && (
            <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: fg + '18', color: fg + '80' }}>
              +{service.items.length - 4} más
            </span>
          )}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
          style={{ color: accent === '#FDD835' ? '#7A6000' : accent }}
        >
          Ver más <ArrowRight size={14} />
        </div>
      </div>

      {/* Accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: accent }} />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="py-24 bg-[#F6F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-2">Nuestros servicios</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#2B2B2B] leading-tight">
              Todo lo que<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #E53935, #FDD835, #2DC653, #1E88E5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                necesitas impreso
              </span>
            </h2>
          </div>
          <p className="text-[#8A8175] max-w-xs text-sm leading-relaxed">
            Desde tarjetas de presentación hasta libros completos — impresión CMYK de alta fidelidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
