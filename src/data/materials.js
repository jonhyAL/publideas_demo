// Paper types, adhesives, and finishes with specs and pricing
export const papers = [
  {
    id: 'couche',
    name: 'Papel Couché',
    description: 'Acabado brillante o mate. Ideal para flyers, posters e impresiones de alta calidad.',
    idealFor: ['Flyers', 'Posters', 'Dípticos', 'Trípticos'],
    variants: [
      { label: '135 grs', price: '$7' },
      { label: '150 grs', price: '$7' },
      { label: '200 grs', price: '$8' },
      { label: '250 grs', price: '$9' },
      { label: '300 grs', price: '$8.50' },
    ],
  },
  {
    id: 'bond',
    name: 'Bond',
    description: 'Papel offset de uso general. Ideal para hojas membretadas, documentos y formularios.',
    idealFor: ['Hojas membretadas', 'Documentos', 'Formularios'],
    variants: [
      { label: '90 grs', price: 'consultar' },
      { label: '120 grs', price: 'consultar' },
    ],
  },
  {
    id: 'sulfatada',
    name: 'Sulfatada',
    description: 'Cartulina de alta resistencia. Perfecta para packaging, empaque y material publicitario de mayor cuerpo.',
    idealFor: ['Packaging', 'Cajas', 'Material POP'],
    variants: [
      { label: '8 puntos', price: 'consultar' },
      { label: '10 puntos', price: 'consultar' },
      { label: '12 puntos', price: 'consultar' },
    ],
  },
  {
    id: 'opalina',
    name: 'Opalina',
    description: 'Textura suave y elegante. Perfecta para invitaciones, tarjetas y presentaciones premium.',
    idealFor: ['Invitaciones', 'Tarjetas de presentación', 'Portafolios'],
    variants: [
      { label: '225 grs', price: 'desde $7' },
    ],
  },
  {
    id: 'vinyl',
    name: 'Vinyl / Adhesivo',
    description: 'Material adhesivo de alta calidad para stickers, etiquetas y señalética.',
    idealFor: ['Stickers', 'Etiquetas', 'Señalética'],
    variants: [
      { label: 'Couché Adhesivo', price: 'desde $9' },
      { label: 'Vinil autoadhesivo', price: 'consultar' },
    ],
  },
];

export const adhesives = [
  { id: 'couche-adh', name: 'Couché Adhesivo', price: 'desde $9', description: 'Etiquetas y stickers de uso general con excelente reproducción de color.' },
  { id: 'dimasa', name: 'Adhesivo Dimasa', price: '$12', description: 'Mayor resistencia y durabilidad para aplicaciones exigentes.' },
  { id: 'metalizado', name: 'Metalizados / Holográficos', price: 'desde $17', description: 'Acabado especial de alto impacto visual para etiquetas premium.' },
  { id: 'fotolum', name: 'Vinil Fotoluminiscente', price: '$180', description: 'Brilla en la oscuridad. Ideal para señalética de emergencia o diseños creativos.' },
];

export const finishes = [
  { id: 'lam-mate', name: 'Laminado Mate', price: '$2', description: 'Acabado suave sin reflejos. Elegante y moderno.' },
  { id: 'lam-brill', name: 'Laminado Brillante', price: '$2', description: 'Colores intensos con brillo vivo. Realza la impresión.' },
  { id: 'medio-corte', name: 'Medio Corte', price: 'consultar', description: 'Corte del adhesivo sin cortar el respaldo. Ideal para stickers de formas personalizadas.' },
  { id: 'guillotina', name: 'Guillotina', price: 'consultar', description: 'Corte recto y preciso en el formato final requerido.' },
];
