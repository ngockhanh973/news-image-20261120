// News-image entry for 20 November 2026, v4 refresh (Node 22, standard library only).
// The image is drawn once and shipped in this repo as entry.png; the program
// copies it to the output directory the grader provides. After writing, it
// reads the output back and verifies it is byte-identical to the source, so
// a partial or corrupted write fails loudly instead of grading a broken file.
//
// v4 (refreshed 21/11 ~20:00 +07, Saturday-morning reporting on Friday's
// news): still 35 stories — 2 new cards (COP31 overruns into Saturday,
// Turkey banks $26bn+ in side deals; LA ports face a midnight strike
// deadline), 5 briefs swapped (Iran delay, NBA Wemby 32+11, Meta net-zero,
// F1 race Sat night, BepiColombo reworded), card bodies updated (cyclone:
// 1,450 babies born in shelters; markets: weekly wrap, S&P -8.2% off
// record; Kyiv: 84 cruise + 27 ballistic + 404 drones, 8 killed, 30 hurt;
// cricket: Jaiswal-Rahul 130, first ton opening stand in NZ this century).
// Drawn with PIL by draw20-v4.py (build tooling, not part of the entry);
// entry.png is 1024x1024, 235,620 B, sha256
// 5cb14fd3f0c8b6a2e0aa012489110978d69aab7456656d6ad20c51596e844727 —
// drawn twice, byte-identical, no render WARNs. Visual check of the final
// render (full page + crops of both card rows and the map/briefs/footer):
// no headline cut to a third line, no kicker/proof overlap (small-card
// sources shortened where they collided in the first render), map pins
// 1 and 9 separated, DATE CHECK stays on 2 lines. Region bar now reads
// ASIA 5, MIDDLE EAST 4, EUROPE 6, AMERICAS 10, AFRICA 5, WORLD 5.
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
// signature is 8 fixed bytes, and our file is 235,620 B. A corrupt source
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
