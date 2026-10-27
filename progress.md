# Progress — rhasan.online

## Roadmap
- [x] Live portfolio (Astro 5 + Tailwind v4, Vercel) at rhasan.online
- [x] Redesign mockups: 3 directions (A Rack, B man page, C Dhaka Dispatch) as private Artifact
- [x] User picked C · Dhaka Dispatch (2026-09-14)
- [x] Implement C across all pages on branch `redesign/dhaka-dispatch` (build + astro check pass, visually verified desktop/mobile/light/dark)
- [x] New pixel "R" favicon + regenerated og-image.png / og-image.svg in new palette
- [x] README typography/design line updated
- [x] Committed `6f01f0e` and pushed branch `redesign/dhaka-dispatch` to origin (2026-09-14)
- [x] Protect `main` with 2 GitHub rulesets (2026-09-14): `23336674` "main: no delete, no force push" (no bypass), `23336677` "main: changes only through pull requests" (PR + "Vercel" status check, admin bypass only via PR). Verified via `gh api repos/Daddy-Ousen/rhasanPro/rules/branches/main`.
- [x] Add 4 Thrive IT products to Projects (2026-09-15, uncommitted): TimeBuddy, OrderBuddy (SaaS Products), LedgerBuddy, Equa (Cross-Platform Apps). New case studies `/projects/{timebuddy,orderbuddy,ledgerbuddy,equa}`, new filter chips, store buttons, llms.txt + chat fallback updated. `astro check` 0 errors, build OK, filters + mobile (375px, no overflow) verified.
- [x] Homepage tiles now: NextVector, Hermes, LedgerBuddy, Equa (OGGRO + LedgerBuddy AI set `featured: false`, still on /projects). Verified in browser, build OK.
- [x] Committed `118ea09` and pushed `redesign/dhaka-dispatch` (2026-09-15)
- [x] Homepage Hermes spotlight (2026-09-15, uncommitted): Hermes first, full-width tile with tagline, 3 capability cards, 3 metrics, "Ask Hermes now" button (opens chat widget) + "How it works" link. Other 3 tiles in a row of three. Verified: order/widths, button opens drawer, no mobile overflow, no console errors, `astro check` 0 errors, build OK.
- [x] LedgerBuddy tile tone navy → teal (`src/data/tones.ts`) so homepage row reads navy / teal / pink. Verified by screenshot (2026-09-15, uncommitted).
- [x] AI focus added (2026-09-15, uncommitted): new skills domain `ai-engineering` (DOMAIN 06, 4 Intermediate skills: AI Automation & Agentic Workflows, AI Deployment & Optimization, Prompt Engineering & Structured Output, AI API Integration & Configuration). Old `automation-software` is now DOMAIN 07 "Automation, Scripting & Software"; its agentic AI card was replaced by "Cloud Deployment & CI/CD". AI wording added to dossier shortBio/fullBio, homepage hero line, About page (new paragraph + principle stack), llms.txt, chat.ts facts + skills fallback. Verified: skills filter/search, no overflow, `astro check` 0 errors, build OK.
- [x] Prompt Engineering & Structured Output + AI API Integration & Configuration set to Mastery (user choice). Other 2 AI skills stay Intermediate. Verified on /skills.
- [x] Committed `08c8bf4` (Hermes spotlight, LedgerBuddy tone, AI skills + wording) and pushed `redesign/dhaka-dispatch` (2026-09-15)
- [x] Projects list order (2026-09-15, uncommitted): NextVector, Hermes, TimeBuddy, OrderBuddy, LedgerBuddy, Equa, LedgerBuddy AI MVP, OGGRO (last). Array order in `src/data/projects.ts`; homepage unaffected.
- [x] Committed `3a215f7` (project order) and pushed `redesign/dhaka-dispatch` (2026-09-15)
- [x] User merged branch into `main` (PR #4). Live site updated (2026-09-15).
- [x] New `README.md` written on branch `docs/readme` (2026-09-15)
- [x] Committed `8800be2` (README) and pushed `docs/readme` (2026-09-15)
- [x] `docs/readme` merged to `main` (PR #5)
- [x] MediScribe Live added (2026-09-22, branch `feat/mediscribe`, uncommitted): new entry in `src/data/projects.ts` (3rd in list, `featured: true`), case study `src/pages/projects/mediscribe-live.astro`, pink tone. New optional `hackathon` field (event, eventUrl, submissionUrl, dates, team, result) on ProjectItem; set for MediScribe and LedgerBuddy AI. `/projects` has a "Hackathons" filter chip (uses `data-hackathon`) and a hackathon line + "Submission" button on cards. Homepage tiles now Hermes, NextVector, MediScribe, LedgerBuddy (Equa `featured: false`, user choice). LedgerBuddy AI tone pink → navy. llms.txt + chat.ts updated. Verified: `astro check` 0 errors, build OK, filter shows 2 cards, 375px no overflow, no console errors.
- [x] Committed `925b2aa`, pushed `feat/mediscribe`, opened PR #6 (2026-09-22)
- [x] PR #7 merged to `main` (2026-10-02, merge commit `6c70e66`): Innworld RPG project, case study, Games filter and homepage swap are live.
- [ ] Merge PR #8 (`feat/innworld-itch`) — the itch.io link. It missed PR #7 by minutes, so it is a separate PR: https://github.com/Daddy-Ousen/rhasanPro/pull/8
- [x] PR #6 merged to `main` (2026-09-22). MediScribe is live.
- [x] Innworld RPG added (2026-10-02, branch `feat/innworld-rpg` from `origin/main` at `353148e`): new `Games` category on `ProjectItem`, new entry `innworld-rpg` in `src/data/projects.ts` (4th, after MediScribe, `featured: false`), gold tone in `src/data/tones.ts`, case study `src/pages/projects/innworld-rpg.astro` (with a Books 1-6 canon table), "Games" filter chip + meta/intro copy on `/projects`, `public/llms.txt` + `src/pages/api/chat.ts` facts and fallback. Verified: `astro check` 0 errors, build OK, page in sitemap, Games filter shows 1 card, 375px no overflow, dark mode table readable, no console errors.
- [x] itch.io link added (2026-10-02): https://rhasasn229.itch.io/innworld-rpg (user supplied, verified 200 and the page title is "Innworld-RPG by rhasasn229"). Added as `storeLinks` on the project, a gold "Get it on itch.io" hero button, an "Also on" spec row, and in llms.txt + chat.ts. New optional `liveLabel` field on `ProjectItem` so the browser build reads "Play in browser" instead of the default "Website" that `storeLinks` would have forced.
- [x] Homepage tiles now Hermes (spotlight), NextVector, Innworld RPG, LedgerBuddy. MediScribe `featured: false` (user choice 2026-10-02), still on /projects. Verified: row reads navy/gold/teal, 375px no overflow, no console errors.
- [x] After 2026-09-30 judging: update MediScribe `hackathon.result` in `src/data/projects.ts` (updated to "Certificate of Completion", added certificate URL and new credential card) (2026-10-27, branch `feat/assemblyai-certificate`)
- [ ] Later (4+ hackathons): consider a `/hackathons` timeline page built from the `hackathon` field
- [ ] Decide: fix "Groq" → "Fireworks AI" in `src/data/skills.ts` tag and `public/llms.txt` (code uses Fireworks)
- [ ] Optional: remove unused `gsap` dependency
- [ ] Open PR and merge to `main` (not done — user did not ask; main still has old design, so live site is unchanged)
- [ ] Optional: delete `src/pages/preview-dark.astro` / `preview-light.astro` (old experiments, not in sitemap)
- [ ] Optional: remove unused imports warning in `src/pages/api/chat.ts` (pre-existing)

## Active blockers
- SEO (2026-10-07): Google does not index pages. Vercel redirects `https://rhasan.online/*` (308) to `https://www.rhasan.online/*`, but canonical, sitemap and robots all say `https://rhasan.online`. Fix is in the Vercel dashboard: Project > Settings > Domains > make `rhasan.online` the primary and set `www.rhasan.online` to redirect to it. No code change. Then re-submit sitemap in Search Console and click Validate Fix.
- None. PR #7 is open and CI is green; waiting for the user to merge.

## Decisions
- Palette tokens in `src/styles/global.css`: paper/card/sunk/ink/muted/line + teal #0E7F80, pink #D42D65, gold #F2B31B, navy #1D2B4F. Dark theme via `html.dark` class.
- Fonts: Bricolage Grotesque (display), Hanken Grotesk (body), Silkscreen (pixel labels), IBM Plex Mono (terminal/tags).
- Theme: saved choice wins, else follows OS setting. Default is light.
- Removed: glow orbs, cursor glow, noise, grid mesh, double-bezel cards, 3D tilt cards, count-up counters, GSAP timeline.
- Project tile colours + short blurbs live in `src/data/tones.ts`; long copy stays in `src/data/projects.ts` (unchanged).
- og-image.png rendered from an HTML template with real Google Fonts via headless Playwright (template not in repo).
- Hackathon projects live on /projects with a Hackathons filter, not a separate page (user choice 2026-09-22).
- Games get their own `category` value and filter chip, not a reuse of an existing category (2026-10-02).
- Innworld RPG copy uses only numbers from its own repo (898 events, 261 characters, 103 places, 38 maps, 147 GUT scripts, 102 Python tests), verified by counting the JSON. Non-commercial fan-work status is stated on the page.
- Not committed on purpose: `progress.md`, `handoff.md`, `.claude/launch.json` (local notes / dev config).
