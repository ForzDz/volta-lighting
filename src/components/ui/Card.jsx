import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
      className={`card-premium ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
