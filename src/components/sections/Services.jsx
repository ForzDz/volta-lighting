// --- SERVICES SECTION ---
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, PenTool, Box, Lightbulb, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

import imgPhotometrie from '../../assets/images/etude-photometrique-bureau.webp';
import imgAutocad from '../../assets/images/plan-autocad-blueprint.webp';
import imgSimulation from '../../assets/images/simulation-3d-restaurant.webp';
import imgMockup from '../../assets/images/mockup-dialux-ecran.webp';

const ICONS = [Calculator, PenTool, Box, Lightbulb];
const MEDIA = [
  { src: imgPhotometrie, alt: "Étude photométrique d'un plateau de bureaux avec cartographie des niveaux lux" },
  { src: imgAutocad, alt: "Plan d'éclairage AutoCAD blueprint d'un espace professionnel" },
  { src: imgSimulation, alt: "Simulation 3D DIALux d'un restaurant avec calcul d'isolux" },
  { src: imgMockup, alt: "Interface du logiciel DIALux affichant une simulation 3D d'éclairage" },
];
const ease = [0.22, 1, 0.36, 1];

function ServiceCard({ service, index, Icon, media, learnMore }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="group relative overflow-hidden rounded-2xl border border-ink-600
                 bg-gradient-to-br from-ink-800 to-ink-900
                 transition-all duration-500 hover:border-gold-500/50
                 hover:shadow-[0_0_50px_-10px_rgba(245,197,24,0.25)]"
    >
      {/* Media preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Dark scrim for text legibility below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-900" />
        {/* Gold tint on hover */}
        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
        {/* Numéro éditorial en overlay */}
        <span className="absolute top-4 left-4 font-display text-gold-500 text-xs font-semibold tracking-widest
                         bg-ink-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold-500/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div className="relative p-8 lg:p-10">
        {/* Cursor spotlight (body only) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(245,197,24,0.10), transparent 50%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                     border border-gold-500/30 bg-ink-900/60 backdrop-blur-sm
                     transition-all duration-500 group-hover:border-gold-500/70
                     group-hover:shadow-[0_0_25px_-5px_rgba(245,197,24,0.5)]"
        >
          <Icon className="h-5 w-5 text-gold-500 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <h3 className="font-display font-light text-[1.65rem] lg:text-[1.875rem] leading-[1.1] text-mist-50">
            {service.title}
          </h3>
          <p className="text-mist-400 leading-relaxed text-[0.95rem] max-w-md">
            {service.description}
          </p>
        </div>

        {/* Learn more */}
        <div className="relative mt-8 flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">
          <span>{learnMore}</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>

        {/* Bottom accent */}
        <span
          className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent
                     transition-all duration-700 group-hover:w-full"
        />
      </div>
    </motion.article>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });
  const learnMore = t('services.learn_more');

  return (
    <section id="services" className="relative section-padding bg-ink-950 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-60"
        style={{ background: 'radial-gradient(ellipse at top, rgba(245,197,24,0.08) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <SectionTitle
          label={t('services.label')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-4">
          {items.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              Icon={ICONS[i]}
              media={MEDIA[i]}
              learnMore={learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
