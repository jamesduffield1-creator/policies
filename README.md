# STF Policy Hub

Policy management site for **St Francis Mackworth**, Derby Diocese.
Live at <https://jamesduffield1-creator.github.io/policies/>.

## What it is

A read-only website for the whole church team, plus an admin mode for the Operations Manager to draft and curate policies. Forty-two policies covering safeguarding, governance, finance, HR, H&S, operations, comms, and pastoral care ship in the codebase; admins can also add custom policies that live in the browser.

Features:

- Browse / search / filter policies; share-able deep links (`?policy=p36`).
- Compliance tracker — overdue and upcoming review dates, PCC adoption status.
- People & Roles + DBS register.
- Admin-gated policy editor with category templates, an Emerging Topics panel (AI use, remote working, etc.), and a 💡 button that surfaces best-practice snippets per section.
- Save-as-PDF (browser print dialog) and a printable Equipment Issue Form attached to the IT policy.
- Export / import JSON for backups and moving custom policies between devices.

## How it's built

Pure vanilla HTML, CSS, and JavaScript. **Zero build step, zero dependencies, zero npm.** Drop the files on any static host and they work. Deployed via GitHub Pages from the `main` branch — pushing to `main` deploys.

| File | Purpose |
|------|---------|
| `index.html` | The whole app — markup, styles, and JS in one file. |
| `data.js` | The 42 built-in policies, plus church config (names, diocese, admin password hash). The source of truth for built-in content. |
| `suggestions.js` | Curated content bank used by the editor — category templates, Emerging Topics, transferable clauses. |
| `equipment-issue-form.html` | Standalone printable form linked from the IT Equipment policy. |
| `docs/plans/` | Future-work plans written for follow-up Claude sessions. |

## Storage architecture — the one rule

**Built-in policies always load fresh from `data.js`. Only custom (user-created) policies persist to `localStorage`** (key: `sfm_custom_policies`). Config persists too (`sfm_config`).

Why this matters: a previous version wrote every policy to `localStorage` on first visit and never re-read `data.js` — meaning improvements pushed to `data.js` were invisible to anyone whose browser had cached an older copy. The current architecture makes built-ins always-fresh and constrains the editor: edits to a built-in policy are session previews only and don't survive a reload. The editor surfaces a banner and a "Save as copy" button to make that honest.

To roll out a real change to a built-in policy, edit it in `data.js` and push — every visitor sees it on next load.

## Deploying

Already deployed at <https://jamesduffield1-creator.github.io/policies/>. To deploy to a different host: copy `index.html`, `data.js`, `suggestions.js`, and `equipment-issue-form.html` to any static host. No build step. To use GitHub Pages on a new repo, push the files to `main` and enable Pages under Settings → Pages → Source → `main` / root.

## Changing the admin password

The password is **never stored in plaintext.** `data.js` has an `adminPasswordHash` field containing the SHA-256 hex digest of the password. To set a new one:

1. Open the live site in a browser, open DevTools (`F12`), and paste this into the console:

   ```js
   crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-new-password'))
     .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,'0')).join('')))
   ```

2. Copy the 64-character hex string the console prints.
3. Paste it into `data.js` as the value of `adminPasswordHash`, save, and push.

The admin password gates the **UI** (the New Policy / Edit / Settings buttons) — it is not real authentication. Anyone with the URL can read `data.js` directly, and any admin can edit `localStorage` to bypass the gate. That's acceptable for this site (the policies are public documents anyway; the gate prevents accidental edits on shared church computers) but don't store anything sensitive behind it.

## Updating church details

Sign in as Admin → **Church Settings** → edit names, diocese, DBS umbrella body, etc. The changes save to `localStorage` for that browser. To make them the default for new visitors, mirror the edits into the `STF_CONFIG` block in `data.js` and push.

## Adding a new policy

1. Sign in as Admin.
2. Click **New Policy** in the sidebar (or `+ New Policy` on the Library page).
3. Choose a category. If a template exists, click **Apply Template** to seed the section headings with best-practice starter content. The Emerging Topics panel offers ready-made templates for AI use, remote working, volunteer on/offboarding, and environmental action.
4. Tap 💡 on any section for alternative snippet wording, or write your own.
5. Save Policy.

The new policy lives in your browser only. To share it with the team, **Export JSON** from Settings and **Import JSON** on the other device — *or* paste the wording into `data.js` as a new built-in (then everyone sees it on next deploy).

## Backups

The export button in Settings produces a JSON snapshot of custom policies and config. Import accepts only the `custom: true` entries (built-ins are always taken fresh from `data.js`) and deep-merges the config over current defaults — an old export can't silently downgrade built-in policy content or crash Settings.

## Annual review

Each April, review every policy for:

- Changes in legislation or Church of England guidance.
- Changes in key personnel (update in Church Settings).
- New risks or activities the church has taken on.
- PCC adoption of any new policies that require it.

The Compliance Tracker page flags policies overdue or due within 12 months — start there.

## Development notes

See `docs/plans/` for the running set of follow-up plans (bug fixes, hardening, deep linking, mobile, content). Each plan is self-contained and intended to be executed by a fresh Claude Code session.

When adding new policies to `data.js`, keep ids of the form `pN` (built-in) so they remain stable across deploys. Custom policies created in the editor use `custom_<timestamp>` ids; deep links to those work only on the device that created them.

---

*Built for St Francis Mackworth · Derby Diocese · HTB Network*
