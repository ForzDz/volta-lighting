// --- HERO VARIANT — STAGE / SPOTLIGHT ORB ---
// Tone: dramatique, théâtral. Anneau de lumière rotatif central + faisceau conique descendant.
// Signature: orb gold rotatif, lens-flare, particules dorées flottantes.
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function HeroStage() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 flex items-center">
      {/* Faisceau conique descendant top-center */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] pointer-events-none"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(245,197,24,0.18) 178deg, rgba(245,197,24,0.25) 180deg, rgba(245,197,24,0.18) 182deg, transparent 360deg)',
          filter: 'blur(40px)',
          opacity: 0.7,
        }}
      />

      {/* Floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(245,197,24,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Anneau orbital rotatif derrière le titre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="relative w-[680px] h-[680px] lg:w-[820px] lg:h-[820px]"
        >
          <div className="absolute inset-0 rounded-full border border-gold-500/15" />
          <div className="absolute inset-8 rounded-full border border-gold-500/10" />
          {/* Light points sur l'anneau */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <span
              key={deg}
              className="absolute w-2 h-2 rounded-full bg-gold-500"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translateY(-340px) lg:translateY(-410px)`,
                boxShadow: '0 0 20px rgba(245,197,24,0.8)',
              }}
            />
          ))}
        </motion.div>
        {/* Anneau contre-rotation */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 m-auto w-[480px] h-[480px] rounded-full border border-dashed border-gold-500/20"
        />
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-500/60"
            style={{
              left: `${(i * 8.3 + 5) % 100}%`,
              top: `${(i * 17 + 10) % 100}%`,
              boxShadow: '0 0 8px rgba(245,197,24,0.8)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Vignette sombre périphérique */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 80%)',
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-ink-900/80 backdrop-blur-md border border-gold-500/40 rounded-full"
          style={{ boxShadow: '0 0 30px rgba(245,197,24,0.15)' }}
        >
          <Zap className="w-3.5 h-3.5 text-gold-500" fill="currentColor" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-500 font-semibold">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="font-display font-semibold tracking-tight-display leading-[1.02] text-mist-50 mx-auto max-w-5xl text-[clamp(2.75rem,8vw,7rem)]"
          style={{ textShadow: '0 0 80px rgba(245,197,24,0.2)' }}
        >
          {t('hero.title_1')}{' '}
          <span
            className="font-bold relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #FADB5F 0%, #F5C518 50%, #E3B008 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.5))',
            }}
          >
            {t('hero.title_highlight')}
          </span>{' '}
          {t('hero.title_2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-8 text-mist-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold rounded-2xl transition-all duration-300 text-sm overflow-hidden"
            style={{ boxShadow: '0 0 50px rgba(245,197,24,0.4)' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">{t('hero.cta_primary')}</span>
            <ArrowUpRight className="w-4 h-4 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink-900/60 backdrop-blur-md border border-gold-500/20 hover:border-gold-500/50 text-mist-200 hover:text-gold-500 rounded-2xl transition-all duration-300 text-sm font-medium"
          >
            {t('hero.cta_secondary')}
          </a>
        </motion.div>

        {/* Trust — 3 colonnes lumineuses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-20 grid grid-cols-3 max-w-2xl mx-auto"
        >
          {[t('hero.trust_1'), t('hero.trust_2'), t('hero.trust_3')].map((item, i, arr) => {
            const [head, ...rest] = item.split(' ');
            return (
              <div
                key={i}
                className={`px-4 ${i < arr.length - 1 ? 'border-e border-gold-500/20' : ''}`}
              >
                <div
                  className="font-display text-3xl lg:text-4xl font-light leading-none"
                  style={{
                    background: 'linear-gradient(180deg, #FADB5F 0%, #E3B008 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {head}
                </div>
                <div className="mt-2 text-[10px] lg:text-xs uppercase tracking-wider text-mist-400">
                  {rest.join(' ')}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
