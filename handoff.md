# Handoff

## Just done (2026-10-27)
- Branch `feat/assemblyai-certificate` (pushed to origin; PR ready).
- Added AssemblyAI Voice Agent Hackathon Certificate of Completion for MediScribe Live (URL: `https://lablab.ai/u/@rhasan22959110/ai-hackathons/assemblyai-voice-agent-hackathon/certificate`, Certificate ID: `CMUQV0KAG00BNS601TCNEOUV0`).
- Removed "Try the live app" button and liveUrl for MediScribe Live from `mediscribe-live.astro`, `src/data/projects.ts`, `public/llms.txt`, `src/pages/api/chat.ts`, and `README.md`.
- Removed all mentions of BBA from BUP across the site:
  - `src/data/dossier.ts`: removed `education` from interface and object.
  - `src/components/SeoHead.astro`: removed `alumniOf` schema.
  - `src/pages/index.astro`: removed the `BBA BUP` teal pill from the "Certified, verified" paper trail.
  - `src/pages/about.astro`: removed the Education box section.
  - `src/pages/api/chat.ts`: removed BBA/BUP from fallback facts.
  - `src/pages/preview-dark.astro` & `src/pages/preview-light.astro`: removed formal education blocks.
  - `README.md`: removed education mention from About description.
- Files changed:
  - `src/data/credentials.ts`: added `assemblyai-voice-agent` (`code: "AAI-VOICE"`, category "AI & Hackathons", pink tone, verified, issuer "AssemblyAI / Lablab.ai").
  - `src/data/projects.ts`: added optional `certificateUrl` to `ProjectHackathon`; updated `mediscribe-live` hackathon to `Certificate of Completion` + certificate URL, updated impact bullet, removed `liveUrl`; updated `ledgerbuddy-ai` hackathon with certificate URL.
  - `src/pages/projects/mediscribe-live.astro`: removed live app button, added gold "Certificate" button in hero actions and auto-updated Status spec.
  - `src/pages/projects/index.astro`: added "Certificate" external link button for hackathons that have `certificateUrl`.
  - `src/pages/credentials.astro`: updated meta description & intro to include AssemblyAI.
  - `src/pages/skills.astro`: updated proof callout copy to mention AssemblyAI & AMD hackathons.
  - `public/llms.txt`, `src/pages/api/chat.ts`: updated AssemblyAI certificate link and facts.
  - `README.md`: updated projects count (10) and included MediScribe Live & Innworld RPG in personal projects.
- Verified: `npx astro check` 0 errors, `npm run build` cleanly passed, HTML verified for certificate button and badge on homepage, `/credentials`, `/projects`, and `/projects/mediscribe-live`. Verified 0 occurrences of BBA, BUP, or mediscribe live URL in build output.

## 2026-10-07 SEO finding
Search Console shows 273 pages "Discovered - currently not indexed" and 3 "Page with redirect". Cause: apex `rhasan.online` 308-redirects to `www.rhasan.online` on Vercel, while canonical/sitemap/robots point to the apex. Google sees a loop. Fix is Vercel Domains setting (apex primary, www redirects to apex). User must do it. No repo files changed.

## Just done (2026-10-02)
- Branch `feat/innworld-rpg` (from `origin/main` at `353148e`, i.e. after PR #6 merged).
- Added **Innworld RPG** — a free, non-commercial fan RPG of *The Wandering Inn* by pirateaba.
  Source repo: `D:\ClaudeC\Innworld RPG` (GitHub `Daddy-Ousen/innworld-rpg`).
  Browser build: https://daddy-ousen.github.io/innworld-rpg/ · release `v0.1.1-alpha`.
  All copy comes from that repo's README, docs/DESIGN.md and progress.md. No invented numbers.
- Files changed:
  - `src/data/projects.ts`: `category` union gains `"Games"`; new `innworld-rpg` entry inserted after `mediscribe-live` (so 4th in the list), `featured: false`, with `diagramSteps`.
  - `src/data/tones.ts`: `innworld-rpg` gold tone, tag "Fan game · Godot 4".
  - `src/pages/projects/index.astro`: "Games" filter chip added before "Hackathons"; meta description and intro mention the game.
  - New `src/pages/projects/innworld-rpg.astro`: hero with Play / Download / GitHub buttons, a "why I built it" section stating the fan-work and copyright position, a Books 1–6 canon table, and a Specs sidebar.
  - `public/llms.txt`, `src/pages/api/chat.ts`: Innworld RPG facts, new fallback bullet, new keywords (`game`, `godot`, `innworld`, `rpg`, `wandering inn`), Godot added to the stack line.
- Numbers used (counted from the game repo's JSON, not guessed): 898 canon events, 261 characters, 103 places, 38 maps, 147 GUT scripts (~1,400 tests), 102 Python tests, Books 1–6.
- Verified: `npx astro check` 0 errors, `npm run build` OK, `/projects/innworld-rpg` in the sitemap, Games filter shows exactly 1 card, project order NextVector / Hermes / MediScribe / **Innworld RPG** / TimeBuddy / …, 375px no overflow on both pages, dark mode table header readable, no console errors.

## Merge state (important)
- PR #7 merged at 2026-10-02 06:26Z (merge commit `6c70e66`). It carried the project entry, the case study, the Games filter and the homepage swap — but NOT the itch.io link.
- The itch.io commit was pushed to `feat/innworld-rpg` after that merge, so it never landed. It was cherry-picked onto a fresh branch `feat/innworld-itch` (commit `5331b51`) and opened as PR #8: https://github.com/Daddy-Ousen/rhasanPro/pull/8
- `feat/innworld-rpg` is merged and can be deleted. Use `feat/innworld-itch` for any further itch.io work.

## Next
- Done: itch.io is https://rhasasn229.itch.io/innworld-rpg (user supplied; note the handle is `rhasasn229`, not `daddy-ousen`). Wired in as `storeLinks`, a hero button, an "Also on" spec, and in llms.txt + chat.ts.
- Done: homepage swap. `innworld-rpg` is `featured: true`, `mediscribe-live` is `featured: false` (user choice). Homepage tiles are Hermes (spotlight), NextVector, Innworld RPG, LedgerBuddy. Note homepage tiles render only `metrics.slice(0, 2)`, so the tile shows Books As Canon and Canon Events, not the release.
- Still open from before: "Groq" → "Fireworks AI" in `src/data/skills.ts` and `public/llms.txt` (Hermes line); the code uses Fireworks.
- Optional: remove the unused `gsap` dependency; delete `src/pages/preview-dark.astro` / `preview-light.astro`.

- `ProjectItem` now has an optional `liveLabel`. Setting `storeLinks` makes `/projects` label the `liveUrl` button "Website"; `liveLabel` overrides that. Innworld uses "Play in browser" because its `liveUrl` is the WebAssembly build, not a marketing site.

## Gotchas
- SECURITY: `D:\AntigravityProjects\LedgerBuddy\website\package.json` has a GitHub personal access token inside `repository.url`. User was told to revoke it. Do not copy it anywhere.
- `git push origin main` fails by design (branch protection). Use a branch + PR.
- Lenis smooth scroll hijacks `scrollIntoView` in the browser pane. Remove the `lenis` class from `<html>` and use `window.scrollTo` before screenshotting a section.
- Remove `astro-dev-toolbar` before automated clicks; it can swallow them.
- Scripts bind on `astro:page-load` only. Filtering uses the `hidden` attribute.
- `innerWidth` is 0 when the browser pane is hidden; use `resize_window` to test widths.
- Git warns LF→CRLF on Windows; harmless.
- Dev server `astro-dev` (port 4321) may still be running from `preview_start`.
