# news-image-20261120 — v1 port

Front page "THE WORLD TODAY — Friday 20 November 2026", 27 stories,
drawn with PIL (same layout family as the 19/11 v15 page: 3 big cards,
8 small cards, world map, "Friday by the numbers", 16 briefs, date check).

- `entry.png` — 1024×1024 PNG, 215,089 B, sha256
  `112de7c3ef0ca5727e9d762fdc8e5a770186e14041aa5091c5183d51859d81bb`
- `main.ts` — copies `entry.png` to the output dir, then reads it back
  and throws unless byte-identical.

Ported byte-identical from the v1 repo (`news-image-20261120`,
commit `e9f9847`) into this beacon-rooted entry repo. The LICENSE here
is the one `makefun init` wrote (copyright holder: the entry wallet),
which differs from v1's LICENSE only in that holder line.
