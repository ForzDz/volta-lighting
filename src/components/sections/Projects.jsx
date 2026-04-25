// --- PROJECTS SECTION ---
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { WILAYAS_ALGERIA } from '../../data/wilayas';

const AlgeriaMap = lazy(() => import('../ui/AlgeriaMap'));

const ease = [0.22, 1, 0.36, 1];

export default function Projects() {
  const { t } = useTranslation();

  const stats = [
    { value: '58',    label: t('projects.stats_wilayas')  },
    { value: '250+',  label: t('projects.stats_projects') },
    { value: '7+',    label: t('projects.stats_years')    },
  ];

  return (
    <section id="projects" className="section-padding bg-ink-900">
      <div className="section-container">


        {/* === MAP BLOCK === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center"
        >
          {/* Carte */}
          <div className="relative order-2 lg:order-1">
            <Suspense fallback={<div className="aspect-square w-full rounded-2xl bg-ink-800/40" aria-hidden="true" />}>
              <AlgeriaMap wilayas={WILAYAS_ALGERIA} theme="dark" showTooltip />
            </Suspense>
          </div>

          {/* Texte + stats */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold-500 font-semibold">
              {t('projects.label')}
            </span>
            <h3 className="mt-3 font-display font-light text-mist-50 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1]">
              {t('projects.map_title')}
            </h3>
            <p className="mt-4 text-mist-400 leading-relaxed">
              {t('projects.map_subtitle')}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-700 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt
                    className="font-display text-4xl lg:text-5xl font-light leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #F5C518 0%, #E3B008 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedCounter value={value} />
                  </dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-wider text-mist-400 leading-snug">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-mist-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" style={{ boxShadow: '0 0 6px rgba(245,197,24,0.8)' }} />
                Wilaya couverte
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="relative w-3 h-3 rounded-full bg-gold-500 flex items-center justify-center">
                  <span className="absolute inset-[-4px] rounded-full border border-gold-500/60" />
                </span>
                Hub principal
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mist-500/30" />
                Bientôt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
