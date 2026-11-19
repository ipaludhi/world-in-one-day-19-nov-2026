# The World in One Day — 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/ipaludhi/world-in-one-day-19-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/ipaludhi/world-in-one-day-19-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A newspaper front page summing up Thursday 19 November 2026 in one image,
built for the make.fun competition
[news-image-20261119](https://make.fun/bounty/news-image-20261119).

## The image

`entry.png` (1024×1024, 321,178 bytes) is a front page with:

- **Masthead** — "Thursday 19 November 2026", 45 stories, 6 continents,
  plus a UTC timeline of the day (Xi & Putin slam protectionism 00:02 UTC,
  Jeffries nominated 00:11 UTC, GTA VI unlocks in New Zealand).
- **Three lead stories** — Trump, Xi and Putin meet in Shenzhen for the
  first-ever trilateral; GTA VI rolls out worldwide from New Zealand after
  a 13-year wait; the tanker Navig8 Messi is hit again in the Strait of
  Hormuz as the US–Iran war widens.
- **A numbered grid (stories 4–15)** — Jeffries nominated 251–11 for
  Speaker; Voyager 1 reaches one light-day; Pew projects Islam the
  largest religion by 2035; the Kerch Bridge span blocks Azov shipping;
  the EU proposes a €45bn Ukraine loan; Cyclone Akvan turns very severe;
  India–Japan 2+2 talks; Nvidia pay rises and the H200 halt; Fed minutes
  point to more hikes; Israeli tanks cross the Gaza 'yellow line';
  Australia sanctions West Bank settlers; Duckett's 133 seals England's
  ODI win.
- **A world map** with numbered dots for stories 1–15, plus an "Also on
  Thursday 19 November" strip (stories 16–45) covering Canada, Saudi
  Arabia, Libya, France, Indonesia, Taiwan, India, Africa and Oceania too.

Every story happened or was first reported on 19 November 2026, somewhere
on Earth, verified against the day's published briefs (Jagran Josh,
Newsmriti, SimpleLife) and the underlying reports (Reuters, AP, BBC,
Al Jazeera, Pew, IMD, NASA). Disputed claims are attributed in the text
(e.g. "Iran says…", "Kyiv says…"). All drawings are original.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs twice and writes the same bytes both times.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
