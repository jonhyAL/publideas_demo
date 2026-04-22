import { motion } from 'framer-motion'
import RegistrationMark from '../components/ui/RegistrationMark'

const values = [
  { label: 'Calidad', description: 'Procesos de impresión CMYK de alta fidelidad con tintas y materiales certificados.', color: '#E53935' },
  { label: 'Rapidez', description: 'Tiempos de producción optimizados para cumplir tus plazos sin comprometer la calidad.', color: '#FDD835' },
  { label: 'Creatividad', description: 'Asesoría en diseño y materiales para que cada impresión cuente una historia.', color: '#2DC653' },
  { label: 'Confianza', description: 'Más de 500 clientes nos respaldan. Transparencia en precios, plazos y resultados.', color: '#1E88E5' },
]

export default function Nosotros() {
  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="paper-texture absolute inset-0 pointer-events-none" />
        <RegistrationMark size={60} color="#2B2B2B18" className="absolute top-12 right-12" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Quiénes somos</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#2B2B2B] mb-6">
              Impresión con{' '}
              <span className="italic" style={{ background: 'linear-gradient(90deg,#E53935,#FDD835,#2DC653,#1E88E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>propósito</span>
            </h1>
            <p className="text-[#8A8175] text-lg leading-relaxed">
              Publideas nació de la pasión por el diseño y la impresión de calidad. Somos una empresa guatemalteca dedicada a convertir tus ideas en piezas impresas que impactan — desde una tarjeta de presentación hasta un libro completo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ label, description, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E2D8C8]"
              >
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: color }} />
                <h3 className="font-semibold text-[#2B2B2B] mb-2">{label}</h3>
                <p className="text-sm text-[#8A8175] leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
