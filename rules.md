# Project Rules — Volta & Lighting

## Code Quality
- Functional React components with hooks only
- Component files in PascalCase (`Navbar.jsx`), utility files in kebab-case (`use-scroll.js`)
- Custom hooks prefixed with `use`
- Reusable primitives in `src/components/ui/`, layout in `src/components/layout/`, sections in `src/components/sections/`
- No inline styles except dynamic values — prefer Tailwind classes
- Commented section headers for clarity (`// --- HERO SECTION ---`)
- **No `console.log` in production** (strip via Vite `define` or ESLint rule)
- Props validated (PropTypes now, migrate to TypeScript later)

## Performance
- Images : always `loading="lazy"` except above-the-fold hero
- WebP preferred for photos/screenshots ; PNG only when transparency required ; SVG for icons/logos
- Lazy-load below-the-fold sections via `React.lazy` (FAQ, Testimonials, Contact)
- Minimize re-renders : `useMemo` / `useCallback` / `React.memo` where measurable
- Isolate scroll / mouse state in dedicated components to avoid global re-renders
- Animations GPU-accelerated (transform / opacity only, no `top` / `left`)
- Vite code splitting respected ; no single route bundle > 200 KB gz

## Accessibility
- All interactive elements keyboard-navigable (Tab, Enter, Esc for modals)
- `aria-label` on icon-only buttons
- Sufficient color contrast (WCAG AA : 4.5:1 text, 3:1 UI)
- Focus states always visible (`focus-visible:ring-2 focus-visible:ring-gold-500`)
- Semantic HTML (`nav`, `main`, `section`, `article`, `footer`, `h1` unique)
- Alt text descriptive in French (never `alt="image"` or `alt="photo"`)

## SEO
- Meta tags dynamic per language (title, description, OG, Twitter)
- Schema.org `LocalBusiness` + `Service[]` in `index.html` + SEO component
- One `<h1>` per page, then h2 → h3 hierarchy
- `<html lang>` and `dir` dynamic via Helmet
- `hreflang` alternates for FR / AR / EN
- `robots.txt` + `sitemap.xml` in `public/`
- Clean URLs, no query-string navigation

## i18n & RTL
- Always FR (default) + AR + EN
- All user-facing strings in `src/locales/{fr,ar,en}.json`
- Persist language choice in `localStorage` key `volta_lang`
- When `lang === 'ar'` : `document.dir = 'rtl'`, font family switches to IBM Plex Sans Arabic
- Use logical properties : `ms-` / `me-` / `start-` / `end-` instead of `ml-` / `mr-` / `left-` / `right-`
- Test every section in RTL before shipping

## Design System
- Colors only from Tailwind config (no raw hex in JSX except dynamic gradients)
  - `ink-950` #050505 — background
  - `gold-500` #F5C518 — signature accent
  - `mist-50` #FAFAFA — primary text
- Spacing on 4 px grid (Tailwind defaults)
- Typography : Inter Variable (display + body, FR/EN), IBM Plex Sans Arabic (Arabic). Weight-based hierarchy, no italics.
- Animations : Framer Motion only, signature ease `[0.22, 1, 0.36, 1]`
- Mobile-first responsive, breakpoints sm / md / lg / xl standard Tailwind

## Security
- Never commit API keys, tokens or secrets (use `.env` files, gitignored)
- If Supabase added : RLS **always ON**, never `service_role` key on the client
- No inline `<script>` without CSP nonce
- No `dangerouslySetInnerHTML` unless sanitized with DOMPurify
- Form validation client **and** server side
- CSP + security headers configured in `netlify.toml`

## Git
- Commit messages in English, imperative mood (`fix navbar flicker`, not `fixed navbar`)
- Atomic commits (one logical change per commit)
- No binaries > 500 KB in the repo (use WebP conversion instead)
- `main` is always deployable

## Review Checklist (before merge)
- [ ] Site loads under 3 s on 3G throttling
- [ ] Tested in FR + AR + EN
- [ ] Tested on mobile + desktop
- [ ] No console errors / warnings
- [ ] Lighthouse score ≥ 90 on all 4 categories
