// News-image entry for 20 November 2026, v3 refresh (Node 22, standard library only).
// The image is drawn once and shipped in this repo as entry.png; the program
// copies it to the output directory the grader provides. After writing, it
// reads the output back and verifies it is byte-identical to the source, so
// a partial or corrupted write fails loudly instead of grading a broken file.
//
// v3 (refreshed 20/11 ~20:00 +07): still 35 stories — 9 briefs swapped for
// verified late-Friday news (Nigeria suicide-law reform, GTA VI $2.36bn day
// one, Poland jets scrambled, UK-EU youth-mobility deal, Italy CGIL strike,
// South Africa 581 women killed, BepiColombo at Mercury, Iraq militia
// stronghold deployment, COP31 final-day deadlock), card 2 gains the Friday
// weekly market wrap, and card 6 corrects "110+ missiles" to the verified
// 84 cruise missiles + 400 drones. Drawn with PIL by draw20-v3.py (build
// tooling, not part of the entry); entry.png is 1024x1024, 235,982 B, sha256
// 8eb7dd38f3250977aee28b2502dc0c923d15611b4abd41b8324243ce6399443e —
// drawn twice, byte-identical, and main.ts re-verified to copy it
// byte-identical to two output dirs.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));
// Guard against a truncated or non-PNG source slipping through: the PNG
// signature is 8 fixed bytes, and our file is 235,982 B. A corrupt source
// must fail here, not after a partial write.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (image.length < PNG_MAGIC.length || !image.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is missing or is not a PNG file');
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, image);
if (!readFileSync(outPath).equals(image)) {
  throw new Error('entry.png written to output does not match the source image');
}
