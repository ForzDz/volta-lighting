// --- FAQ SECTION ---
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-ink-600 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-ink-800 hover:bg-ink-700 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset"
      >
        <span className="font-display text-lg text-mist-50">{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-xl bg-ink-700 border border-ink-600 flex items-center justify-center text-gold-500">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-ink-800 border-t border-ink-600/50">
              <p className="text-mist-400 leading-relaxed text-sm">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-ink-900">
      <div className="section-container max-w-3xl mx-auto">
        <SectionTitle
          label={t('faq.label')}
          title={t('faq.title')}
          center
        />

        <div className="space-y-3">
          {items.map((item, i) => (
            <FAQItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
