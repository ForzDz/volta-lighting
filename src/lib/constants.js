// Single source of truth — coordonnées Volta Lighting
export const CONTACT = {
  whatsapp: '+213665459724',
  whatsappNumber: '213665459724',
  phone: '+213665459724',
  phoneDisplay: '+213 665 459 724',
  email: 'contact@voltalighting.dz',
  tiktok:    { handle: '@lighting_dz',   url: 'https://tiktok.com/@lighting_dz' },
  instagram: { handle: '@lighting_dz',   url: 'https://instagram.com/lighting_dz' },
  facebook:  { handle: '@lightingsba',   url: 'https://www.facebook.com/lightingsba' },
  location: 'Algérie — interventions nationales',
  site: 'voltalighting.dz',
};

export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const telLink = () => `tel:${CONTACT.phone}`;
