---
name: ui-polish
description: Give the todo app a clean, readable look from one of three class themes, chosen by the learner with a reason. Use when the learner types $ui-polish or asks to make the app look better.
---

# ui-polish

The learner chooses; you apply the rules. You may change `style.css`, class names in `index.html` and `app.js`, and the wording of the empty-state lines and labels (in `index.html` or `app.js`). Nothing else: no new features, no changes to how the app works. Every feature must keep working.

## Steps
1. If the learner has not named a theme AND a reason linked to their user (Who / Where in SPEC.md), ask for both.
2. Show a plan in at most 3 bullets and wait for "yes". If the learner answers "Yes. One change: ___", apply the plan with that change if it stays inside what this skill may change; if it does not, say so in one line.
3. Apply the theme and every rule below. Do not save (commit). End with "Check in Chrome: …" and "Looks right? Type: Save this version." (AGENTS.md rule 4).

## Themes (exact values)
| Theme | Background | Surface | Text | Muted | Accent | Accent text | Done |
|---|---|---|---|---|---|---|---|
| Calm | #F6F8FB | #FFFFFF | #1B2430 | #5B6675 | #2F6FEB | #FFFFFF | #8A94A3 |
| Fresh | #F4FAF6 | #FFFFFF | #15281D | #4F6357 | #1F8A4C | #FFFFFF | #889A8F |
| Warm | #FFF8F1 | #FFFFFF | #2A1E14 | #6B5A4B | #C2551B | #FFFFFF | #A39283 |
Dark mode (all themes, `prefers-color-scheme: dark`): background #12151A, surface #1C2129, text #EEF1F5, muted #A3ADBA, accent = the theme accent lightened about 15 %, done #7D8794.

## Rules
- Font: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Body 17px, line height 1.5; title 28px bold; small text never under 14px.
- Spacing on an 8px scale (8, 16, 24, 32). Content max width 560px, centred, 16px side padding.
- Corners 12px on cards and inputs. One accent colour only; no gradients, no shadows heavier than `0 1px 3px rgba(0,0,0,.08)`.
- Every button and checkbox is at least 44 × 44px to tap. The add field is 48px tall.
- Text contrast at least 4.5:1 (WCAG AA). Done tasks: line-through and the Done colour, still readable.
- Visible focus ring: `outline: 3px solid <accent>; outline-offset: 2px`.
- Empty state: a friendly line written for the user in SPEC.md (e.g. "Nothing to buy yet. Add the first item above.").
- The app title says who it is for: "Todo for <Who>".
- Works at 360px wide with no sideways scrolling.
