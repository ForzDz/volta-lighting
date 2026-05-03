// --- TESTIMONIALS SECTION ---
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import LogoCloud from '../ui/LogoCloud';

const testimonialLogoModules = import.meta.glob(
  '../../assets/TÉMOIGNAGES/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}',
  {
  eager: true,
  import: 'default',
  }
);

const testimonialLogos = Object.entries(testimonialLogoModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() || '';
    const cleanName = fileName.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
    return { src, alt: cleanName || 'Client logo' };
  })
  .sort((a, b) => a.alt.localeCompare(b.alt));
const marqueeLogos = [...testimonialLogos, ...testimonialLogos, ...testimonialLogos];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 étoiles">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold-500" fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true });

  return (
    <section className="section-padding bg-ink-950">
      <div className="section-container">
        <SectionTitle
          label={t('testimonials.label')}
          title={t('testimonials.title')}
          center
        />

        <div className="mb-8">
          <div className="h-px w-full bg-[linear-gradient(to_right,transparent,rgba(217,164,65,0.45),transparent)]" />
          <LogoCloud logos={marqueeLogos} className="my-5" />
          <div className="h-px w-full bg-[linear-gradient(to_right,transparent,rgba(217,164,65,0.45),transparent)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={`testimonial-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink-800 border border-ink-600 rounded-2xl p-7 flex flex-col gap-5 hover:border-gold-500/30 transition-colors duration-300"
            >
              <Stars />

              <blockquote className="text-mist-300 leading-relaxed text-sm flex-1">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-mist-100">
                    {t('testimonials.anonymous_name')}
                  </div>
                  <div className="text-xs text-mist-500">{t('testimonials.anonymous_role')}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
