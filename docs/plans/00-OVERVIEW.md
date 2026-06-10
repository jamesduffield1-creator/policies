# STF Policy Hub — Development Plans

**Written:** 10 June 2026, by a Claude Code review session (Fable 5).
**For:** A follow-up Claude Code session (Opus) to execute. Each plan is self-contained.

## Context you need before starting

- This is a **pure vanilla JS/HTML/CSS static site** — zero dependencies, zero build tools. Do not introduce frameworks, bundlers, or npm packages. This is a hard constraint from the owner (James Duffield, Operations Manager, St Francis Mackworth).
- Deployed via GitHub Pages: https://jamesduffield1-creator.github.io/policies/
- Repo: https://github.com/jamesduffield1-creator/policies (branch `main`, push = deploy)
- Files: `index.html` (entire app, ~1340 lines), `data.js` (42 built-in policies + church config), `suggestions.js` (content bank for the editor), `equipment-issue-form.html` (standalone printable form)
- Architecture rule: **built-in policies always load fresh from `data.js`**; only custom (user-created) policies persist to localStorage under `sfm_custom_policies`. Config persists under `sfm_config`. Never write built-ins to localStorage.
- Design system: "Editorial / Refined Anglican" — forest green `#1A3D2B` sidebar, warm parchment `#F5F2EB` background, Playfair Display headings, DM Sans body, gold `#C8952E` accents, muted desaturated badges. Keep all new UI consistent with this.
- Working style James expects: plan before code, surgical patches, commit messages explain the why, push when a coherent unit of work is done.

## Plans, in priority order

| # | Plan | Priority | Est. effort |
|---|------|----------|-------------|
| 01 | Critical bug fixes | **P1 — do first** | Small |
| 02 | Security & robustness hardening | P2 | Medium |
| 03 | Deep linking & navigation | P2 | Medium |
| 04 | Mobile & accessibility | P3 | Medium |
| 05 | Content & documentation | P3 | Small |

Do Plan 01 in its own commit(s) before anything else — it contains a likely-broken headline feature. Plans 02–05 are independent of each other and can be done in any order.

## Verification

There is no test suite. Verify by opening `index.html` in a browser (a simple static server works: `npx serve .`). Key flows to manually test after any change: read-mode browsing, admin login (password check against SHA-256 hash in `data.js`), policy editor save/edit/delete, Apply Template, 💡 section suggestions, export/import JSON, print dialog.
