import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Printer, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from '../ui/AnimatedButton'
import RegistrationMark from '../ui/RegistrationMark'

// Floating product card component
function FloatingCard({ children, className, delay = 0, y = [-8, 8] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [y[0], y[1], y[0]] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// CMYK ink dot decorations
function InkDot({ color, size, className }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
      className={`rounded-full ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
    />
  )
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F6F1E8] pt-16">
      {/* Paper texture overlay */}
      <div className="paper-texture absolute inset-0 pointer-events-none z-0" />

      {/* Registration marks */}
      <RegistrationMark size={48} color="#2B2B2B22" className="absolute top-24 left-8" />
      <RegistrationMark size={48} color="#2B2B2B22" className="absolute bottom-20 right-8" />

      {/* CMYK ink dots */}
      <InkDot color="#E53935" size={200} className="absolute -top-10 -left-16 opacity-10 blur-3xl" />
      <InkDot color="#FDD835" size={160} className="absolute top-40 right-0 opacity-15 blur-3xl" />
      <InkDot color="#2DC653" size={120} className="absolute bottom-0 left-1/3 opacity-10 blur-3xl" />
      <InkDot color="#1E88E5" size={180} className="absolute -bottom-10 right-1/4 opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B2B2B]/6 border border-[#E2D8C8] text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-6"
            >
              <Printer size={12} />
              Impresión digital CMYK
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.06] tracking-tight text-[#2B2B2B] mb-6"
            >
              Tu marca,{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(90deg, #E53935, #FDD835, #2DC653, #1E88E5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                impresa
              </span>
              {' '}con brillantez
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="text-[#8A8175] text-lg leading-relaxed max-w-md mb-8"
            >
              Tarjetas, menús, banners, libros, calendarios, stickers y más — en materiales premium con acabados que sorprenden.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <AnimatedButton onClick={() => navigate('/cotizar')} className="text-base px-8 py-4">
                Cotizar ahora <ArrowRight size={16} />
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                onClick={() => navigate('/portafolio')}
                className="text-base px-8 py-4"
              >
                Ver portafolio
              </AnimatedButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {[
                { label: '+500 clientes', color: '#E53935' },
                { label: '100% CMYK real', color: '#2DC653' },
                { label: 'Entrega rápida', color: '#1E88E5' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[#8A8175]">
                  <Star size={13} fill={color} stroke={color} />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating product cards */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[380px] lg:min-h-[520px]">
            {/* Center large card */}
            <FloatingCard
              delay={0.3}
              y={[-6, 6]}
              className="absolute z-20"
            >
              <div className="w-64 h-40 rounded-2xl shadow-2xl overflow-hidden bg-[#2B2B2B] border border-white/10 flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-8 h-5 rounded bg-[#FDD835] mb-2" />
                    <div className="h-1 w-16 rounded bg-white/20" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#E53935]/60 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#E53935]" />
                  </div>
                </div>
                <div>
                  <div className="h-1 w-24 rounded bg-white/20 mb-1" />
                  <div className="h-1 w-16 rounded bg-white/10" />
                  <p className="text-[#F6F1E8]/50 text-xs mt-2 font-mono">TARJETA PREMIUM</p>
                </div>
              </div>
            </FloatingCard>

            {/* Top-left: Menu card */}
            <FloatingCard
              delay={0.5}
              y={[-10, 4]}
              className="absolute -top-8 left-4 lg:-left-8 z-10"
            >
              <div className="w-32 h-44 rounded-xl shadow-lg bg-[#EFE8DC] border border-[#E2D8C8] overflow-hidden flex flex-col">
                <div className="h-2 w-full bg-gradient-to-r from-[#E53935] via-[#FDD835] to-[#2DC653]" />
                <div className="p-3 flex-1 flex flex-col gap-2">
                  <div className="h-1.5 w-full rounded bg-[#2B2B2B]/20" />
                  <div className="h-1.5 w-3/4 rounded bg-[#2B2B2B]/20" />
                  <div className="h-1.5 w-full rounded bg-[#2B2B2B]/10" />
                  <div className="h-1.5 w-2/3 rounded bg-[#2B2B2B]/10" />
                  <div className="h-1.5 w-full rounded bg-[#2B2B2B]/10" />
                </div>
                <div className="text-center pb-2">
                  <span className="text-[9px] font-semibold text-[#8A8175] uppercase tracking-wide">Menú</span>
                </div>
              </div>
            </FloatingCard>

            {/* Bottom-right: Sticker */}
            <FloatingCard
              delay={0.6}
              y={[4, -8]}
              className="absolute -bottom-4 right-4 lg:-right-4 z-10"
            >
              <div className="w-28 h-28 rounded-full shadow-lg flex items-center justify-center"
                style={{
                  background: 'conic-gradient(from 0deg, #E53935, #FDD835, #2DC653, #1E88E5, #E53935)',
                  padding: 3
                }}
              >
                <div className="w-full h-full rounded-full bg-[#F6F1E8] flex items-center justify-center">
                  <span className="font-display text-xs text-[#2B2B2B] text-center leading-tight px-2">
                    Sticker<br/>
                    <span className="text-[#E53935]">CMYK</span>
                  </span>
                </div>
              </div>
            </FloatingCard>

            {/* Top-right: Price tag */}
            <FloatingCard
              delay={0.7}
              y={[-5, 9]}
              className="absolute top-4 right-0 lg:right-8 z-30"
            >
              <div className="bg-[#2DC653] text-white px-4 py-2 rounded-xl shadow-md text-sm font-semibold">
                Desde <span className="text-lg font-bold">Q7</span>
              </div>
            </FloatingCard>

            {/* Decorative grid dots */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #2B2B2B 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F6F1E8] to-transparent pointer-events-none z-10" />
    </section>
  )
}
