import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '50212345678'
const WHATSAPP_MESSAGE = encodeURIComponent('¡Hola! Me interesa cotizar una impresión. ¿Me pueden ayudar?')

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle size={26} strokeWidth={2} />
        {/* Pulsing ring */}
        <motion.span
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
          style={{ zIndex: -1 }}
        />
      </motion.div>
    </a>
  )
}
