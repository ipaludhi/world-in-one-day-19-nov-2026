// The World in One Day — 19 November 2026 (news-image-20261119 entry).
// A newspaper front page of the day's world news: 45 verified stories from
// six continents, three lead stories, a UTC timeline, a numbered grid and a
// world map. The program copies the image held in this repository to
// /output/entry.png. Node 22, standard library only. Outside the grader, run
// with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The gate allows at most 1 MiB; refuse loudly rather than submit an oversize file.
const src = new URL('./entry.png', import.meta.url);
if (statSync(src).size > 1048576) throw new Error('entry.png exceeds the 1 MiB gate');
copyFileSync(src, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
