import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import CustomCursor from './components/ui/CustomCursor'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Materiales from './pages/Materiales'
import Portafolio from './pages/Portafolio'
import Nosotros from './pages/Nosotros'
import Cotizar from './pages/Cotizar'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cotizar" element={<Cotizar />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

