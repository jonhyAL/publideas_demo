import { motion } from 'framer-motion'
import QuoteForm from '../components/ui/QuoteForm'
import RegistrationMark from '../components/ui/RegistrationMark'

export default function Cotizar() {
  return (
    <div className="pt-16 bg-[#F6F1E8] min-h-screen">
      <section className="py-20 relative overflow-hidden">
        <div className="paper-texture absolute inset-0 pointer-events-none" />
        <RegistrationMark size={60} color="#2B2B2B14" className="absolute top-12 left-8" />
        <RegistrationMark size={60} color="#2B2B2B14" className="absolute bottom-12 right-8" />
        <div className="max-w-2xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Sin compromiso</p>
            <h1 className="font-display text-5xl text-[#2B2B2B] mb-4">
              Cotiza tu{' '}
              <span className="italic" style={{ background: 'linear-gradient(90deg,#E53935,#FDD835,#2DC653,#1E88E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>impresión</span>
            </h1>
            <p className="text-[#8A8175]">Completa el formulario y recibe tu cotización por WhatsApp en minutos.</p>
          </motion.div>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
