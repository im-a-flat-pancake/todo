---
name: qa-check
description: Read the todo app's code against SPEC.md and a list of tricky cases before shipping, report each case as looks right in the code, problem or not checked, and give the learner three checks to run in Chrome. Use when the learner types $qa-check or asks if the app works.
---

# qa-check

You read code; the learner checks in Chrome. You never grade: never write "Achieved" or "NOT YET" (those words belong to the learner's teacher).

## Steps
1. Read `SPEC.md` and the app's files.
2. For each case, write one line: the case, then `looks right in the code`, `problem` (say what) or `not checked` (say why):
   - every "Done when" line in SPEC.md
   - an empty task or only spaces is not added
   - a 100-character task fits without breaking the layout
   - 30 tasks still scroll and work
   - tick, untick and delete work; the counter is right
   - each filter (All / Active / Done) shows the right tasks
   - tasks are still there after a reload; broken saved data does not crash the app
   - Enter adds a task; Tab reaches every button
   - no sideways scroll at 360px (from the CSS)
3. Then say: "The code is not the check. Do these 3 checks in Chrome:" and list 3 checks the learner does by hand (one of them: open the Console and look for red errors; one of them: after you ship, open your link on your phone). Never ask the learner to resize the Chrome window or set a width: the narrow-screen check is the phone.
4. Fix nothing yet. For each problem, say the fix in one line and ask: "Fix these? Yes or no."
5. After the learner says yes: fix, then read the list again. Do not save (commit): end with "Check in Chrome: …" and "Looks right? Type: Save this version." (AGENTS.md rule 4).
Never write `looks right in the code` for a case you did not read in the code; write `not checked` instead.
