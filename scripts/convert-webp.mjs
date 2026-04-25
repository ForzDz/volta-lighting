// One-shot : convertit les screenshots PNG lourds en WebP (qualité 82)
// Conserve les logos PNG (transparence, déjà petits).
// Usage : node scripts/convert-webp.mjs
import { readdir, stat } from 'node:fs/promises';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'images');
const SKIP = new Set(['logo-volta-complet.png', 'logo-volta-mark.png']); // garder PNG

const files = await readdir(DIR);
let total = 0;
let saved = 0;

for (const f of files) {
  if (!f.toLowerCase().endsWith('.png')) continue;
  if (SKIP.has(f)) { console.log(`⊙ skip ${f} (logo)`); continue; }

  const src = join(DIR, f);
  const dst = join(DIR, parse(f).name + '.webp');
  const before = (await stat(src)).size;

  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dst);

  const after = (await stat(dst)).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`✓ ${f} → ${parse(f).name}.webp  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${pct}%)`);
  total += before;
  saved += before - after;
}

console.log(`\nTotal : ${(total/1024).toFixed(0)}KB → ${((total-saved)/1024).toFixed(0)}KB  (économie ${(saved/1024).toFixed(0)}KB)`);
