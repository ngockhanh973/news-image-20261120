// News-image entry for 20 November 2026 (Node 22, standard library only).
// The image is drawn once and shipped in this repo as entry.png; the program
// copies it to the output directory the grader provides. After writing, it
// reads the output back and verifies it is byte-identical to the source, so
// a partial or corrupted write fails loudly instead of grading a broken file.
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
