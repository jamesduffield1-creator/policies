# STF Policy Hub — Development Plans

**Maintained by:** Claude review sessions (Fable) writing plans; Claude execution sessions (Opus) implementing them.
**Last review:** 12 June 2026, against commit `f8816b0`.

## Context you need before starting

- This is a **pure vanilla JS/HTML/CSS static site** — zero dependencies, zero build tools. Do not introduce frameworks, bundlers, or npm packages. This is a hard constraint from the owner (James Duffield, Operations Manager, St Francis Mackworth).
- Deployed via GitHub Pages: https://jamesduffield1-creator.github.io/policies/
- Repo: https://github.com/jamesduffield1-creator/policies (branch `main`, push = deploy)
- Files: `index.html` (entire app), `data.js` (42 built-in policies + church config), `suggestions.js` (editor content bank), `equipment-issue-form.html` (printable form)
- Architecture rule: **built-in policies always load fresh from `data.js`**; only custom policies persist to localStorage (`sfm_custom_policies`). Config persists under `sfm_config`. Never write built-ins to localStorage. (Plan 06 extends this rule properly to config.)
- Design system: "Editorial / Refined Anglican" — forest green `#1A3D2B` sidebar, warm parchment `#F5F2EB`, Playfair Display + DM Sans, gold `#C8952E` accents, muted badges. Keep it restrained.
- Working style James expects: plan before code, surgical patches, verify in the browser, commit messages explain the why, check in between plans.

## Status

| # | Plan | Status |
|---|------|--------|
| 01 | Critical bug fixes | ✅ Done (`c45fd6e`…`1501e83`; Bug 3 was a false positive — no `<\div>` existed) |
| 02 | Security & robustness hardening | ✅ Done (`6c4dea5`, `1a0849f`, `7bd2b88`; §5 folded into the Plan 05 README) |
| 03 | Deep linking & navigation | ✅ Done (`5b3b337`) |
| 04 | Mobile & accessibility | ✅ Done (`acef1bb`, `d29069f`; Lighthouse run + native-button conversion deliberately deferred) |
| 05 | Content & documentation | ✅ Done (`f8816b0`; p37 review-date decision still with James) |
| 06 | Post-implementation audit fixes | ✅ Done (`b0eb0dc`, `7a38769`, `0237f09`). All 7 items verified against live code first — none were false positives this round |
| 07 | DBS register & expiry tracking | ❌ Cancelled — DBS tracking handled via thirtyone:eight; feature is superfluous |
| 08 | Annual review support | Code items done (`a804025`, `09a5128`): lastReviewed/reviewedBy metadata fields, admin review pack generator. Items 3 & 4 (content currency review, emerging topics refresh) are recurring Claude-assisted work. Two date decisions still with James: p37 overdue, p42 due now |

Additional fixes landed outside the plans during execution: emerging-topics onclick quote collision (`c51c611`), sidebar New Policy init skip (`8fa4c69`), template body pre-population + 💡 heading-normalisation (`e74a53f`), form-input width collapse (`a6880a4`).

## Verification

No test suite. Verify in the browser (`npx serve .` or the live site). Key flows: read-mode browsing, deep links (`?policy=p36`), back/forward, admin login, editor save/edit/delete/save-as-copy, Apply Template + Emerging Topics + 💡 suggestions, export/import JSON, mobile drawer at 375px, keyboard-only navigation, print dialog.
