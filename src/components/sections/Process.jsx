// --- PROCESS SECTION ---
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Process() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id="process" className="section-padding bg-ink-950">
      <div className="section-container">
        <SectionTitle
          label={t('process.label')}
          title={t('process.title')}
          center
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-ink-600 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50 z-0 origin-left"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Step number circle */}
              <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-ink-900 border-2 border-gold-500 flex items-center justify-center mb-8">
                <span
                  className="font-display text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #F5C518 0%, #E3B008 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3 className="font-display text-xl text-mist-50 mb-3">{step.title}</h3>
              <p className="text-sm text-mist-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-gold-500/50 to-ink-600" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-ink-900 border-2 border-gold-500 flex items-center justify-center shrink-0">
                <span
                  className="font-display text-xs font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #F5C518 0%, #E3B008 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display text-xl text-mist-50 mb-2">{step.title}</h3>
                <p className="text-sm text-mist-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
