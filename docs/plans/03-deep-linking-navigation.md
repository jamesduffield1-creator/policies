# Plan 03 — Deep Linking & Navigation (P2)

The biggest UX gap: every visit lands on the dashboard, the browser back button does nothing useful, and nobody can share a link to a specific policy. James wants to email links like "here's the IT policy" to volunteers.

## 1. Query-param deep links

Support `?policy=<id>` and `?page=<name>`:

- In `init()` (after `policies` is assembled), read `new URLSearchParams(location.search)`. If `policy` is present and the id exists, call `viewPolicy(id)`; else if `page` is a valid non-admin page (`dashboard|library|compliance`), `showPage(page)`; else default dashboard.
- Admin pages (`editor|settings|people`) must not be deep-linkable — `showPage()` already redirects non-admins; keep that.
- Unknown policy id: show the library with a small dismissible alert "That policy link wasn't found — it may have been renamed."

## 2. Keep the URL in sync + browser back support

- In `viewPolicy(id)`: `history.pushState({policy:id},'',`?policy=${id}`)`.
- In `showPage(p)` (when not 'view'): `history.pushState({page:p},'', p==='dashboard' ? location.pathname : `?page=${p}`)` — but **only** for user navigation, not the initial deep-link restore (pass a flag or use replaceState on boot to avoid a double history entry).
- `window.onpopstate`: re-dispatch from `event.state` (or re-parse `location.search` when state is null) so back/forward walk the visit history without reloading.
- Careful: `showPage` is called internally from `init`, `submitAdminLogin`, `adminLogout`, `savePolicy` → `viewPolicy`. Audit each call site; only genuine navigation should push history. Simplest: add an optional `push=true` param defaulting true, and pass `false` from `init()` and `onpopstate`.

**Verify:** Open `…/policies/?policy=p36` cold → IT policy renders with the Issue Form button. Click through 3 policies, press back 3 times → returns through them, then to library/dashboard. Refresh mid-policy → same policy. Share-link copy works (see 3).

## 3. "Copy link" button on policy view

In `showPage('view')`'s topbar actions (~line 731), add a `🔗 Copy link` ghost button: `navigator.clipboard.writeText(location.origin+location.pathname+'?policy='+currentViewId)` with a brief "Copied ✓" state on the button (setTimeout revert, no modal). Clipboard API needs HTTPS — GitHub Pages is HTTPS, local file:// fallback can use a prompt().

Note: **custom policies' ids only exist in that browser's localStorage** — a copied link to `custom_…` won't work for anyone else. Show a small warning when copying a link to a custom policy ("this link only works on devices that have this custom policy").

## 4. Search the policy body, not just titles

`renderLibrary()` (~line 878) matches title/tagline/category only. Add section text:

```js
const mQ=!q2||p.title.toLowerCase().includes(q2)
  ||p.tagline?.toLowerCase().includes(q2)
  ||p.category.toLowerCase().includes(q2)
  ||(p.sections||[]).some(s=>(s.heading+' '+s.body).toLowerCase().includes(q2));
```

42 policies × ~10 sections is trivial to scan per keystroke; no indexing needed. When a card matches only via body text, append a one-line snippet under the tagline showing the first match in context (~80 chars, query term wrapped in `<mark>`), escaped via `esc()` *before* inserting the `<mark>` tags.

**Verify:** Search a phrase that appears only inside a section body (e.g. "Thirtyone:eight") → relevant cards appear with snippet; search remains responsive while typing.
