// --- WHY LIGHTING SECTION — Premium Bento Box Redesign ---
import { useTranslation } from 'react-i18next';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Dynamic Glass Card with Mouse Glow
function BentoCard({ children, className = "", delay = 0 }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] bg-ink-800/60 border border-ink-700/60 backdrop-blur-md ${className}`}
    >
      {/* Interactive Hover Glow mapped to mouse coordinates */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 197, 24, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle permanent inner top highlight for glass effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

      <div className="relative h-full z-10 flex flex-col p-8 lg:p-12">
        {children}
      </div>
    </motion.div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-ink-900/80 border border-ink-700/50 shadow-inner">
      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2.5 animate-[pulse_2s_ease-in-out_infinite]" />
      <span className="text-xs text-mist-300 font-semibold tracking-wide">{text}</span>
    </div>
  );
}

export default function WhyLighting() {
  const { t } = useTranslation();

  // Dynamically splitting the localized strings to style the big numbers independently
  const restoTitle = t('why.resto_title') || "";
  const [restoVal, ...restoRest] = restoTitle.split(' ');
  const restoText = restoRest.join(' ');

  const bureauTitle = t('why.bureau_title') || "";
  const [bureauVal, ...bureauRest] = bureauTitle.split(' ');
  const bureauText = bureauRest.join(' ');

  const criTitle = t('why.cri_title') || "";
  const [criVal, ...criRest] = criTitle.split('—');

  return (
    <section className="section-padding bg-ink-900 relative overflow-hidden" id="avantages">
      {/* Ambient Abstract Background Glows */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle
          label={t('why.label')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
          center
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-16 lg:mt-24">

          {/* Card 1: Restauration (Massive Left Showcase) */}
          <BentoCard className="md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col" delay={0.1}>
            {/* Subtle rotating svg background artwork */}
            <div className="absolute bottom-0 right-0 opacity-[0.15] pointer-events-none translate-x-[20%] translate-y-[20%] group-hover:scale-110 transition-transform duration-1000 ease-out">
              <svg width="400" height="400" viewBox="0 0 200 200" className="animate-[spin_60s_linear_infinite]">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#F5C518" strokeWidth="0.5" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="55" fill="none" stroke="#F5C518" strokeWidth="1" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="#F5C518" strokeWidth="0.5" strokeDasharray="2 4" />
                <path d="M100 20 L100 180 M20 100 L180 100" stroke="#F5C518" strokeWidth="0.5" opacity="0.5" />
                <circle cx="100" cy="100" r="3" fill="#F5C518" />
              </svg>
            </div>

            <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-8">
              {t('why.resto_label')}
            </span>

            <div className="flex-1 mt-4 lg:mt-8">
              <h3 className="font-display text-[5.5rem] leading-none md:text-8xl lg:text-9xl tracking-tighter font-light mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold-300 via-gold-500 to-amber-600 drop-shadow-sm">
                  {restoVal}
                </span>
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl text-mist-50 font-display leading-tight max-w-xl mb-12">
                {restoText}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto relative z-10">
              <Badge text={t('why.resto_stat1')} />
              <Badge text={t('why.resto_stat2')} />
              <Badge text={t('why.resto_stat3')} />
            </div>

            <p className="text-xs text-mist-600/80 mt-8 pt-6 border-t border-ink-700/40 relative z-10 w-fit">
              {t('why.resto_source')}
            </p>
          </BentoCard>

          {/* Card 2: Bureaux (Top Right) */}
          <BentoCard className="md:col-span-1" delay={0.25}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

            <span className="inline-block text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-6">
              {t('why.bureau_label')}
            </span>

            <h3 className="font-display text-5xl md:text-6xl tracking-tighter font-light mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-300">
                {bureauVal}
              </span>
            </h3>

            <p className="text-lg md:text-xl text-mist-100 font-display leading-snug mb-8 relative z-10">
              {bureauText}
            </p>

            <div className="flex flex-col gap-3 mt-auto relative z-10">
              {[t('why.bureau_stat1'), t('why.bureau_stat2'), t('why.bureau_stat3')].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-mist-300 bg-ink-900/30 px-3 py-2 rounded-lg border border-ink-700/30">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm shrink-0" />
                  <span className="leading-snug">{stat}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: CRI (Bottom Right) */}
          <BentoCard className="md:col-span-1" delay={0.4}>
            {/* Abstract warm spectrum glow spanning from bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gold-500/15 via-orange-500/5 to-transparent pointer-events-none mix-blend-screen" />

            <span className="inline-block text-xs uppercase tracking-[0.25em] text-mist-400 font-bold mb-6">
              {t('why.cri_label')}
            </span>

            <h3 className="font-display text-4xl lg:text-5xl text-mist-50 leading-tight mb-6 pb-6 border-b border-ink-700/50">
              {criVal} <span className="text-gold-500">≥ 90</span>
            </h3>

            <p className="text-sm text-mist-400 leading-normal mt-auto relative z-10">
              <strong className="text-white block mb-2">{criRest.length > 0 ? criRest.join('—').trim() : ''}</strong>
              {t('why.cri_body')}
            </p>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

