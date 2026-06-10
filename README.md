# STF Policy Hub

Policy management system for St Francis Mackworth, Derby.

## What's included

- **35 policies** covering all major CofE/charity compliance areas
- Role-based access (Admin vs Reader)
- Policy viewer with print support
- Policy editor — create and edit custom policies
- People & Roles dashboard
- DBS register tracker
- Compliance tracker (PCC adoption status)
- Export/import for data backup

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app — one file |
| `data.js` | All 35 policy texts + church config |

## Deploying to GitHub Pages (free)

1. **Create a GitHub account** at github.com if you don't have one
2. **Create a new repository** — call it `sfm-policy-hub` (or any name)
3. **Upload both files**: drag `index.html` and `data.js` into the repository
4. **Enable GitHub Pages**: go to Settings → Pages → Source → Deploy from branch → main → / (root) → Save
5. **Your app URL** will be: `https://[your-username].github.io/sfm-policy-hub`

Share the URL with staff. For admin access, use the password set in `data.js`.

## Changing the admin password

Open `data.js` and find:
```
adminPasswordHash: "sfm2024admin",
```
Change `sfm2024admin` to your preferred password. Re-upload the file to GitHub.

## Updating church details

Open `data.js` and edit the `people` section at the top — update names, emails, and roles.

## Data storage

- Policy edits and settings made in the browser are saved locally (localStorage)
- To sync across devices: use the **Export JSON** button in Settings, then **Import JSON** on the other device
- The `data.js` file is the master copy — it always loads if no local data exists

## Adding a new policy

1. Sign in as Admin
2. Click **New Policy** in the Policy Library
3. Fill in the details and sections
4. Click **Save Policy**
5. To make it permanent across all devices: export the JSON and re-import

## Annual review

Each April, review all policies for:
- Changes in legislation or CofE guidance
- Changes in key personnel (update names in Settings)
- New risks or activities the church has taken on
- PCC adoption of any new policies

---

*Built for St Francis Mackworth · Derby Diocese · HTB Network*
