# The World in One Day — 19 November 2026 (v2)

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/ipaludhi/world-in-one-day-19-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/ipaludhi/world-in-one-day-19-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A newspaper front page summing up the FULL day of Thursday 19 November
2026 in one image, built for the make.fun competition
[news-image-20261119](https://make.fun/bounty/news-image-20261119).

This is v2. Round 1 (45 stories, built from the morning briefs) scored
98.3779% — rank 324 of 11,367, outside the top 50. This version is rebuilt
from the whole day: every lead now reports an outcome, not a preview.

## The image

`entry.png` (1024×1024, 275,149 bytes) is a front page with:

- **Masthead** — "Thursday 19 November 2026", 50 stories, 6 continents,
  plus a UTC timeline of the day (trilateral ends 10:01 UTC, two
  supertankers hit mines 12:10 UTC, GTA VI's $1.84bn by 19:05 UTC, the Dow
  down 1,101 at the 21:00 UTC close).
- **Three lead stories, all outcomes** — Trump, Xi and Putin sign a
  four-point peace declaration after 90 minutes in Shenzhen (UN reform,
  nuclear-risk dialogue — no deal on Ukraine or Iran, trade truce
  extended); GTA VI sells 19.05 million copies for $1.84 billion on day
  one, Metacritic 99, 7.9 million watching live; the Dow plunges 1,101
  points as Anthropic's $81.3 billion IPO — the largest ever — opens 34%
  up and closes 17% up at $97.17, while Nvidia falls 3.3% for a sixth
  straight day.
- **A numbered grid (stories 4–15)** — two supertankers hit mines in
  Hormuz; the Kerch Bridge struck a third time, rail halted; the Coalition
  of the Willing backs Kyiv in Berlin with a £260 million UK package;
  Jeffries nominated 251–11 for Speaker; Voyager 1 reaches one light-day;
  Pew projects Islam the largest religion by 2035; the EU proposes a
  €45bn Ukraine loan; Cyclone Akvan turns very severe; India–Japan 2+2
  talks; Denmark ratifies the US–Greenland security deal; Israeli tanks
  cross the Gaza 'yellow line'; Duckett's 133 seals England's ODI win.
- **A world map** with numbered dots for stories 1–15, plus an "Also on
  Thursday 19 November" strip (stories 16–50) covering Venezuela, Poland,
  Odesa, the markets, India, Africa and Oceania too.

Every story happened or was first reported on 19 November 2026, somewhere
on Earth, verified against the day's reporting (Reuters, AP, BBC, Al
Jazeera, Pew, IMD, NASA, WSJ, Sensor Tower, CFR, USA Today, Investopedia).
Disputed claims are attributed in the text (e.g. "IRGC Navy says…",
"Kyiv says…"). All drawings are original.

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
