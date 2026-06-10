# Plan 04 — Mobile & Accessibility (P3)

Church volunteers will open shared links (Plan 03) on phones. Current responsive support is one `@media(max-width:900px)` block (~line 318) that shrinks the sidebar to 200px — on a 375px phone the content gets ~175px. Effectively broken on mobile.

## 1. Mobile layout (below 768px)

- Sidebar becomes an off-canvas drawer: hidden by default (`transform:translateX(-100%)`), toggled by a hamburger button added to the left of the topbar title. Overlay scrim behind it; tap scrim or a nav item to close.
- `.main{margin-left:0}` at this breakpoint.
- `.stats-row` → single column (currently 2-col at 900px; fine for tablet, stack on phone).
- `.policy-grid` minmax is 320px — acceptable, but reduce page padding `32px → 16px`.
- `.filter-bar` pills: allow horizontal scroll (`overflow-x:auto;flex-wrap:nowrap`) on phones instead of wrapping into 4 rows.
- `.meta-grid` in policy view → single column.
- Modal: `max-height:90vh` exists; add `border-radius:12px` and full-width at small sizes.
- Keep the Editorial Anglican aesthetic — the drawer is the same forest green `#1A3D2B` panel, animated with the existing transition vocabulary (transform .25s ease).

**Verify:** DevTools responsive mode at 375×812 and 768×1024: every page reachable, nothing horizontally scrolls except the filter bar, drawer opens/closes, policy view readable.

## 2. Keyboard & screen-reader basics

Current state: navigation and cards are `<div onclick>` — invisible to keyboards and screen readers.

- Nav items, policy cards, compliance rows, category cards: add `role="button"` (or convert to `<button>`/`<a>` where cheap), `tabindex="0"`, and an Enter/Space keydown handler. A small shared helper `clickable(el)` or a delegated keydown listener on `document` for `[role=button]` keeps this surgical.
- Modal: on open, move focus to the first focusable element; on close, restore focus to the opener; trap Tab inside while open; close on Escape. Add `role="dialog"` `aria-modal="true"` `aria-labelledby="modal-title"`.
- Icon-only buttons (💡, ↑, ↓, ✕ in the section editor; hamburger) need `aria-label`s — some have `title` already, add labels.
- Add a skip link ("Skip to content") before the sidebar for keyboard users.
- `aria-live="polite"` on the library grid container so result changes are announced while searching.

**Verify:** Unplug the mouse: Tab through dashboard → library → open a policy → back. Open/close the modal with keyboard only. Run Lighthouse accessibility audit — target ≥ 90.

## 3. Contrast check on the parchment palette

The warm palette (`--muted:#8C887E` on `--surface:#F5F2EB`, and on `--white:#FEFEFC`) is borderline for small text. Check these pairs against WCAG AA (4.5:1 for body text, 3:1 for large/bold):

- `--muted` body-size text (stat labels, taglines' meta, `policy-num`) — likely fails; darken `--muted` toward `#7A766C` *or* bump those uses to `--slate`.
- `--faint` is decorative only — confirm it's never used for text that conveys information (the policy-card arrow is decorative, fine).
- Sidebar `rgba(255,255,255,.35)` role label on `#1A3D2B` — fails AA; raise to ~.55.
- Gold `#C8952E` on forest green (active nav border) is decorative; the active item text is white — fine.

Adjust tokens, don't patch individual rules, so the system stays coherent. Eyeball afterwards that the palette still reads "aged parchment", not grey slush.

## 4. Reduced motion

Wrap the fadeUp/fadeIn animations and card hover transforms in `@media (prefers-reduced-motion: no-preference)`, or add a `@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}` override. One-liner, real benefit.
