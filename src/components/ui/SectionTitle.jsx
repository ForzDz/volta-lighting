import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, center = false, className = '' }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-gold-500 font-body font-semibold mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight-display text-mist-50 leading-[1.08]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-mist-400 text-lg max-w-2xl"
          style={center ? { margin: '16px auto 0' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
