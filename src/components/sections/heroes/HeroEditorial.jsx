// --- HERO VARIANT — EDITORIAL SPLIT ---
// Tone: magazine architecture / éditorial. Asymétrie 60/40, texte gauche, visuel droite encadré.
// Signature: typo display oversize, marginalia mono-numérotée, scrim doré bas-droite.
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];
const STAGE_IMG = 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1400&q=85';

export default function HeroEditorial() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 pb-16 flex items-center">
      {/* Vertical rule + numéro édition (marginalia) */}
      <div className="absolute top-0 bottom-0 start-6 lg:start-12 hidden md:flex flex-col items-center gap-6 z-10 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.3em] text-mist-500 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          ÉDITION 01 — {new Date().getFullYear()}
        </span>
        <div className="flex-1 w-px bg-gradient-to-b from-gold-500/40 via-mist-500/10 to-transparent" />
      </div>

      <div className="section-container relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* TEXTE — 7 cols */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <span className="block w-10 h-px bg-gold-500" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-semibold">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="font-display font-semibold tracking-tight-display leading-[0.98] text-mist-50 text-[clamp(3rem,7vw,6.5rem)]"
          >
            {t('hero.title_1')}{' '}
            <span
              className="font-bold block lg:inline"
              style={{
                background: 'linear-gradient(135deg, #FADB5F 0%, #F5C518 50%, #E3B008 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('hero.title_highlight')}
            </span>{' '}
            {t('hero.title_2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 text-mist-300 text-lg leading-relaxed max-w-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold rounded-2xl transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg text-sm"
            >
              {t('hero.cta_primary')}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-4 border border-ink-600 hover:border-gold-500/50 text-mist-200 hover:text-gold-500 rounded-2xl transition-all duration-300 text-sm font-medium"
            >
              {t('hero.cta_secondary')}
            </a>
          </motion.div>

          {/* Trust — liste éditoriale */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-ink-700 pt-8"
          >
            {[t('hero.trust_1'), t('hero.trust_2'), t('hero.trust_3')].map((item, i) => {
              const [head, ...rest] = item.split(' ');
              return (
                <div key={i}>
                  <dt className="font-display text-3xl text-gold-500 font-light leading-none">{head}</dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-wider text-mist-400">{rest.join(' ')}</dd>
                </div>
              );
            })}
          </motion.dl>
        </div>

        {/* VISUEL — 5 cols, encadré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-ink-700">
            <img
              src={STAGE_IMG}
              alt="Installation lumineuse signature Volta Lighting"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/70 via-transparent to-transparent" />
            <div
              className="absolute inset-0 opacity-60 mix-blend-overlay"
              style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(245,197,24,0.35) 0%, transparent 60%)' }}
            />

            {/* Caption mono */}
            <div className="absolute bottom-5 start-5 end-5 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-mist-300">
              <span>Projet · Alger</span>
              <span className="text-gold-500">N°027</span>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -start-6 hidden lg:flex items-center gap-3 px-5 py-4 bg-ink-900 border border-ink-600 rounded-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs text-mist-200 font-medium">DIALux · IES · Photométrie</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
