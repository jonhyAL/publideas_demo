import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import AnimatedButton from '../components/ui/AnimatedButton'

const WHATSAPP = 'https://wa.me/50212345678?text=' + encodeURIComponent('¡Hola Publideas! Quiero obtener información.')

const info = [
  { icon: Phone, label: 'Teléfono / WhatsApp', value: '+502 1234-5678', color: '#2DC653', href: WHATSAPP },
  { icon: Mail, label: 'Correo electrónico', value: 'hola@publideas.com', color: '#1E88E5', href: 'mailto:hola@publideas.com' },
  { icon: MapPin, label: 'Ubicación', value: 'Metro Pino Suárez, Ciudad de México', color: '#E53935', href: 'https://maps.google.com/?q=Metro+Pino+Suárez,+CDMX' },
  { icon: Clock, label: 'Horario de atención', value: 'Lunes a viernes 8:30 am – 6:00 pm', color: '#FDD835', href: null },
]

export default function Contacto() {
  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Estamos aquí</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B] mb-4">Contáctanos</h1>
            <p className="text-[#8A8175] max-w-md mx-auto">¿Tienes preguntas? Escríbenos por WhatsApp o al correo — respondemos rápido.</p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {info.map(({ icon: Icon, label, value, color, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#E2D8C8] hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: color + '20' }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-[#8A8175] font-medium mb-1">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#2B2B2B] hover:text-[#E53935] transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-[#2B2B2B]">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full rounded-3xl overflow-hidden border border-[#E2D8C8] shadow-md mb-10"
            style={{ height: 380 }}
          >
            <iframe
              title="Ubicación Publideas"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Metro+Pino+Su%C3%A1rez%2C+Ciudad+de+M%C3%A9xico%2C+CDMX%2C+M%C3%A9xico&output=embed&hl=es&z=16"
            />
          </motion.div>

          <div className="text-center">
            <AnimatedButton variant="whatsapp" href={WHATSAPP} className="text-base px-8 py-4">
              <MessageCircle size={18} /> Escribir por WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
