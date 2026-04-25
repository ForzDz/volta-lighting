import { useState, useEffect } from 'react';

// Durée approx d'un scroll-to-anchor smooth natif. Pendant cette fenêtre,
// on force scrollDir = 'up' pour éviter que la Navbar se cache au milieu
// d'un scroll programmatique.
const ANCHOR_SCROLL_WINDOW_MS = 900;

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let suppressUntil = 0;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // Deadzone : on ignore les micro-variations (< 5 px)
        if (Math.abs(currentScrollY - lastScrollY) >= 5) {
          if (Date.now() < suppressUntil) {
            // Scroll programmatique (clic sur ancre) : on garde la navbar visible
            setScrollDir('up');
          } else {
            setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
          }
          setScrollY(currentScrollY);
          lastScrollY = currentScrollY;
        }
        ticking = false;
      });
    };

    // Intercepte les clics sur les liens ancres (#services, #contact, etc.)
    // en phase capture pour armer la fenêtre de suppression AVANT le scroll.
    const onAnchorClick = (e) => {
      const a = e.target?.closest?.('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      suppressUntil = Date.now() + ANCHOR_SCROLL_WINDOW_MS;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onAnchorClick, true);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onAnchorClick, true);
    };
  }, []);

  return { scrollDir, scrollY };
}
