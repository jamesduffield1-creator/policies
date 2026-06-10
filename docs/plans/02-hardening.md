# Plan 02 — Security & Robustness Hardening (P2)

Context: static site, no server, admin gate is a SHA-256 password hash in `data.js` checked client-side. Threat model is modest (shared church computers, imported JSON files of unknown provenance, non-technical editors making mistakes) — not nation-states. Aim for "can't be broken by accident", not enterprise security theatre.

## 1. Escape user-controlled strings rendered via innerHTML

`esc()` exists (~line 1328) and is used in the editor, but **not** in:

- `viewPolicy()` (~line 928): `${p.title}`, `${p.tagline}`, `${s.heading}`, `${s.body}`, meta values — custom policies and imported JSON flow here unescaped.
- `renderLibrary()` card markup (~line 891): `${p.title}`, `${p.tagline}`.
- `renderDashboard()` recent-policy list and category cards.
- `renderCompliance()` (~line 1101): `${p.title}`, `${p.owner}`.
- `renderPeople()` (~line 1137): names, emails, roles from config.
- `deletePolicy()` (~line 1095): interpolates `p.title` into the modal body.
- `renderEmergingTopics()` / suggestion labels — currently from trusted `suggestions.js`, but cheap to escape anyway.

A custom policy titled `<img src=x onerror=alert(1)>` executes today. Apply `esc()` at every interpolation of policy/config data into HTML. Watch for attribute contexts (`onclick="viewPolicy('${p.id}')"`) — ids are app-generated (`p1`…, `custom_<timestamp>`) so they're safe, but don't let user text into attributes.

**Verify:** Create a custom policy with `<script>`, `"`, `'`, `&` in title/tagline/sections; browse every page; nothing executes or breaks layout.

## 2. Validate imports beyond "is an array"

`importData()` (~line 1191) checks `data.policies` is an array and `data.config` is an object, then swallows both whole. Tighten:

- Filter imported policies to objects with string `id` and string `title`; drop the rest with a count in the success modal ("loaded 40, skipped 2 invalid").
- Only persist custom ones anyway (`save()` already filters) — but note the in-memory session uses the imported built-ins until reload. Simpler and more honest: **import only `p.custom` policies** and merge with fresh built-ins from `window.STF_POLICIES`, exactly like `init()` does. This also fixes importing a stale export silently downgrading built-in content for the session.
- Deep-merge `data.config` over `window.STF_CONFIG` defaults rather than replacing, so missing keys can't crash Settings (pairs with Plan 01 Bug 4).

**Verify:** Import an old export, a hand-corrupted file, and `{}`. No crashes, meaningful error messages, built-ins stay current.

## 3. Policy number collisions

`openNewEditor()` (~line 968) suggests `policies.length+1` — after a delete, numbers duplicate. Use `max(existing numeric numbers)+1` instead. Numbers are display strings ("01"), so parse with `parseInt` and ignore NaN.

## 4. Review-date input is freetext feeding a strict parser

`parseReviewDate()` (~line 745) only accepts "Month YYYY" (full English month name, capitalised). The editor's review field is freetext — "Apr 2027", "04/2027", or a typo silently drops the policy out of compliance tracking with no warning.

Fix: replace the freetext input with a `<select>` of months + a year `<input type="number">`, composing the stored string. Keep the stored format identical ("April 2027") so `data.js` needs no changes. On `openEditEditor`, parse the existing value to preselect; if unparseable, default to next April and show the original string as a hint.

**Verify:** Compliance tracker counts update correctly for a policy saved via the new picker; existing built-ins unaffected.

## 5. Honest admin-gate note (documentation only, no code)

Client-side password hashing gates the *UI*, not the data — anyone can read `data.js` or edit localStorage. That's acceptable for this app (policies are public documents anyway; the gate prevents accidental edits, not attacks). Add one sentence to the README saying exactly that, so a future maintainer doesn't mistake it for real auth. Do not build login infrastructure.
