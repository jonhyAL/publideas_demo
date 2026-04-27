/**
 * Builds a wa.me pre-filled URL from quote form data.
 * Opens WhatsApp with the Publideas greeting message.
 */
export function buildWhatsAppURL(formData) {
  const phone = '50212345678'; // Replace with actual WhatsApp business number
  const {
    name = '',
    product = '',
    size = '',
    paper = '',
    quantity = '',
    finish = '',
    printType = '',
    fileFormat = '',
    program = '',
    serviceLevel = '',
    message = '',
  } = formData;

  const printTypeLabel = printType === 'duplex'
    ? 'Duplex 4×4 (F y V)'
    : printType === 'simplex'
    ? 'Simplex 4×0 (una cara)'
    : '';

  const serviceLevelLabel = serviceLevel === 'mismo-dia'
    ? 'Mismo día (antes de las 12:00 pm)'
    : serviceLevel === 'dia-siguiente'
    ? 'Día siguiente (después de las 12:00 pm)'
    : '';

  const lines = [
    `¡Hola! Quiero cotizar lo siguiente:`,
    ``,
    `• Producto: ${product}`,
    `• Medida: ${size}`,
    `• Material: ${paper || 'Sin preferencia'}`,
    `• Cantidad: ${quantity}`,
    finish ? `• Acabado: ${finish}` : null,
    printTypeLabel ? `• Tipo de impresión: ${printTypeLabel}` : null,
    fileFormat ? `• Formato de archivo: ${fileFormat}` : null,
    program ? `• Programa de diseño: ${program}` : null,
    serviceLevelLabel ? `• Nivel de servicio: ${serviceLevelLabel}` : null,
    message ? `• Detalles: ${message}` : null,
    ``,
    `Mi nombre es ${name}. ¡Gracias!`,
  ].filter((line) => line !== null);

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function useWhatsApp() {
  const openQuote = (formData) => {
    const url = buildWhatsAppURL(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return { openQuote };
}
