// --- FOOTER ---
import { useTranslation } from 'react-i18next';
import { Phone, MapPin } from 'lucide-react';
import logoComplet from '../../assets/images/logo-volta-complet.png';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { CONTACT, waLink, telLink } from '../../lib/constants';

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.6V14h2.7v8h3.2z"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#process', label: t('nav.process') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-ink-900 border-t border-ink-600">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <a href="#" className="inline-block" aria-label="Volta & Lighting — accueil">
              <img
                src={logoComplet}
                alt="Volta & Lighting"
                className="h-24 w-auto object-contain"
              />
            </a>
            <p className="font-display text-lg text-gold-500 font-medium tracking-tight">{t('footer.tagline')}</p>
            <p className="text-sm text-mist-500 leading-relaxed max-w-xs">{t('footer.mission')}</p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-mist-500 mb-6 font-semibold">{t('footer.nav_title')}</h3>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-mist-400 hover:text-gold-500 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-mist-500 mb-6 font-semibold">{t('footer.contact_title')}</h3>
            <ul className="space-y-4" role="list">
              <li>
                <a href={telLink()} className="flex items-center gap-3 text-sm text-mist-400 hover:text-mist-50 transition-colors group">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  {t('contact.phone')}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-mist-500">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  {t('contact.location')}
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={CONTACT.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`TikTok ${CONTACT.tiktok.handle}`}
                className="w-9 h-9 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-mist-400 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-200"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${CONTACT.instagram.handle}`}
                className="w-9 h-9 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-mist-400 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook ${CONTACT.facebook.handle}`}
                className="w-9 h-9 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-mist-400 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full text-sm font-semibold hover:bg-[#25D366]/20 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t('footer.whatsapp')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-600">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mist-500">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.made_in')}</span>
        </div>
      </div>
    </footer>
  );
}
