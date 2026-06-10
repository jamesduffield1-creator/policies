# Plan 05 — Content & Documentation (P3)

## 1. Rewrite README.md — it is materially wrong

Current `README.md` predates most of the app. Specific falsehoods:

- Says **35 policies** — there are **42** (p1–p42 in `data.js`).
- Says the admin password is stored as plaintext `adminPasswordHash: "sfm2024admin"` and "change it to your preferred password" — the code (`submitAdminLogin`, index.html ~line 637) compares a **SHA-256 hex hash** via `crypto.subtle`. Following the README's instruction would lock admins out. Document the real procedure: compute the hash (one-liner in browser console: `crypto.subtle.digest('SHA-256', new TextEncoder().encode('newpassword')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))`) and paste the result into `data.js`.
- Suggests repo name `sfm-policy-hub` — actual repo is `policies`, live at https://jamesduffield1-creator.github.io/policies/.
- File table omits `suggestions.js` and `equipment-issue-form.html`.
- No mention of the storage architecture (built-ins from `data.js`, customs in `sfm_custom_policies`) — this is the single most important thing a future maintainer must know. Lift the explanation from the comment block in `init()` (~line 667).
- Add the honest security note from Plan 02 §5 (UI gate, not real auth).
- Keep the deploy instructions and the annual-review checklist — those are good.

## 2. Flag the overdue policy to the user — do not silently fix

**p37 Church Hiring Policy** has `reviewDate: 'July 2025'` — overdue for nearly a year. This is a *content* decision (the PCC must re-review the policy), not a data bug. The compliance tracker is correctly flagging it. **Tell James; do not change the date.** Only update `data.js` if he confirms a new review date.

## 3. Candidate new policies — ask, don't assume

Cross-references inside existing policy texts mention documents that may warrant their own built-ins. Before drafting anything, grep `data.js` for cross-references (search for "Policy" inside section bodies) and present James a short list of referenced-but-missing documents. Known candidates from the previous session: a standalone DBS/Recruitment procedure and an Induction/Training policy. Note: Data Protection & GDPR (p8) and Lone Working (p3) **already exist** — an older session note claiming they're missing is stale.

The editor's Emerging Topics panel (AI usage, remote working, volunteer on/offboarding, environmental action) also remain available for James to draft himself — that's the intended workflow, not something to pre-empt.

## 4. Equipment Issue Form link hardcodes p36

`showPage()` (~line 733): `const isITPolicy=viewedPolicy?.id==='p36'`. Fine today, brittle tomorrow. Generalise: add an optional `relatedForm: {label:'📋 Issue Form', href:'equipment-issue-form.html'}` field on the policy object in `data.js` (set it on p36), and render the button whenever the field exists. Removes the special case and lets future policies attach printable forms without touching `index.html`.

## 5. Housekeeping

- `.claude/` sits untracked in the repo working tree (contains `launch.json` for local preview). Add a `.gitignore` with `.claude/` — local tooling config, not app code.
- `equipment-issue-form.html` back-link and fonts: confirm it still matches the new Editorial Anglican palette (it was created under the old navy design). If it uses the old blues, restyle its header/buttons to forest green + parchment so printed and on-screen materials match. Keep the form itself black-on-white for printing.
