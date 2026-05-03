import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://lighting-dz.com';
const OG_IMAGE = `${SITE_URL}/logo-volta-complet.png`;

const META = {
  fr: {
    title: "Volta & Lighting — Conception d'éclairage en Algérie",
    description: "Études photométriques, plans d'éclairage et simulations 3D sur-mesure en Algérie. Restaurants, hôtels, bureaux et résidences. Devis gratuit.",
    og_title: "Volta & Lighting — فن الإنارة في الجزائر",
    og_description: "L'éclairage qui transforme vos espaces. Conception et design d'éclairage premium en Algérie.",
    locale: 'fr_DZ',
  },
  ar: {
    title: 'فولتا ولايتينج — تصميم الإضاءة في الجزائر',
    description: 'دراسات ضوئية، مخططات إضاءة وتمثيلات ثلاثية الأبعاد مصممة خصيصاً في الجزائر. عرض أسعار مجاني.',
    og_title: 'فولتا ولايتينج — فن الإنارة في الجزائر',
    og_description: 'الإضاءة التي تحوّل فضاءاتكم. تصميم إضاءة معمارية راقية في الجزائر.',
    locale: 'ar_DZ',
  },
  en: {
    title: 'Volta & Lighting — Lighting Design in Algeria',
    description: 'Custom photometric studies, lighting plans and 3D simulations in Algeria. Restaurants, hotels, offices and residences. Free quote.',
    og_title: 'Volta & Lighting — فن الإنارة في الجزائر',
    og_description: 'The lighting that transforms your spaces. Premium lighting design in Algeria.',
    locale: 'en_US',
  },
};

// Schema.org Service catalog (descriptions EN, language-neutral for crawlers)
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Étude Photométrique',
      description: 'Photometric calculations (lux, uniformity, UGR) compliant with EN 12464 standards.',
      provider: { '@type': 'LocalBusiness', name: 'Volta & Lighting' },
      areaServed: 'Algeria',
    },
    {
      '@type': 'Service',
      position: 2,
      name: "Plans d'Éclairage AutoCAD",
      description: 'Detailed AutoCAD lighting plans : luminaire layout, circuits, dimensions.',
      provider: { '@type': 'LocalBusiness', name: 'Volta & Lighting' },
      areaServed: 'Algeria',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Simulation 3D & Rendus',
      description: 'Photorealistic 3D lighting simulations with DIALux / Relux, isolux mapping.',
      provider: { '@type': 'LocalBusiness', name: 'Volta & Lighting' },
      areaServed: 'Algeria',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Conseil & Accompagnement',
      description: 'Color temperature selection, CRI advisory, luminaire sourcing, on-site commissioning.',
      provider: { '@type': 'LocalBusiness', name: 'Volta & Lighting' },
      areaServed: 'Algeria',
    },
  ],
};

export default function SEO() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.slice(0, 2)) || 'fr';
  const m = META[lang] || META.fr;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <Helmet>
      <html lang={lang} dir={dir} />
      <title>{m.title}</title>
      <meta name="description" content={m.description} />

      {/* Canonical + hreflang alternates */}
      <link rel="canonical" href={SITE_URL + '/'} />
      <link rel="alternate" hrefLang="fr" href={SITE_URL + '/'} />
      <link rel="alternate" hrefLang="ar" href={SITE_URL + '/?lang=ar'} />
      <link rel="alternate" hrefLang="en" href={SITE_URL + '/?lang=en'} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + '/'} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Volta & Lighting" />
      <meta property="og:title" content={m.og_title} />
      <meta property="og:description" content={m.og_description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="Volta & Lighting — Conception d'éclairage en Algérie" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL + '/'} />
      <meta property="og:locale" content={m.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.og_title} />
      <meta name="twitter:description" content={m.og_description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Geo */}
      <meta name="geo.region" content="DZ-31" />
      <meta name="geo.placename" content="Oran" />

      {/* Schema.org Services */}
      <script type="application/ld+json">
        {JSON.stringify(SERVICE_SCHEMA)}
      </script>
    </Helmet>
  );
}
