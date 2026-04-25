// --- ALGERIA MAP — Premium SVG with accurate GeoJSON borders ---
// Uses pure CSS animations instead of framer-motion for circles (fixes r:undefined errors).
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { BBOX, HUB_CODES } from '../../data/wilayas';

const ALGERIA_PATH = `
  M 1000 751
  L 835 856 L 694 965 L 626 989 L 573 995 L 572 960
  L 550 951 L 519 935 L 508 909 L 345 789 L 181 668
  L -1 535 L 0 524 L 0 521 L 0 455 L 78 415 L 126 406
  L 166 391 L 184 364 L 241 342 L 243 301 L 271 296
  L 293 276 L 356 267 L 365 245 L 352 234 L 336 175
  L 333 142 L 315 106 L 361 76 L 413 67 L 444 44
  L 491 27 L 573 17 L 653 13 L 677 21 L 723 -1
  L 774 -1 L 794 12 L 827 8 L 817 37 L 825 89
  L 814 135 L 784 166 L 788 207 L 828 240 L 828 253
  L 858 275 L 879 374 L 894 423 L 897 449 L 888 494
  L 892 519 L 886 549 L 890 584 L 871 607 L 899 647
  L 901 671 L 918 701 L 941 691 L 979 717 L 1000 751
  Z
`.replace(/\s+/g, ' ').trim();

const W = 1000;
const H = 1000;
const project = (lat, lng) => ({
  x: ((lng - BBOX.minLng) / (BBOX.maxLng - BBOX.minLng)) * W,
  y: ((BBOX.maxLat - lat) / (BBOX.maxLat - BBOX.minLat)) * H,
});

