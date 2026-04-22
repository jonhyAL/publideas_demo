/**
 * Builds a wa.me pre-filled URL from quote form data.
 * Opens WhatsApp with the Publideas greeting message.
 */
export function buildWhatsAppURL(formData) {
  const phone = '50212345678'; // Replace with actual WhatsApp business number
  const { name = '', product = '', size = '', paper = '', quantity = '', finish = '', message = '' } = formData;

  const text = [
    `¡Hola! Quiero cotizar lo siguiente:`,
    ``,
    `• Producto: ${product}`,
    `• Tamaño: ${size}`,
    `• Tipo de papel: ${paper}`,
    `• Cantidad: ${quantity}`,
    `• Acabado: ${finish || 'Sin acabado especial'}`,
    message ? `• Detalles adicionales: ${message}` : '',
    ``,
    `Mi nombre es ${name}. ¡Gracias!`,
  ]
    .filter((line) => line !== undefined)
    .join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function useWhatsApp() {
  const openQuote = (formData) => {
    const url = buildWhatsAppURL(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return { openQuote };
}
