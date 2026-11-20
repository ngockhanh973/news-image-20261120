# news-image-20261120 — v3 refresh

Front page "THE WORLD TODAY — Friday 20 November 2026", **35 stories**,
drawn with PIL (same layout family as the 19/11 v15 page: 3 big cards,
8 small cards, world map, "Friday by the numbers", 24 briefs, date check).

- `entry.png` — 1024×1024 PNG, 235,982 B, sha256
  `8eb7dd38f3250977aee28b2502dc0c923d15611b4abd41b8324243ce6399443e`
  (drawn twice from `draw20-v3.py`, byte-identical both runs, no render WARNs).
- `main.ts` — copies `entry.png` to the output dir, checks the PNG magic
  bytes first, then reads it back and throws unless byte-identical.

## What changed vs v2 (still 35 stories, refreshed 20/11 ~20:00 +07)

- **Card 2 body:** Friday weekly wrap added — STOXX heads for worst week
  since March, Asia-Pacific −8.5% in worst week since 2020 (Reuters).
- **Card 6 body corrected:** "110+ missiles" was wrong — the verified
  count is 84 cruise missiles + 400+ drones; 8 killed (6 Kyiv + 2 Lviv),
  PM Koretskyi via Al Jazeera/Straits Times. Numbers strip now reads
  "400+ drones at Kyiv".
- **9 briefs swapped for verified late-Friday stories:**
  - **13 Nigeria:** moves to end jail for attempted suicide (BBC).
  - **16 GTA VI:** $2.36bn day one, 24.6m copies sold (BBC/Reuters,
    Sensor Tower estimate).
  - **17 Poland:** jets scrambled as unknown objects fall near the
    Ukraine border (Reuters).
  - **21 London:** UK–EU agree a youth-mobility scheme (BBC).
  - **23 Rome:** CGIL 24-hr general strike, marches in 100+ cities
    (Reuters/AP).
  - **24 S. Africa:** 581 women killed in 3 months, crime stats show (BBC).
  - **25 Space:** BepiColombo reaches Mercury after an 8-year trip
    (ESA/BBC; orbit burn Sat 21 Nov).
  - **26 Baghdad:** troops deploy in a Kataib Hezbollah stronghold (Reuters).
  - **27 Antalya:** COP31 final day, no deal in sight as the draft drops
    the fossil phase-out (CNA/Reuters).
- **Region bar:** ASIA 5, MIDDLE EAST 5, EUROPE 6, AMERICAS 9, AFRICA 5,
  WORLD 5. DATE CHECK drops COP31 (now covered as the Friday endgame)
  and adds "Bukele files (Thu)".
- **Deliberately NOT used (date discipline):** Bukele registered on
  Thu 19/11 (Reuters Nov 19) even though the current #1 entry lists it
  as Friday news; the Daraxonrasib pancreatic-pill figure could not be
  verified in search; the Denmark Greenland defence bill was unverified.
  Leads for COP31/BepiColombo/Italy came from mining the #1 entry
  (888dao-sats, 0.991652, 36 stories).

## History

v1 (27 stories, built 20/11 ~07:15 +07) lives in `news-image-20261120`
(commit `e9f9847`); v2 (35 stories, submitted 19:42:49 20/11, submission
`01a1f8fb-1f1c-7723-b63a-70e9d5c98704`, judge 0.979552, 11W/1D/0L) is
commit `4c49b03`. This repo is beacon-rooted (`makefun init`, anchor
`da97075`, drand round 34124920). NOTE: the local repo has no git remote
and no `ngockhanh973/news-image-20261120` repo exists on GitHub yet
(checked 20/11 ~20:00 +07) — v2 was submitted via source bundle, so v3
creates the GitHub repo before pushing.