// CSS keyframes injected once
const STYLE_ID = 'algeria-map-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes map-pulse {
      0%   { r: var(--base-r); opacity: 0.4; stroke-width: 1; }
      100% { r: var(--max-r);  opacity: 0;   stroke-width: 0.2; }
    }
    @keyframes map-pulse-hub {
      0%   { r: var(--base-r); opacity: 0.5; stroke-width: 1.5; }
      100% { r: var(--max-r);  opacity: 0;   stroke-width: 0.2; }
    }
    @keyframes map-pulse-hub2 {
      0%   { r: var(--base-r); opacity: 0.25; stroke-width: 0.8; }
      100% { r: var(--max-r2); opacity: 0;    stroke-width: 0.1; }
    }
    @keyframes map-dot-glow {
      0%, 100% { filter: drop-shadow(0 0 4px rgba(245,197,24,0.85)); }
      50%      { filter: drop-shadow(0 0 8px rgba(245,197,24,1)); }
    }
  `;
  document.head.appendChild(style);
}

export default function AlgeriaMap({ wilayas, theme = 'dark', showTooltip = true }) {
  const { i18n } = useTranslation();
  const [hovered, setHovered] = useState(null);

  const points = useMemo(
    () => wilayas.map((w) => ({ ...w, ...project(w.lat, w.lng), isHub: HUB_CODES.includes(w.code) })),
    [wilayas]
  );

  const hubPoints = useMemo(() => points.filter(p => p.isHub), [points]);
  const hoveredPoint = hovered ? points.find((p) => p.code === hovered) : null;

  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), []);

  return (
    <div className="relative w-full" role="img" aria-label="Carte des projets Volta Lighting en Algérie">
      <svg
        viewBox={`-20 -20 ${W + 40} ${H + 40}`}
        className="w-full h-auto"
        style={{ filter: theme === 'dark' ? 'drop-shadow(0 25px 80px rgba(245,197,24,0.05))' : undefined }}
      >
        <defs>
          <linearGradient id={`fill-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1E28" />
            <stop offset="50%" stopColor="#18181F" />
            <stop offset="100%" stopColor="#131318" />
          </linearGradient>

          <linearGradient id={`stroke-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(245,197,24,0.45)" />
            <stop offset="40%" stopColor="rgba(245,197,24,0.15)" />
            <stop offset="70%" stopColor="rgba(245,197,24,0.08)" />
            <stop offset="100%" stopColor="rgba(245,197,24,0.35)" />
          </linearGradient>

          <radialGradient id={`inner-glow-${uid}`} cx="55%" cy="15%" r="50%">
            <stop offset="0%" stopColor="rgba(245,197,24,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id={`ambient-${uid}`} cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="rgba(245,197,24,0.06)" />
            <stop offset="50%" stopColor="rgba(245,197,24,0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <filter id={`glow-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id={`hub-glow-${uid}`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <clipPath id={`clip-${uid}`}>
            <path d={ALGERIA_PATH} />
          </clipPath>
        </defs>

        {/* Background ambient glow */}
        <rect x="-20" y="-20" width={W + 40} height={H + 40} fill={`url(#ambient-${uid})`} />

        {/* Soft outer shadow */}
        <path
          d={ALGERIA_PATH}
          fill="rgba(245,197,24,0.025)"
          stroke="none"
          style={{ filter: 'blur(20px)' }}
        />

        {/* Main country silhouette */}
        <motion.path
          d={ALGERIA_PATH}
          fill={`url(#fill-${uid})`}
          stroke={`url(#stroke-${uid})`}
          strokeWidth="1.8"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Inner glow overlay */}
        <path
          d={ALGERIA_PATH}
          fill={`url(#inner-glow-${uid})`}
          style={{ pointerEvents: 'none' }}
        />

        {/* Subtle grid inside shape */}
        <g clipPath={`url(#clip-${uid})`} opacity="0.035">
          {[...Array(21)].map((_, i) => (
            <line key={`h-${i}`} x1="-20" y1={i * 50} x2={W + 20} y2={i * 50} stroke="#F5C518" strokeWidth="0.5" />
          ))}
          {[...Array(21)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="-20" x2={i * 50} y2={H + 20} stroke="#F5C518" strokeWidth="0.5" />
          ))}
        </g>

        {/* Connection lines between hubs */}
        {hubPoints.length >= 2 && (
          <g opacity="0.1" clipPath={`url(#clip-${uid})`}>
            {hubPoints.map((hub, i) => {
              const next = hubPoints[(i + 1) % hubPoints.length];
              return (
                <line
                  key={`conn-${hub.code}-${next.code}`}
                  x1={hub.x}
                  y1={hub.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="#F5C518"
                  strokeWidth="0.8"
                  strokeDasharray="6 4"
                />
              );
            })}
          </g>
        )}

        {/* Inactive wilayas — faint dots */}
        {points.filter(p => !p.active).map((p) => (
          <circle
            key={p.code}
            cx={p.x}
            cy={p.y}
            r={2.5}
            fill="rgba(161,161,170,0.12)"
            aria-hidden="true"
          />
        ))}

        {/* Active wilayas — CSS-animated markers */}
        {points.filter(p => p.active).map((p, i) => {
          const baseR = p.isHub ? 5 : 3.5;
          const haloMaxR = p.isHub ? 20 : 13;
          const isHovered = hovered === p.code;
          const delay = `${(i % 10) * 0.22}s`;

          return (
            <g
              key={p.code}
              onMouseEnter={() => setHovered(p.code)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.code)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={`${p.name_fr} (${p.name_ar}) — projet livré`}
              className="outline-none"
              style={{ cursor: 'pointer' }}
            >
              {/* Expanding pulse ring — pure CSS */}
              <circle
                cx={p.x}
                cy={p.y}
                r={baseR}
                fill="none"
                stroke="#F5C518"
                style={{
                  '--base-r': baseR,
                  '--max-r': haloMaxR,
                  animation: `${p.isHub ? 'map-pulse-hub' : 'map-pulse'} 2.8s ease-out ${delay} infinite`,
                  pointerEvents: 'none',
                }}
              />

              {/* Second pulse for hubs */}
              {p.isHub && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={baseR}
                  fill="none"
                  stroke="#F5C518"
                  style={{
                    '--base-r': baseR,
                    '--max-r2': haloMaxR * 1.4,
                    animation: `map-pulse-hub2 3.4s ease-out ${parseFloat(delay) + 0.5}s infinite`,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Dashed ring for hubs */}
              {p.isHub && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={baseR + 6}
                  fill="none"
                  stroke="rgba(245,197,24,0.35)"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                  style={{ pointerEvents: 'none' }}
                />
              )}

              {/* Glow behind dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={baseR + 3}
                fill="rgba(245,197,24,0.12)"
                filter={p.isHub ? `url(#hub-glow-${uid})` : `url(#glow-${uid})`}
                style={{ pointerEvents: 'none' }}
              />

              {/* Main marker dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isHovered ? baseR * 1.5 : baseR}
                fill={isHovered ? '#FFD54F' : '#F5C518'}
                stroke={isHovered ? 'rgba(255,255,255,0.4)' : 'transparent'}
                strokeWidth={isHovered ? 1.5 : 0}
                style={{
                  filter: `drop-shadow(0 0 ${p.isHub ? 8 : 4}px rgba(245,197,24,0.85))`,
                  transition: 'r 0.2s ease, fill 0.2s ease, stroke 0.2s ease',
                }}
              />
            </g>
          );
        })}

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && hoveredPoint && (
            <motion.g
              key={hoveredPoint.code}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ pointerEvents: 'none' }}
            >
              {(() => {
                const isHub = HUB_CODES.includes(hoveredPoint.code);
                const tw = 190;
                const th = isHub ? 64 : 56;
                let tx = hoveredPoint.x - tw / 2;
                let ty = hoveredPoint.y - th - 20;
                if (tx < 8) tx = 8;
                if (tx + tw > W - 8) tx = W - tw - 8;
                if (ty < 8) ty = hoveredPoint.y + 20;

                const arrowY = ty < hoveredPoint.y ? ty + th : ty;
                const arrowUp = ty > hoveredPoint.y;

                return (
                  <>
                    <rect
                      x={tx}
                      y={ty}
                      width={tw}
                      height={th}
                      rx="10"
                      fill="rgba(12,12,16,0.95)"
                      stroke="rgba(245,197,24,0.25)"
                      strokeWidth="1"
                    />

                    {/* Gold accent bar */}
                    <rect
                      x={tx + 12}
                      y={ty + 11}
                      width="3"
                      height={th - 22}
                      rx="1.5"
                      fill="#F5C518"
                    />

                    {/* French name */}
                    <text
                      x={tx + 24}
                      y={ty + 25}
                      textAnchor="start"
                      fill="#FAFAF9"
                      fontSize="14"
                      fontWeight="600"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {hoveredPoint.name_fr}
                    </text>

                    {/* Arabic name */}
                    <text
                      x={tx + 24}
                      y={ty + 44}
                      textAnchor="start"
                      fill="rgba(245,197,24,0.8)"
                      fontSize="12"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {hoveredPoint.name_ar}
                    </text>

                    {/* Hub badge */}
                    {isHub && (
                      <>
                        <rect
                          x={tx + tw - 54}
                          y={ty + 11}
                          width="42"
                          height="18"
                          rx="9"
                          fill="rgba(245,197,24,0.12)"
                          stroke="rgba(245,197,24,0.25)"
                          strokeWidth="0.5"
                        />
                        <text
                          x={tx + tw - 33}
                          y={ty + 24}
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="9"
                          fontWeight="700"
                          style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.08em' }}
                        >
                          HUB
                        </text>
                      </>
                    )}

                    {/* Arrow pointer */}
                    {!arrowUp && (
                      <polygon
                        points={`${hoveredPoint.x - 6},${arrowY} ${hoveredPoint.x + 6},${arrowY} ${hoveredPoint.x},${arrowY + 8}`}
                        fill="rgba(12,12,16,0.95)"
                      />
                    )}
                    {arrowUp && (
                      <polygon
                        points={`${hoveredPoint.x - 6},${arrowY} ${hoveredPoint.x + 6},${arrowY} ${hoveredPoint.x},${arrowY - 8}`}
                        fill="rgba(12,12,16,0.95)"
                      />
                    )}
                  </>
                );
              })()}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
