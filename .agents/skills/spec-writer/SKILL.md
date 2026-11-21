---
name: spec-writer
description: Turn the learner's own 5W1H answers into SPEC.md for their todo app, or update SPEC.md for a new feature request, and show SPEC.md when asked. Use when the learner types $spec-writer, asks to write or update the spec, or writes "Show me SPEC.md."
---

# spec-writer

The learner thinks; you write it down. The 5W1H answers are theirs.

## Steps
1. Read the learner's message and `SPEC.md` if it exists.
2. Check that each W has an answer from the learner. Short answers in any language are fine.
   - Who is it for? (a role, never a real name)
   - What does it need to hold? (3 real example tasks)
   - Why do they need it? (what goes wrong today)
   - When do they use it?
   - Where (which device, which situation)?
   - How do we know it works? (1–3 "done when" checks)
3. If a W is missing, ask for that W only, with one short example. Ask one at a time. Never fill a W yourself. If the learner says "you choose", give 2–3 options and wait.
4. If a name of a real person appears, ask for a role instead.
5. Write `SPEC.md` at once (no plan, no waiting), in English, with exactly these headings:
   - `# Todo for <Who>`
   - `## Who · What · Why · When · Where` (one line each, the learner's meaning, plainly translated)
   - `## The 4 parts` (data · display · actions · memory, one line each, from the answers)
   - `## Done when` (checkboxes; always include "Tasks are still there after a reload")
   - `## Not now` (only good ideas the learner gave for later; leave it empty if they gave none)
6. Do not save (commit). Show the learner the Who line and the Done when list, and ask: "Is this what you mean? Change one thing if not." Then end with: "Looks right? Type: Save this version."
7. When the learner asks to change a line, change only that line in SPEC.md, show the changed list again, and end with the same save line.
8. When the learner writes "Show me SPEC.md." (or asks to see the spec), show the whole file exactly as it is, in one block they can copy, and change nothing.
9. For a feature request: add the new 5W1H answers under `## Change requests` with today's date, add its Done when lines, do not change code, and end with the same save line.

Do not write any code in this skill. Save only when the learner writes "Save this version." (AGENTS.md rule 4).
