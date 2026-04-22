import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { papers, finishes } from '../../data/materials'

const products = [
  'Tarjetas de presentación',
  'Flyers / volantes',
  'Menús',
  'Brochures / dípticos / trípticos',
  'Banners',
  'Calendarios',
  'Libros',
  'Revistas',
  'Stickers / etiquetas',
  'Otro',
]

const Field = ({ label, children, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-[#8A8175] uppercase tracking-wide">
      {label}{required && <span className="text-[#E53935] ml-0.5">*</span>}
    </label>
    {children}
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
    message: '',
  })

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    openQuote(form)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-xl border border-[#E2D8C8] p-8 flex flex-col gap-6"
    >
      <h2 className="font-display text-2xl text-[#2B2B2B]">Solicita tu cotización</h2>
      <p className="text-sm text-[#8A8175] -mt-4">
        Completa los datos y te redirigiremos a WhatsApp con toda la info lista.
      </p>

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

        <Field label="Tamaño / medidas" required>
          <input
            type="text"
            placeholder="Ej. 9×5 cm, A4, 30×70 cm..."
            value={form.size}
            onChange={set('size')}
            required
            className={inputCls}
          />
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

        <Field label="Tipo de papel">
          <select value={form.paper} onChange={set('paper')} className={inputCls}>
            <option value="">Sin preferencia</option>
            {papers.map((p) => (
              <option key={p.id} value={p.name}>{p.name} – {p.price}</option>
            ))}
          </select>
        </Field>

        <Field label="Acabado">
          <select value={form.finish} onChange={set('finish')} className={inputCls}>
            <option value="">Sin acabado especial</option>
            {finishes.map((f) => (
              <option key={f.id} value={f.name}>{f.name} – {f.price}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Detalles adicionales">
        <textarea
          placeholder="Diseño propio, doble cara, impresión full color, necesito diseño gráfico..."
          value={form.message}
          onChange={set('message')}
          rows={4}
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
