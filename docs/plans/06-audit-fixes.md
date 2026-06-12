# Plan 06 — Post-Implementation Audit Fixes (P2)

Findings from a Fable review (June 2026) of the Plan 01–05 implementation (commits `c45fd6e`…`f8816b0`). Line numbers per commit `f8816b0`.

## 1. Stale-config bug in `init()` — same disease the policy fix cured, P1 of this plan

**Where:** `init()` (~line 747):

```js
config=storedCfg?JSON.parse(storedCfg):{...window.STF_CONFIG};
```

**Problem:** Once a browser has saved Settings, its stored config **wholesale replaces** `window.STF_CONFIG` forever. Any new config key later added to `data.js` (a new staff member, a new church field, a changed `adminPasswordHash`!) is invisible to that browser. This is exactly the stale-localStorage architecture bug that was fixed for policies — config still has it. Note the password consequence: changing the admin password in `data.js` does not take effect for any browser that has ever saved Settings, because the stored config carries the old hash.

**Fix:** `deepMerge` already exists (added in the import work, ~line 1481). Use it:

```js
config=storedCfg?deepMerge({...window.STF_CONFIG},JSON.parse(storedCfg)):{...window.STF_CONFIG};
```

Wrap the `JSON.parse` in try/catch (corrupt stored config currently throws and bricks boot — fall back to defaults).

Decide the precedence carefully: stored values win for keys the user edits in Settings (names etc.), but `adminPasswordHash` should arguably **always** come from `data.js` so a pushed password change is authoritative. Recommend: after the merge, force `config.adminPasswordHash=window.STF_CONFIG.adminPasswordHash`.

Also align the boot block (~line 1690, `_bootCfg` shallow merge) — it merges differently from `init()`, and `init()` runs immediately after, so the boot block's separate load is now redundant; collapse to one code path if simple.

**Verify:** Save Settings, then add a fake new key to `STF_CONFIG` in data.js and confirm it appears in `config` after reload. Corrupt `sfm_config` in devtools (`localStorage.setItem('sfm_config','{oops')`) and confirm the app still boots.

## 2. `deepMerge` prototype-pollution guard

`JSON.parse('{"__proto__":{...}}')` produces an own `__proto__` key; `out[k]=sv` with that key reassigns the object's prototype instead of setting a data property. An imported JSON file can therefore give `config` a poisoned prototype (weird lookups, hard-to-debug behaviour). One-line guard in the `for` loop:

```js
if(k==='__proto__'||k==='constructor'||k==='prototype')continue;
```

Low severity (worst case: confused config on the importing device), but the fix is free.

## 3. Duplicate history entries

- `viewPolicy()` (~line 1118) pushes unconditionally — re-clicking the policy you're already viewing (easy from compliance lists) stacks identical entries, making Back appear to do nothing.
- `showPage()` similarly pushes when nav-clicking the page you're already on.

**Fix:** in both, skip the push when the URL would not change:

```js
const url=`${location.pathname}?policy=${encodeURIComponent(id)}`;
if(push&&location.pathname+location.search!==url)history.pushState({policy:id},'',url);
```

(equivalent guard in `showPage`). **Verify:** click the same policy twice, press Back once → leaves the policy. Click "Dashboard" twice, Back → leaves dashboard.

## 4. Escape should close the mobile drawer

The global keydown handler (~line 1570) closes the modal on Escape but ignores the drawer. Add: if the sidebar has `.open`, Escape closes it (before the modal check, or after — they're never open simultaneously in practice). Return focus to the hamburger (`#menu-toggle`).

## 5. Missing-policy alert is wiped by the next render

Known limitation noted at implementation: `showMissingPolicyAlert` injects into `#lib-grid`, which `renderLibrary()` rebuilds on every keystroke. Move the banner **outside** the grid — insert before `#lib-grid` (its parent flows fine), or add a dedicated `#lib-alert` container in the library page markup that `renderLibrary` doesn't touch.

## 6. Modals opened outside `openModal()` skip focus management

`openAdminLogin()` (~line 701) and `openSectionSuggestions()` build the modal DOM directly, so `_modalReturnFocus` is never set (focus restore on close goes to a stale element) and `_modalActions` from a previous modal lingers. Extract the shared open/close mechanics (set `_modalReturnFocus`, clear `_modalActions`, add `.open`, focus first focusable) into a tiny `openModalShell()` used by all three entry points.

## 7. Cosmetic / trivial (bundle into any of the above commits)

- `applyTemplate` warning paragraph (~line 1610) declares `color` twice (`var(--amber-light)` then `var(--amber)`) — delete the first.
- `showPage` pushes `?page=editor` / `?page=settings` / `?page=people` URLs that `applyUrlState` refuses to restore (READER_PAGES only). Harmless but inconsistent — either skip pushing for admin pages or accept and document. Recommend: skip the push for admin pages (they're transient workspaces, not destinations).
- Library grid `aria-live="polite"` announces the entire grid on every keystroke — consider moving the live region to a small results-count element ("12 policies shown") above the grid instead, and announce that.

## Commit guidance

Item 1 is its own commit (it's the headline fix). Items 2+7a can ride along with their nearest neighbour. Items 3, 4, 5, 6 are small individual commits or one combined "navigation & modal polish" commit. Push when done.
