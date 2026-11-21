---
name: ship-github
description: Save the learner's unsaved work and put it online with GitHub Pages, then give them their link. Use when the learner types $ship-github or asks to put the app online / update the link.
---

# ship-github

## Steps
1. Check git works: `git --version`. If it fails, stop and say: "Git is not installed yet. Do the Git step of What to prepare, then try again."
2. If this folder is not a git repository yet: `git init -b main`.
3. Check the remote: `git remote get-url origin`.
   - If there is none, use the learner's GitHub nickname: the one in `git config --local user.name` if it is set, or ask for it (never guess). Then
     `git remote add origin https://github.com/<nickname>/todo.git`.
4. Save what is not saved yet: if `git status --porcelain` shows changes, first set the name on the saves as AGENTS.md rule 7 says, then `git add -A` and `git commit -m "<short message of what changed>"`. Calling `$ship-github` is the learner's request to save. Nothing changed: skip this step.
5. Ship: `git push -u origin main`. This needs the learner's approval and the internet. If a browser window asks them to sign in to GitHub, tell them: "Sign in in the browser window, then come back here."
6. If the push is rejected because GitHub has newer files (for example after a web upload): `git pull --no-rebase --no-edit origin main`, then push again. If the pull stops on a conflict in `index.html`, `style.css` or `app.js`, the files on this computer are the newest: run `git merge --abort`, then `git pull --no-rebase --no-edit -X ours origin main`, then push again. Anything else (unrelated histories, other files): stop, run `git merge --abort` if a merge is open, and say: "Your app is safe on your computer. Tell your teacher: push rejected."
7. If the push works, print exactly:
   `Your link: https://<nickname>.github.io/todo/`
   and add: "First time? On github.com open your repository → Settings → Pages → Branch: main → Save." and "It can take a minute to update. Open it in Chrome, then on your phone. Refresh if you still see the old version."
8. If the push fails for another reason, explain the reason in one sentence and give the catch-up: "Open your repository on github.com → Add file → Upload files → drag index.html, style.css and app.js → Commit changes."

Never force-push (no `--force`, no `-f`). Never rebase or reset the learner's saves. Never change GitHub settings. Never put a token or password in a file or a command.
