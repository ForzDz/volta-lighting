// --- HERO SECTION ---
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Play } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

// Unsplash image IDs for moody interior lighting
const HERO_IMAGE = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 grid-bg pt-20">
      {/* Gold radial glow background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(245,197,24,0.13) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(245,197,24,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">
                <Zap className="w-3.5 h-3.5" fill="currentColor" />
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 {...fadeUp(0.2)} className="font-display font-semibold tracking-tight-display text-5xl md:text-7xl lg:text-[82px] leading-[1.02] text-mist-50">
              {t('hero.title_1')}{' '}
              <span
                className="text-gold-500 font-bold"
                style={{
                  textShadow: '0 0 60px rgba(245,197,24,0.3)',
                }}
              >
                {t('hero.title_highlight')}
              </span>{' '}
              {t('hero.title_2')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.3)} className="text-mist-400 text-lg lg:text-xl leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold rounded-xl transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg text-sm"
              >
                {t('hero.cta_primary')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-4 border border-gold-500/60 text-gold-500 hover:bg-gold-500/10 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                {t('hero.cta_secondary')}
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
              {[t('hero.trust_1'), t('hero.trust_2'), t('hero.trust_3')].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-ink-600" />}
                  <span className="text-xs text-mist-500 font-medium">{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-sm"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden border border-ink-600 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,197,24,0.1)' }}
              >
                <img
                  src={HERO_IMAGE}
                  alt="Éclairage architectural premium — Volta & Lighting"
                  className="w-full h-[420px] object-cover"
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs uppercase tracking-widest text-gold-500 font-semibold mb-2 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                    {t('hero.card_tag')}
                  </span>
                  <h2 className="font-display text-2xl text-mist-50 leading-tight">{t('hero.card_title')}</h2>
                  <p className="text-sm text-mist-400 mt-1">{t('hero.card_subtitle')}</p>
                </div>

                {/* Play button overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/50 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 text-gold-400" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-ink-800 border border-gold-500/40 rounded-2xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-mist-300 font-semibold whitespace-nowrap">DIALux evo</span>
                </div>
              </div>

              {/* Bottom stat badge */}
              <div className="absolute -bottom-4 -left-4 bg-ink-800 border border-ink-600 rounded-2xl px-4 py-3 shadow-card">
                <div className="text-xs text-mist-500 mb-0.5">Projets livrés</div>
                <div className="font-display text-2xl text-gold-500 font-semibold leading-none">250+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
      </motion.div>
    </section>
  );
}
