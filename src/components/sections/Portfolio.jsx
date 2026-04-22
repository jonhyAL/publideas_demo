import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems, portfolioCategories } from '../../data/portfolio'

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? portfolioItems : portfolioItems.filter((p) => p.category === active)

  return (
    <section className="py-24 bg-[#EFE8DC] relative overflow-hidden">
      <div className="paper-texture absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-2">Portafolio</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#2B2B2B]">
              Nuestro trabajo
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  active === id
                    ? 'bg-[#2B2B2B] text-[#F6F1E8]'
                    : 'bg-white/70 text-[#8A8175] hover:bg-[#E2D8C8]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#E2D8C8] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#F6F1E8] font-semibold text-sm">{item.title}</p>
                  <p className="text-[#F6F1E8]/60 text-xs mt-0.5">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
