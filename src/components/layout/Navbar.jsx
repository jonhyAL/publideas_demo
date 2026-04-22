import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import AnimatedButton from '../ui/AnimatedButton'

const links = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/materiales', label: 'Materiales' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F1E8]/90 backdrop-blur-md shadow-sm border-b border-[#E2D8C8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <Logo size={30} />
          <span
            className="font-display text-xl font-semibold tracking-tight text-[#2B2B2B] group-hover:text-[#E53935] transition-colors"
          >
            Publideas
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#E53935] bg-[#E53935]/8'
                      : 'text-[#2B2B2B] hover:text-[#E53935] hover:bg-[#E53935]/8'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <AnimatedButton
            onClick={() => navigate('/cotizar')}
            className="hidden md:inline-flex"
          >
            Cotizar ahora
          </AnimatedButton>

          <button
            className="md:hidden p-2 rounded-lg text-[#2B2B2B] hover:bg-[#E2D8C8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#F6F1E8] border-t border-[#E2D8C8]"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive ? 'text-[#E53935] bg-[#E53935]/8' : 'text-[#2B2B2B] hover:bg-[#E2D8C8]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <AnimatedButton
                  onClick={() => { navigate('/cotizar'); setMenuOpen(false) }}
                  className="w-full justify-center"
                >
                  Cotizar ahora
                </AnimatedButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
