# Plan 01 — Critical Bug Fixes (P1)

All line numbers refer to `index.html` as of commit `1617f62`. Re-locate by searching for the quoted code if lines have drifted.

## Bug 1: Modal action buttons lose closures — Apply Template is likely broken

**Where:** `openModal()` (~line 1215):

```js
actions.map(a=>`<button class="btn ${a.cls}" onclick="(${a.fn.toString()})()">${a.label}</button>`)
```

**Problem:** `fn.toString()` serialises the function source and re-evaluates it in global scope via the onclick attribute. Any closure variables are lost:

- `applyTemplate()` (~line 1228) passes `fn:()=>{...renderEditorSections(template.sections...)}` — `template` is a local closure variable → **ReferenceError when the user clicks "Apply Template"**.
- `applyEmergingTemplate(key)` (~line 1243) — same problem with `topic`.
- `downloadPDF` and `deletePolicy` happen to survive because they only reference globals.

Additionally, any double-quote inside the serialised source would terminate the HTML attribute early.

**Fix:** Stop serialising functions. Store the action callbacks in a module-level array and reference them by index:

```js
let _modalActions=[];
function openModal(title,body,actions=[]){
  _modalActions=actions.map(a=>a.fn);
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=`<p style="font-size:14px;color:var(--slate)">${body}</p>`;
  document.getElementById('modal-foot').innerHTML=
    `<button class="btn btn-secondary" onclick="closeModal()">Cancel</button>`+
    actions.map((a,i)=>`<button class="btn ${a.cls}" onclick="_modalActions[${i}]()">${a.label}</button>`).join('');
  document.getElementById('modal').classList.add('open');
}
```

This mirrors the `_suggestionPool` pattern already used in `openSectionSuggestions()` for exactly this reason.

**Verify:** In the editor, pick a category with a template (e.g. Safeguarding), click "Apply Template", confirm the confirmation modal's primary button actually replaces the sections. Repeat for an Emerging Topics template. Check the console for errors.

## Bug 2: Edits to built-in policies are silently lost on refresh

**Where:** `savePolicy()` (~line 1079):

```js
if(editingId){
  const idx=policies.findIndex(p=>p.id===editingId);
  if(idx>=0){policies[idx]={...policies[idx],...policy,custom:policies[idx].custom}}
}
```

**Problem:** When an admin edits a built-in policy (p1–p42), `custom` stays falsy, so `save()` — which only persists `policies.filter(p=>p.custom)` — never writes it. The edit looks saved, then vanishes on reload. Silent data loss.

**Fix (choose the simple option, consistent with the architecture):** Built-ins are source-controlled in `data.js`, so in-browser edits to them *shouldn't* persist. Make that honest in the UI:

1. In `openEditEditor()`, when `!p.custom`, show a prominent alert at the top of the editor: built-in policies are managed in `data.js`; changes made here are temporary previews and will not survive a page reload. Suggest "Save as copy" instead.
2. Add a **"Save as copy"** button for built-ins that saves under a new `custom_` id with `custom:true`, leaving the built-in untouched.
3. Keep direct Save available for built-ins (it still updates the live session, which is useful for drafting wording to copy into `data.js`), but the alert must make the behaviour clear.

Do **not** start persisting built-in overrides to localStorage — that recreates the stale-data bug this architecture was introduced to fix (see comment block in `init()`, ~line 667).

**Verify:** Edit a built-in policy, save, reload — confirm the alert was shown and behaviour matches it. "Save as copy" produces a new custom policy that survives reload.

## Bug 3: Malformed closing tag in library empty state

**Where:** `renderLibrary()` (~line 890): the no-results block ends with `<\div>` instead of `</div>`.

**Fix:** One-character change. **Verify:** Search the library for gibberish (e.g. "zzzz") and check the empty state renders cleanly with valid DOM (inspect element).

## Bug 4: `saveSettings()` throws if imported config lacks expected people

**Where:** `saveSettings()` (~line 1164): `config.people.vicar.name=...` etc. assume `config.people`, `.vicar`, `.opsManager`, `.pso` all exist. A JSON import (or older export) with a different shape makes the Settings page throw on save.

**Fix:** Guard each path before assignment, e.g.:

```js
config.people=config.people||{};
config.people.vicar=config.people.vicar||{};
```

(or a small `ensure(obj,path)` helper). Same defensive treatment in `renderSettings()` is already handled by the `v()` helper and optional chaining — only `saveSettings()` is exposed.

**Verify:** In the console run `config.people={}` then save Settings — should not throw, should save names.

## Commit guidance

Bugs 1+3 can share a commit ("fix modal action closures and library empty-state markup"). Bugs 2 and 4 get their own commits. Push when done — GitHub Pages deploys from `main`.
