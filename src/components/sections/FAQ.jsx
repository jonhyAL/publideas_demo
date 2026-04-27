import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { faqs } from '../../data/faqs'

const ACCENTS = ['#E53935', '#FDD835', '#2DC653', '#1E88E5', '#E53935']

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 48 : -48, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -48 : 48, opacity: 0, scale: 0.97 }),
}

export default function FAQ() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (i, d) => { setDir(d); setActive(i) }
  const next = () => go((active + 1) % faqs.length, 1)
  const prev = () => go((active - 1 + faqs.length) % faqs.length, -1)

  const accent = ACCENTS[active]

  return (
    <section className="py-24 bg-[#1E1E1E] relative overflow-hidden">
      <div className="paper-texture absolute inset-0 pointer-events-none opacity-20" />

      {/* Subtle CMYK glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none" style={{ backgroundColor: accent }} />

      <div className="max-w-2xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-3">Preguntas frecuentes</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#F6F1E8]">
            ¿Tienes dudas?
          </h2>
        </motion.div>

        {/* Stack container */}
        <div className="relative pb-6">
          {/* Ghost cards (peeking below) */}
          <div
            className="absolute bottom-0 inset-x-8 rounded-3xl bg-white/8 pointer-events-none"
            style={{ height: 64, zIndex: 1 }}
          />
          <div
            className="absolute bottom-2 inset-x-4 rounded-3xl bg-white/14 pointer-events-none"
            style={{ height: 64, zIndex: 2 }}
          />

          {/* Active card */}
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-3xl p-8 md:p-10 cursor-pointer"
              style={{ zIndex: 3 }}
              onClick={next}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: accent + '18', color: accent }}
                >
                  {String(active + 1).padStart(2, '0')} / {String(faqs.length).padStart(2, '0')}
                </span>
                <span className="text-xs text-[#C8BEAF] select-none">toca para avanzar</span>
              </div>

              {/* Question */}
              <h3 className="font-display text-2xl md:text-3xl text-[#2B2B2B] leading-snug mb-4">
                {faqs[active].question}
              </h3>

              {/* Accent line */}
              <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: accent }} />

              {/* Answer */}
              <p className="text-[#8A8175] text-sm md:text-base leading-relaxed">
                {faqs[active].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            aria-label="Pregunta anterior"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {faqs.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? 1 : -1)}
                aria-label={`Pregunta ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  backgroundColor: i === active ? accent : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Siguiente pregunta"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
