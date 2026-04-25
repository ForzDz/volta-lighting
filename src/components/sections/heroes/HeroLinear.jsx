// --- HERO VARIANT — LINEAR / VERCEL MINIMAL ---
// Tone: tech minimal, beaucoup d'air, grille de fond subtile, ticker mono en bas.
// Signature: typo centrée, gradient gold sous-titre, ticker scrollant infinie de signaux trust.
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function HeroLinear() {
  const { t } = useTranslation();
  const ticker = [
    'DIALux EVO',
    'IES Files',
    'Photométrie',
    '3D Render',
    'AutoCAD',
    'BIM',
    'Norme NF EN 12464',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950 pt-28 pb-12 flex flex-col">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      {/* Soft top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(245,197,24,0.15) 0%, transparent 60%)' }}
      />

      <div className="section-container relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="group inline-flex items-center gap-2 px-4 py-1.5 mb-10 bg-ink-900/80 border border-ink-700 hover:border-gold-500/40 rounded-full backdrop-blur-sm transition-colors"
        >
          <Sparkles className="w-3 h-3 text-gold-500" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-mist-300 font-medium">
            {t('hero.badge')}
          </span>
          <span className="w-px h-3 bg-ink-600" />
          <span className="text-[11px] text-gold-500 font-semibold">v.{new Date().getFullYear()}</span>
        </motion.div>

        {/* Title — ultra serif */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="font-display font-semibold tracking-tight-display leading-[1.04] text-mist-50 max-w-[18ch] text-[clamp(2.5rem,7.5vw,6.25rem)]"
        >
          {t('hero.title_1')}{' '}
          <span
            className="font-bold"
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-7 text-mist-400 text-base lg:text-lg leading-relaxed max-w-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-9 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold rounded-xl transition-all duration-300 shadow-gold-glow text-sm"
          >
            {t('hero.cta_primary')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink-900/60 border border-ink-700 hover:border-gold-500/40 text-mist-200 hover:text-gold-500 rounded-xl transition-all duration-300 text-sm font-medium backdrop-blur-sm"
          >
            {t('hero.cta_secondary')}
          </a>
        </motion.div>

        {/* Trust trio inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-mist-400 text-sm"
        >
          {[t('hero.trust_1'), t('hero.trust_2'), t('hero.trust_3')].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-8">
              <span><span className="text-gold-500 font-semibold">{item.split(' ')[0]}</span> {item.split(' ').slice(1).join(' ')}</span>
              {i < arr.length - 1 && <span className="hidden sm:inline w-1 h-1 rounded-full bg-ink-600" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Logos / tools ticker bottom */}
      <div className="relative z-10 mt-16 border-y border-ink-800/80 py-4 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...ticker, ...ticker].map((tool, i) => (
            <span key={i} className="font-mono text-xs uppercase tracking-[0.2em] text-mist-500">
              {tool} <span className="text-gold-500/60 ms-12">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
