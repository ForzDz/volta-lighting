// --- ABOUT SECTION ---
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import mockupDialux from '../../assets/images/mockup-dialux-ecran.webp';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const { t } = useTranslation();
  const s = t('about.stats', { returnObjects: true });

  const stats = [
    { count: s.projects_count, label: s.projects_label },
    { count: s.community_count, label: s.community_label },
    { count: s.wilayas_count, label: s.wilayas_label },
    { count: s.experience_count, label: s.experience_label },
  ];

  return (
    <section id="about" className="relative section-padding bg-ink-900 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[600px] h-[600px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <SectionTitle
              label={t('about.label')}
              title={t('about.title')}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-mist-400 leading-relaxed text-lg"
            >
              {t('about.body')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-gold-500 text-sm font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Démarrer un projet
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Mockup + stats */}
          <div className="space-y-8">
            {/* DIALux mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >
              <motion.img
                src={mockupDialux}
                alt="Interface du logiciel DIALux affichant une simulation 3D d'éclairage avec cartographie des niveaux lumineux"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full max-w-[460px] mx-auto drop-shadow-[0_20px_40px_rgba(245,197,24,0.15)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Glow behind */}
              <div
                className="pointer-events-none absolute inset-0 -z-0 blur-3xl opacity-60"
                style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.18) 0%, transparent 60%)' }}
              />
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ count, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease }}
                  className="bg-ink-800 border border-ink-600 rounded-2xl p-6 hover:border-gold-500/30 transition-colors duration-300"
                >
                  <div
                    className="font-display text-5xl font-light mb-2 leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #F5C518 0%, #E3B008 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedCounter value={count} />
                  </div>
                  <div className="text-sm text-mist-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
