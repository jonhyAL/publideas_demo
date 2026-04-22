import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from '../ui/AnimatedButton'
import RegistrationMark from '../ui/RegistrationMark'

const WHATSAPP_NUMBER = '50212345678'
const WA_MESSAGE = encodeURIComponent('¡Hola! Quiero cotizar una impresión.')

export default function CotizarCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-[#2B2B2B] relative overflow-hidden">
      {/* Decorative registration marks */}
      <RegistrationMark size={60} color="#ffffff12" className="absolute top-8 left-8" />
      <RegistrationMark size={60} color="#ffffff12" className="absolute bottom-8 right-8" />

      {/* CMYK blobs */}
      {[
        { color: '#E53935', pos: 'top-0 left-1/4', size: 300 },
        { color: '#FDD835', pos: 'bottom-0 right-1/3', size: 200 },
        { color: '#2DC653', pos: 'top-1/2 right-0', size: 180 },
        { color: '#1E88E5', pos: 'bottom-0 left-0', size: 220 },
      ].map(({ color, pos, size }) => (
        <div
          key={color}
          className={`absolute ${pos} rounded-full opacity-10 blur-3xl pointer-events-none`}
          style={{ width: size, height: size, backgroundColor: color }}
        />
      ))}

      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-4">¿Listo para imprimir?</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#F6F1E8] leading-tight mb-6">
            Cotiza tu proyecto{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #E53935, #FDD835, #2DC653, #1E88E5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ahora
            </span>
          </h2>
          <p className="text-[#8A8175] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Respuesta en minutos. Sin compromisos. Solo dinos qué necesitas y te damos el mejor precio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton
              onClick={() => navigate('/cotizar')}
              className="text-base px-8 py-4"
            >
              Llenar formulario <ArrowRight size={16} />
            </AnimatedButton>

            <AnimatedButton
              variant="whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`}
              className="text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Cotizar por WhatsApp
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
