export default function Ticker() {
  const items = [
    'Tarjetas de presentación',
    'Menús',
    'Flyers',
    'Banners',
    'Calendarios',
    'Libros',
    'Revistas',
    'Stickers',
    'Etiquetas',
    'Brochures',
    'Publicidad impresa',
    'Papelería corporativa',
  ]

  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden bg-[#2B2B2B] py-4 border-y border-white/10 relative">
      <div className="animate-ticker flex whitespace-nowrap will-change-transform">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-medium text-[#F6F1E8]/70">
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: ['#E53935', '#FDD835', '#2DC653', '#1E88E5'][i % 4],
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
