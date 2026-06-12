# Plan 07 — DBS Register & Expiry Tracking (P3, feature)

## Why

James is the Operations Manager; DBS compliance is a real operational duty. Today the People page renders a static `✓ DBS Enhanced — <date>` chip from `config.people.staff[]` in `data.js`, with no concept of expiry, renewal, or who's missing a check. CofE guidance treats DBS checks as renewable every 3 years. The dashboard compliance panel tracks policy reviews but says nothing about DBS.

Confirm scope with James before building — this plan is the recommended shape, not a mandate.

## Data model

Extend person entries in `config.people` (Settings-editable, persisted in `sfm_config` like all config):

```js
{ name:'…', role:'…', dbs:{ level:'Enhanced'|'Enhanced+Barred'|'Basic', issued:'May 2024', renewalDue:'May 2027' } }
```

- Keep the existing flat `dbs:true, dbsDate, dbsLevel` fields working (read both shapes; write the new one).
- Reuse `parseReviewDate()` for "Month YYYY" parsing — same format everywhere.
- Roles needing DBS vs not: add a boolean `dbsRequired` per person rather than hard-coding role lists.

## UI

1. **People page**: chip becomes three-state — green (valid, >6 months left), amber (renewal due within 6 months), red (overdue / required-but-missing). Admins get an "Edit" affordance per card that opens a small modal (name, email, role, dbsRequired, level, issued, renewalDue) writing back to config. Non-admin view unchanged visually beyond chip colours.
2. **Dashboard compliance panel**: `buildComplianceAlerts()` gains DBS lines — "2 DBS checks due for renewal within 6 months", red line for overdue/missing. Same dot/text/action shape as existing alerts; action navigates to People.
3. **Compliance page**: a "DBS Register" card listing everyone with `dbsRequired`, status chip, and dates — this is the printable audit artefact for the PCC / diocese. Make sure it prints cleanly (the print stylesheet currently targets the policy view; check `.page` visibility rules when printing from the compliance page).

## Constraints & cautions

- **Names + DBS status are personal data.** Keep them in config/localStorage as now (they already are), but do NOT put real DBS data in `data.js` in the public repo beyond what James has already chosen to include. Raise this explicitly with James: the repo is public; consider whether staff DBS details belong in source at all, or only in each device's localStorage via Settings.
- Stay within the design system: status chips use the existing green/amber/red tokens, no new colour vocabulary.
- All new strings rendered via `esc()` — person names are user input.
- No new pages; extend the three existing surfaces above.

## Verify

Set up one person of each state (valid / due-soon / overdue / required-missing) via Settings; confirm chips, dashboard lines, and the register card all agree; reload and confirm persistence; export → import JSON and confirm the DBS fields round-trip (deepMerge path).
