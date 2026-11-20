# news-image-20261120 — v2 refresh

Front page "THE WORLD TODAY — Friday 20 November 2026", **35 stories**,
drawn with PIL (same layout family as the 19/11 v15 page: 3 big cards,
8 small cards, world map, "Friday by the numbers", 24 briefs, date check).

- `entry.png` — 1024×1024 PNG, 235,200 B, sha256
  `eeb1a4c9030139b59859bcab81cadcc6d00921d61d3279a7c8ca5ec95624d13f`
  (drawn twice from `draw20-v2.py`, byte-identical both runs).
- `main.ts` — copies `entry.png` to the output dir, then reads it back
  and throws unless byte-identical.

## What changed vs v1 (27 → 35 stories, refreshed 20/11 ~19:45 +07)

- **1 Akvan aftermath:** landfall done 7:30am, 70–80 km/h gusting 90,
  weakened to a deep depression; **no major damage, no lives lost**;
  372,000 evacuated (IMD, NDTV, The Hindu, New Indian Express).
- **2 Markets:** Thursday close S&P −2% etc. + Friday futures lower,
  Anthropic −8% pre-market after its debut reversal (Reuters, IBD).
- **3 Kushner:** Friday pushback — Ryabkov calls NATO-style guarantees
  "totally unacceptable"; Macron reopens NATO membership (Reuters, AP).
- **4 Trump/Iran:** Senate again rejects a war curb; Netanyahu pressing
  for a 4–7-day campaign (NYT via Reuters/Haaretz).
- **6 Kyiv barrage (replaces Putin Kerch vow):** 110+ missiles overnight,
  8 killed, 3 Dnipro bridges damaged; Poland airspace violated, Tusk
  calls it a "deliberate provocation" (CNN, The Times, Kyiv Post).
- **8 Cricket day 2:** NZ 368 (Nicholls 175*, Phillips 118), India 159/1
  (Jaiswal 85, Rahul 52*) (Cricbuzz, New Indian Express).
- **9 India banks (replaces H5N1 vaccine → brief 35):** Nifty Bank record
  close 64,635 (+2.5%), Sensex +898 to 83,920, Nifty 25,801 — 9-month
  highs (CNBC-TV18, ZeeBiz, Moneycontrol).
- **New briefs 28–35:** Riyadh Friday intercept, Las Vegas F1 FP2
  (Russell tops wet session), White House cyber chief ousted, Rams'
  Puka Nacua suspended, UFC Fiorot banned, UK hands US soldier accused
  of spying to the US, Gaza aid call, Bhopal H5N1 vaccine.

## History

v1 (27 stories, built 20/11 ~07:15 +07) lives in `news-image-20261120`
(commit `e9f9847`); this repo is beacon-rooted (`makefun init`, anchor
`da97075`, drand round 34124920) and v1 was ported here byte-identical
before the v2 refresh. The LICENSE here is the one `makefun init` wrote
(copyright holder: the entry wallet), which differs from v1's LICENSE
only in that holder line.
