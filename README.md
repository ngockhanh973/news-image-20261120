# news-image-20261120 — v4 refresh

Front page "THE WORLD TODAY — Friday 20 November 2026", **35 stories**,
drawn with PIL (same layout family as the 19/11 v15 page: 3 big cards,
8 small cards, world map, "Friday by the numbers", 24 briefs, date check).

- `entry.png` — 1024×1024 PNG, 235,620 B, sha256
  `5cb14fd3f0c8b6a2e0aa012489110978d69aab7456656d6ad20c51596e844727`
  (drawn twice from `draw20-v4.py`, byte-identical both runs, no render WARNs;
  full page + crops checked by eye: no headline cut, no kicker/proof
  overlap, map pins separated, DATE CHECK on 2 lines).
- `main.ts` — copies `entry.png` to the output dir, checks the PNG magic
  bytes first, then reads it back and throws unless byte-identical.

## What changed vs v3 (still 35 stories, refreshed 21/11 ~20:00 +07)

- **Card 4 NEW (replaces Iran): COP31 OVERRUNS INTO SATURDAY** — no deal
  as the Friday deadline passes; draft drops fossil phase-out; $120bn
  adaptation target gone; Turkey banks $26bn+ in side deals incl. $15bn
  China renewables (Reuters 20/11; CGTN/AFP on the weekend overrun).
  New `ill_cop31` art (globe, 1.5°C overshoot). Iran demoted to brief 12.
- **Card 5 NEW (replaces Meta): LA PORTS' MIDNIGHT DEADLINE** — 250 ILWU
  watchmen's deal lapses 00:01 Sat; no deal after Friday talks; a strike
  would idle terminals moving 85% of Long Beach cargo (Reuters 18–20/11).
  New `ill_port` art (containers + crane). Meta demoted to brief 27.
- **Card 1 body:** 372,000 evacuated; no major damage; **1,450 babies born
  in shelters** (Down To Earth / NDTV).
- **Card 2 body + headline:** weekly wrap — S&P −2% Thu, 6th straight
  loss, −8.2% off record; Dow −1,101, below 50,000 first time since June;
  STOXX worst week since Mar; Asia −8.5% (AP/Reuters).
- **Card 6 body:** 84 cruise, 27 ballistic, 404 drones; 3 bridges hit;
  8 killed, 30 hurt; power cut in 10 regions (Kyiv Independent / Pravda).
- **Card 8 headline + body:** Jaiswal 85, Rahul 52* in a 130 stand —
  India's first ton opening stand in NZ this century (ANI/NDTV).
- **5 briefs swapped:** 12 Iran delay (ex-card 4); 19 NBA (Wemby 32+11
  as Spurs go joint-top West, Flashscore); 27 Meta net-zero (ex-card 5);
  29 F1 (race Sat night; Antonelli already champion); 25 BepiColombo
  reworded (arrives at Mercury; orbit burn Sat, ESA schedule).
- **Numbers strip:** "$26bn Turkey COP deals" and "1,450 babies born"
  replace the Bank record and Nicholls lines (both still in card bodies).
- **Region bar:** ASIA 5, MIDDLE EAST 4, EUROPE 6, AMERICAS 10, AFRICA 5,
  WORLD 5. DATE CHECK adds Board of Peace report (Wed) + Arch halt (Wed).
- **Deliberately NOT used (date discipline):** Anthropic debut (Thu);
  Trump–Kim meeting (Thu NBC interview, no date set); Gaza Board of Peace
  report (Wed); Triumphal Arch halt (Wed); **F1 2026 qualifying result —
  search returns only the 2025 Norris-pole articles, so the 2026
  pole-sitter is UNVERIFIED and not printed**; Friday US market close —
  search still shows Thursday's close, so no Friday close numbers printed.

## History

v1 (27 stories, built 20/11 ~07:15 +07) lives in `news-image-20261120`
(commit `e9f9847`); v2 (35 stories, submitted 19:42:49 20/11, submission
`01a1f8fb-1f1c-7723-b63a-70e9d5c98704`, judge 0.979552, 11W/1D/0L) is
commit `4c49b03`; v3 (35 stories, late-Friday refresh, pushed not submitted)
is commit `4accd74`. v4 is a third candidate for the final submission
(~05:00 22/11; the submitter picks v2/v3/v4 — a new submission replaces
the old one entirely). This repo is beacon-rooted (`makefun init`, anchor
`da97075`, drand round 34124920), GitHub public
`ngockhanh973/news-image-20261120`, branch `main`.
