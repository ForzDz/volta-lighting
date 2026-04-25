// --- NAVBAR — Variante B : minimaliste premium ---
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import logoMark from '../../assets/images/logo-volta-mark.png';

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { scrollDir, scrollY } = useScrollDirection();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#process',  label: t('nav.process')  },
    { href: '#about',    label: t('nav.about')    },
    { href: '#contact',  label: t('nav.contact')  },
  ];

  const isScrolled = scrollY > 40;
  const isHidden = scrollDir === 'down' && scrollY > 200 && !open;

  // Verrouille le scroll du body quand l'overlay est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Esc ferme l'overlay
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const closeAnd = (fn) => () => { setOpen(false); fn?.(); };

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          isScrolled || open
            ? 'bg-ink-900/90 backdrop-blur-xl border-b border-ink-600/60'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo + nom */}
          <a href="#" className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg">
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none hidden min-[420px]:block whitespace-nowrap">
              <span className="font-display text-base sm:text-lg font-semibold text-mist-50 tracking-tight">Volta</span>
              <span className="font-display text-base sm:text-lg font-light text-gold-500 tracking-tight"> & Lighting</span>
            </div>
            <span className="sr-only">Volta &amp; Lighting — accueil</span>
          </a>

          {/* Right cluster : langue + burger */}
          <div className="flex items-center gap-5 sm:gap-7">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="main-drawer"
              className="p-2 -mr-2 text-mist-200 hover:text-gold-500 transition-colors focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Drawer plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="main-drawer"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-2xl"
          >
            {/* Glow ambiant */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(245,197,24,0.08) 0%, transparent 60%)' }}
            />
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              role="list"
              className="relative h-full flex flex-col items-center justify-center gap-6 sm:gap-8 px-6"
            >
              {navLinks.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                  }}
                >
                  <a
                    href={href}
                    onClick={closeAnd()}
                    className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-mist-50 hover:text-gold-500 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
