# Plan 08 — Annual Review Support (P3, part process / part code)

## Context

The README commits the church to an April annual review cycle. Two policies already need James's attention (decisions, not code — re-raise them, do not edit dates unilaterally):

- **p37 Church Hiring Policy** — review date July 2025, long overdue. Needs PCC re-review.
- **p42 Finance Policy** — review date June 2026, i.e. due **now**.

## 1. "Review pack" generator (code, small)

Add an admin-only button on the Compliance page: **"Generate review pack"**. It opens a print-friendly view (reuse the print stylesheet pattern) containing:

- Table of all policies: number, title, category, version, review date, status (overdue / due 3mo / due 12mo / current), PCC-required flag.
- The overdue and due-soon lists expanded with taglines.
- Date generated + church name in the footer.

This is what James takes to a PCC meeting. No new dependencies — it's a hidden `.page` or a temporary DOM section plus `window.print()`, exactly like `downloadPDF()` does today.

## 2. Per-policy review metadata (code, small)

Policies currently have only `reviewDate` (next due). Add optional `lastReviewed` and `reviewedBy` fields, shown in the policy view meta grid when present. When the PCC re-adopts a policy, James updates `data.js` (built-ins) or the editor (customs). The editor gets the two fields below the review-date picker. No tracking system, no workflow engine — just honest metadata.

## 3. Content currency review (Claude-assisted, repeating)

A future session task, best run each March:

1. For each category, compare policy content in `data.js` against current CofE / Charity Commission / ICO guidance (web research).
2. Produce a diff-style report: policy → clause → what changed in guidance → suggested wording.
3. James reviews; agreed changes are applied to `data.js` with version bumps and `lastReviewed` updates.

Do not auto-apply content changes — policy wording is a PCC matter. The session's deliverable is the report plus draft wording.

## 4. Emerging Topics refresh (Claude-assisted, as-needed)

Per the agreed workflow (June 2026): when James spots a new policy area worth templating, a Claude session adds it to `suggestions.js` (description, suggestedCategory, sections, snippets). Candidates to consider at next review: safeguarding implications of online ministry; cyber-incident response; reservists/military leave (if staff grows). Only add what James confirms.
