import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ onChange, className = '' }) {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) || 'fr';

  const switchLang = (code) => {
    if (code === current) return;
    i18n.changeLanguage(code);
    localStorage.setItem('volta_lang', code);
    onChange?.(code);
  };

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${className}`} role="group" aria-label="Language switcher">
      {LANGS.map(({ code, label }, i) => {
        const isActive = current === code;
        return (
          <span key={code} className="inline-flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => switchLang(code)}
              aria-label={`Switch to ${label}`}
              aria-pressed={isActive}
              className={`relative font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded ${
                isActive
                  ? 'text-gold-500 font-bold'
                  : 'text-mist-400 hover:text-mist-50'
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-500" aria-hidden="true" />
              )}
            </button>
            {i < LANGS.length - 1 && <span className="text-mist-600 select-none" aria-hidden="true">·</span>}
          </span>
        );
      })}
    </div>
  );
}
