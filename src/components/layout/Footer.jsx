import { NavLink } from 'react-router-dom'
import { Share2, Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../ui/Logo'
import RegistrationMark from '../ui/RegistrationMark'

const navLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/materiales', label: 'Materiales' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/cotizar', label: 'Cotizar' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-[#F6F1E8] relative overflow-hidden">
      {/* Registration marks decoration */}
      <RegistrationMark size={40} color="#ffffff18" className="absolute top-6 left-6" />
      <RegistrationMark size={40} color="#ffffff18" className="absolute top-6 right-6" />
      <RegistrationMark size={40} color="#ffffff18" className="absolute bottom-6 left-6" />
      <RegistrationMark size={40} color="#ffffff18" className="absolute bottom-6 right-6" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-display text-2xl font-semibold">Publideas</span>
            </NavLink>
            <p className="text-[#8A8175] text-sm leading-relaxed max-w-xs">
              Impresión digital CMYK de alta calidad. Tarjetas, flyers, banners, libros, revistas, calendarios y más.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E53935] flex items-center justify-center transition-colors text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E88E5] flex items-center justify-center transition-colors"
              >
                <Share2 size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-5">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-[#F6F1E8]/70 hover:text-[#FDD835] transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8A8175] mb-5">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#F6F1E8]/70">
                <Phone size={15} className="text-[#2DC653] shrink-0" />
                <span>+502 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F6F1E8]/70">
                <Mail size={15} className="text-[#2DC653] shrink-0" />
                <span>hola@publideas.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F6F1E8]/70">
                <MapPin size={15} className="text-[#2DC653] shrink-0 mt-0.5" />
                <span>Ciudad de Guatemala, Guatemala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8175]">
          <span>© {new Date().getFullYear()} Publideas. Todos los derechos reservados.</span>
          <div className="flex items-center gap-1 text-[#8A8175]">
            <span className="inline-flex gap-1">
              <span style={{ color: '#E53935' }}>■</span>
              <span style={{ color: '#FDD835' }}>■</span>
              <span style={{ color: '#2DC653' }}>■</span>
              <span style={{ color: '#1E88E5' }}>■</span>
            </span>
            <span className="ml-1">Impresión digital CMYK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
