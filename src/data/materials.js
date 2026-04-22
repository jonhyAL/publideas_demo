// Paper types, adhesives, and finishes with specs and pricing
export const papers = [
  {
    id: 'couche',
    name: 'Papel Couché',
    description: 'Acabado brillante o mate. Ideal para flyers, posters e impresiones de alta calidad.',
    idealFor: ['Flyers', 'Posters', 'Dípticos', 'Trípticos'],
    variants: [
      { label: '130–150 grs', price: '$7' },
      { label: '200 grs aprox', price: '$8' },
      { label: '300 grs', price: '$8.50' },
      { label: '350 grs', price: '$9.50' },
    ],
  },
  {
    id: 'opalina',
    name: 'Opalina',
    description: 'Textura suave y elegante. Perfecta para invitaciones, tarjetas y presentaciones premium.',
    idealFor: ['Invitaciones', 'Tarjetas de presentación', 'Portafolios'],
    variants: [
      { label: '120–350 grs', price: 'desde $7' },
    ],
  },
  {
    id: 'bristol',
    name: 'Bristol (Inkjet)',
    description: 'Económico y versátil. Excelente para impresiones internas y documentos.',
    idealFor: ['Documentos', 'Planos', 'Impresiones internas'],
    variants: [
      { label: 'Estándar', price: 'desde $2' },
    ],
  },
  {
    id: 'especiales',
    name: 'Kraft / Lino / Murillo',
    description: 'Papeles texturizados con carácter artesanal. Perfectos para marcas con identidad natural o vintage.',
    idealFor: ['Empaques', 'Sobres', 'Tarjetas artesanales', 'Menús'],
    variants: [
      { label: 'Kraft / Lino / Murillo', price: 'desde $10' },
    ],
  },
];

export const adhesives = [
  { name: 'Couché Adhesivo', price: 'desde $9', description: 'Etiquetas y stickers de uso general con excelente impresión.' },
  { name: 'Adhesivo Dimasa', price: '$12', description: 'Mayor resistencia y durabilidad para aplicaciones exigentes.' },
  { name: 'Metalizados / Holográficos', price: 'desde $17', description: 'Acabado especial de alto impacto visual para etiquetas premium.' },
  { name: 'Vinil Fotoluminiscente', price: '$180', description: 'Brilla en la oscuridad. Ideal para señalética de emergencia o diseños creativos.' },
];

export const finishes = [
  { name: 'Laminado Mate', price: '$2', icon: 'Square', description: 'Acabado suave sin reflejos. Elegante y moderno.' },
  { name: 'Laminado Brillante', price: '$2', icon: 'Sparkles', description: 'Colores intensos con brillo vivo. Realza la impresión.' },
  { name: 'Soft Touch', price: '$8', icon: 'Hand', description: 'Textura aterciopelada al tacto. Máximo nivel de lujo.' },
  { name: 'Glitter / Holográfico', price: 'desde $7', icon: 'Star', description: 'Destellos y efectos de luz para diseños creativos y llamativos.' },
  { name: 'Barniz 3D', price: 'desde $48', icon: 'Layers', description: 'Relieve táctil sobre áreas seleccionadas. Sofisticado y diferenciador.' },
  { name: 'Foil 3D (Realce)', price: 'desde $48', icon: 'Zap', description: 'Detalles metálicos en relieve. El acabado más premium disponible.' },
];

export const banners = [
  { size: '33 × 95 cm', price: 'desde $24', note: 'Precio varía según gramaje y cantidad.' },
  { size: '30 × 70 cm', price: 'desde $19', note: 'Precio varía según gramaje y cantidad.' },
];
