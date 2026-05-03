// --- CONTACT SECTION ---
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, CheckCircle, Mail } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { CONTACT, waLink, telLink, mailLink } from '../../lib/constants';

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

function buildWhatsAppMessage(data, f) {
  const dash = f.wa_not_specified;
  const val = (k) => (data.get(k) || '').trim();
  return [
    f.wa_greeting,
    '',
    f.wa_request,
    '',
    `👤 ${f.wa_name} : ${val('name') || dash}`,
    `📧 ${f.wa_email} : ${val('email') || dash}`,
    `📞 ${f.wa_phone} : ${val('phone') || dash}`,
    '',
    `🏷 ${f.wa_type} : ${val('project_type') || dash}`,
    '',
    `📝 ${f.wa_message} :`,
    val('message') || dash,
    '',
    f.wa_footer,
  ].join('\n');
}

export default function Contact() {
  const { t } = useTranslation();
  const f = t('contact.form', { returnObjects: true });
  const [sent, setSent] = useState(false);
  const lastLinkRef = useRef(null);

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = buildWhatsAppMessage(data, f);
    const url = waLink(msg);
    lastLinkRef.current = url;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-ink-950">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="section-container relative">
        <SectionTitle
          label={t('contact.label')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {[
                { icon: Phone, text: t('contact.phone'), href: telLink() },
                { icon: Mail, text: CONTACT.email, href: mailLink() },
                { icon: MapPin, text: t('contact.location') },
                { icon: Clock, text: t('contact.response') },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-gold-500" />
                  </div>
                  {href ? (
                    <a href={href} className="text-mist-300 hover:text-gold-500 transition-colors text-sm">{text}</a>
                  ) : (
                    <span className="text-mist-400 text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center gap-2 px-4 py-2.5 bg-ink-800 border border-ink-600 rounded-xl text-mist-400 hover:text-mist-50 hover:border-gold-500/40 transition-all text-xs font-medium"
              >
                <TikTokIcon className="w-4 h-4" /> {CONTACT.tiktok.handle}
              </a>
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-4 py-2.5 bg-ink-800 border border-ink-600 rounded-xl text-mist-400 hover:text-mist-50 hover:border-gold-500/40 transition-all text-xs font-medium"
              >
                <InstagramIcon className="w-4 h-4" /> {CONTACT.instagram.handle}
              </a>
              <a
                href={CONTACT.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 px-4 py-2.5 bg-ink-800 border border-ink-600 rounded-xl text-mist-400 hover:text-mist-50 hover:border-gold-500/40 transition-all text-xs font-medium"
              >
                <FacebookIcon className="w-4 h-4" /> {CONTACT.facebook.handle}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xs font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>


          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="bg-ink-800 border border-[#25D366]/30 rounded-2xl p-10 flex flex-col items-center text-center gap-5">
                <CheckCircle className="w-12 h-12 text-[#25D366]" />
                <p className="text-mist-200 font-display text-xl">{f.success}</p>
                {lastLinkRef.current && (
                  <a
                    href={lastLinkRef.current}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-mist-400 hover:text-[#25D366] underline underline-offset-4 transition-colors"
                  >
                    {f.whatsapp_fallback}
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="bg-ink-800 border border-ink-600 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label-premium">{f.name}</label>
                    <input id="name" name="name" type="text" required className="input-premium" placeholder={f.name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-premium">{f.email}</label>
                    <input id="email" name="email" type="email" required className="input-premium" placeholder="email@exemple.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="label-premium">{f.phone}</label>
                  <input id="phone" name="phone" type="tel" pattern="[+0-9 ]{8,}" minLength={8} title="Numéro de téléphone valide (au moins 8 chiffres)" className="input-premium" placeholder="+213 6XX XXX XXX" />
                </div>

                <div>
                  <label htmlFor="project_type" className="label-premium">{f.project_type}</label>
                  <select id="project_type" name="project_type" className="input-premium">
                    <option value="">— Choisir —</option>
                    {f.project_types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label-premium">{f.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="input-premium resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2.5"
                  style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {f.send_whatsapp}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
