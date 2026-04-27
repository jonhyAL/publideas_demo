import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Info } from 'lucide-react'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { papers, finishes } from '../../data/materials'

const products = [
  'Tarjetas de presentación',
  'Flyers / volantes',
  'Menús',
  'Brochures / dípticos / trípticos',
  'Posters',
  'Impresión Tabloide rebasado',
  'Adhesivos',
  'Banners',
  'Calendarios',
  'Libros',
  'Revistas',
  'Stickers / etiquetas',
  'Otro',
]

const sizes = [
  'Carta (21.6 × 27.9 cm)',
  'Tabloide (27.9 × 43.2 cm)',
  'Tabloide rebasado (33 × 47 cm)',
  'Adhesivo (33 × 48 cm)',
  'Otro / medida personalizada',
]

const printTypes = [
  { value: 'simplex', label: 'Simplex 4×0 (una cara)' },
  { value: 'duplex', label: 'Duplex 4×4 (dos caras, F y V)' },
]

const fileFormats = ['PDF', 'PNG']
const programs = ['COREL', 'ADOBE (Illustrator / Photoshop / InDesign)']

const serviceLevels = [
  { value: 'mismo-dia', label: 'Mismo día (entrega antes de las 12:00 pm)' },
  { value: 'dia-siguiente', label: 'Día siguiente (entrega después de las 12:00 pm)' },
]

const Field = ({ label, children, required, hint }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-[#8A8175] uppercase tracking-wide">
      {label}{required && <span className="text-[#E53935] ml-0.5">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-[#8A8175] leading-snug flex items-start gap-1"><Info size={11} className="shrink-0 mt-0.5" />{hint}</p>}
  </div>
)

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-[#E2D8C8] bg-white text-sm text-[#2B2B2B] focus:outline-none focus:border-[#2B2B2B] focus:ring-2 focus:ring-[#2B2B2B]/10 transition placeholder-[#C8BEAF]'

export default function QuoteForm() {
  const { openQuote } = useWhatsApp()
  const [form, setForm] = useState({
    name: '',
    product: '',
    size: '',
    paper: '',
    quantity: '',
    finish: '',
    printType: '',
    fileFormat: '',
    program: '',
    serviceLevel: '',
    message: '',
  })

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    openQuote(form)
  }

  const isDuplex = form.printType === 'duplex'

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-xl border border-[#E2D8C8] p-8 flex flex-col gap-6"
    >
      <div>
        <h2 className="font-display text-2xl text-[#2B2B2B]">Solicita tu cotización</h2>
        <p className="text-sm text-[#8A8175] mt-1">
          Completa los datos y te redirigiremos a WhatsApp con toda la info lista.
        </p>
      </div>

      {/* Datos básicos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Tu nombre" required>
          <input
            type="text"
            placeholder="Ej. María López"
            value={form.name}
            onChange={set('name')}
            required
            className={inputCls}
          />
        </Field>

        <Field label="Producto" required>
          <select value={form.product} onChange={set('product')} required className={inputCls}>
            <option value="">Seleccionar...</option>
            {products.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>

        <Field label="Medida" required>
          <select value={form.size} onChange={set('size')} required className={inputCls}>
            <option value="">Seleccionar medida...</option>
            {sizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Cantidad" required>
          <input
            type="number"
            placeholder="Ej. 500"
            min="1"
            value={form.quantity}
            onChange={set('quantity')}
            required
            className={inputCls}
          />
        </Field>

        <Field label="Material / Papel">
          <select value={form.paper} onChange={set('paper')} className={inputCls}>
            <option value="">Seleccionar material...</option>
            {papers.map((p) =>
              p.variants.map((v) => (
                <option key={`${p.id}-${v.label}`} value={`${p.name} ${v.label}`}>
                  {p.name} – {v.label}
                </option>
              ))
            )}
          </select>
        </Field>

        <Field label="Acabado">
          <select value={form.finish} onChange={set('finish')} className={inputCls}>
            <option value="">Sin acabado especial</option>
            {finishes.map((f) => (
              <option key={f.id} value={f.name}>{f.name}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Tipo de impresión */}
      <Field
        label="Tipo de impresión"
        required
        hint={isDuplex ? 'F y V: el mismo archivo debe contener las 2 imágenes. Si se repite un lado, armar igualmente el archivo con ambas caras.' : null}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {printTypes.map(({ value, label }) => (
            <label
              key={value}
              className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                form.printType === value
                  ? 'border-[#2B2B2B] bg-[#2B2B2B]/5'
                  : 'border-[#E2D8C8] hover:border-[#C8BEAF]'
              }`}
            >
              <input
                type="radio"
                name="printType"
                value={value}
                checked={form.printType === value}
                onChange={set('printType')}
                className="accent-[#2B2B2B]"
              />
              <span className="text-sm text-[#2B2B2B] font-medium">{label}</span>
            </label>
          ))}
        </div>
      </Field>

      {/* Archivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Formato de archivo">
          <select value={form.fileFormat} onChange={set('fileFormat')} className={inputCls}>
            <option value="">Seleccionar...</option>
            {fileFormats.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </Field>

        <Field label="Programa de diseño">
          <select value={form.program} onChange={set('program')} className={inputCls}>
            <option value="">Seleccionar...</option>
            {programs.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Nivel de servicio */}
      <Field
        label="Nivel de servicio"
        hint="Pedidos recibidos antes de las 12:00 pm se entregan el mismo día. Después de las 12:00 pm, al día siguiente. Horario: 8:30 am – 6:00 pm."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {serviceLevels.map(({ value, label }) => (
            <label
              key={value}
              className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                form.serviceLevel === value
                  ? 'border-[#2DC653] bg-[#2DC653]/8'
                  : 'border-[#E2D8C8] hover:border-[#C8BEAF]'
              }`}
            >
              <input
                type="radio"
                name="serviceLevel"
                value={value}
                checked={form.serviceLevel === value}
                onChange={set('serviceLevel')}
                className="accent-[#2DC653]"
              />
              <span className="text-sm text-[#2B2B2B] font-medium">{label}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="Detalles adicionales">
        <textarea
          placeholder="Diseño propio, instrucciones especiales, número de orden interna..."
          value={form.message}
          onChange={set('message')}
          rows={3}
          className={`${inputCls} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-4 px-8 rounded-full transition-colors text-sm shadow-md mt-2"
      >
        <Send size={16} />
        Enviar cotización por WhatsApp
      </button>

      <p className="text-xs text-[#8A8175] text-center">
        Al enviar serás redirigido a WhatsApp con tu solicitud pre-llenada.
      </p>
    </motion.form>
  )
}
