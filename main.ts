// News-image entry for 20 November 2026, v2 refresh (Node 22, standard library only).
// The image is drawn once and shipped in this repo as entry.png; the program
// copies it to the output directory the grader provides. After writing, it
// reads the output back and verifies it is byte-identical to the source, so
// a partial or corrupted write fails loudly instead of grading a broken file.
//
// v2 (refreshed 20/11 ~19:45 +07): 35 stories — Akvan aftermath (372,000
// evacuated, no lives lost), Friday market futures lower, Moscow's Article 5
// pushback, the overnight Kyiv barrage, India banks at a record high, and
// 24 briefs. Drawn with PIL by draw20-v2.py (build tooling, not part of
// the entry); entry.png is 1024x1024, 235,200 B, sha256
// eeb1a4c9030139b59859bcab81cadcc6d00921d61d3279a7c8ca5ec95624d13f —
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

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, image);
if (!readFileSync(outPath).equals(image)) {
  throw new Error('entry.png written to output does not match the source image');
}
