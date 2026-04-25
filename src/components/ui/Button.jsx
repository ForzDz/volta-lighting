import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gold-500 text-ink-950 hover:bg-gold-400 font-semibold shadow-gold-glow hover:shadow-gold-glow-lg',
  secondary: 'border border-gold-500 text-gold-500 hover:bg-gold-500/10',
  ghost: 'text-mist-300 hover:text-gold-500',
};

export default function Button({ variant = 'primary', children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
