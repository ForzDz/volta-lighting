// --- HERO VARIANT 2 — CINEMATIC SPOTLIGHT ---
// Tone: cinématique, atmosphérique. Hero image plein cadre + spotlight qui suit le curseur.
// Signature motion: orb aurora gold parallax + grid réactif qui s'illumine au passage de la souris
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function HeroCinematic() {
  const { t } = useTranslation();
  const ref = useRef(null);
  // MotionValues : updates sans re-render React
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(245,197,24,0.12) 0%, transparent 40%)`;
  const gridMask = useMotionTemplate`radial-gradient(circle 500px at ${mx}% ${my}%, black 20%, transparent 70%)`;

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 100);
      my.set(((e.clientY - r.top) / r.height) * 100);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-ink-950 pt-20 flex items-center"
    >
      {/* Cinematic background — gradient + noise SVG (zero external image) */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 28%, #1A1A1F 0%, #0E0E12 55%, #050505 100%)',
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/30 to-ink-950" />
      </div>

      {/* Cursor-reactive spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* Aurora orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[15%] w-[420px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,197,24,0.22) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10%] left-[10%] w-[340px] h-[340px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(250,219,95,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Reactive grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: gridMask,
          WebkitMaskImage: gridMask,
        }}
      />

      {/* Corner frame decorations */}
      {[
        'top-24 left-4 lg:left-8 border-t border-s rounded-tl-lg',
        'top-24 right-4 lg:right-8 border-t border-e rounded-tr-lg',
        'bottom-4 lg:bottom-8 left-4 lg:left-8 border-b border-s rounded-bl-lg',
        'bottom-4 lg:bottom-8 right-4 lg:right-8 border-b border-e rounded-br-lg',
      ].map((pos, i) => (
        <div key={i} className={`absolute w-8 h-8 border-gold-500/40 ${pos}`} />
      ))}

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-ink-900/60 backdrop-blur-md border border-gold-500/30 rounded-full"
        >
          <Zap className="w-3.5 h-3.5 text-gold-500" fill="currentColor" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-500 font-semibold">
            {t('hero.badge')}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-500 ms-1 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-display font-semibold tracking-tight-display leading-[1.02] text-mist-50 mx-auto max-w-5xl text-[clamp(2.75rem,8vw,7rem)]"
        >
          {t('hero.title_1')}{' '}
          <span
            className="font-bold relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #FADB5F 0%, #F5C518 50%, #E3B008 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(245,197,24,0.4))',
            }}
          >
            {t('hero.title_highlight')}
          </span>{' '}
          {t('hero.title_2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-8 text-mist-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold rounded-2xl transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg text-sm"
          >
            {t('hero.cta_primary')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink-900/60 backdrop-blur-md border border-ink-600 hover:border-gold-500/50 text-mist-200 hover:text-gold-500 rounded-2xl transition-all duration-300 text-sm font-medium"
          >
            {t('hero.cta_secondary')}
          </a>
        </motion.div>

        {/* Trust indicators as glassmorphic pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[t('hero.trust_1'), t('hero.trust_2'), t('hero.trust_3')].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-ink-900/50 backdrop-blur-md border border-ink-600/50 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="text-xs text-mist-300 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
