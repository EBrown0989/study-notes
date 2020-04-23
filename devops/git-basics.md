# Git Basics

![Git Terms](https://academind.com/static/fa71279ab1674d3fbb3397962904a41d/e5166/git-repo.jpg)

## Online Resources

#### - [Git Tutorial for Begnners (Academind)](https://academind.com/learn/web-dev/git-the-basics/)
#### - [GitHub Basics (Academind)](https://academind.com/learn/web-dev/github-the-basics/)
#### - [Productive Git for Developers (Egghead)](https://egghead.io/courses/productive-git-for-developers)
#### - [Git Docs](https://git-scm.com/docs)

## Useful Git Commands

```bash
git init # Initialize a Git repo in the current folder
git status # The "working tree" status
git add . # Track changes of all files in current repo
git add filename
git commit -m "your message"
git commit --amend # Amend the most recent commit
git log # List all commits

git checkout branch-name
git checkout commitid # Puts you in a Deatched HEAD state
git checkout -- . # Remove untracked changes
git reset --hard commitid # Turn the selected Commit into the new HEAD

git branch # List branches in the current repo
git checkout -b branch-name

git merge branch-name # Merge Branch branch-name with currently active Branch

git branch -D branch-name # Delete Branch branch-name
```

The command `git merge branch-name` would merge the Branch **branch-name** with the Branch you're currently using. So, if you're on **master**, then it would attempt to automatically merge **branch-name** with **master**.

If there are file conflics, you'll likely get an error. Just delete the code that you don't want to keep, commit the changes, and the merge should be completed now that the conflicts were resolved.

## Git Log

```Bash
git log
ls ~/.gitconfig # If it's not there, make it.

git lg #After setting up an alias in .gitconfig
```

Setting up an alias for `git log` will let you have a condensed and
abbreviated form that has a nice format. `graph` can let you readily
see when branches are created and merged. `pretty` does some
formatting for you.

```bash
# Example ~/.gitconfig

[user]
  name = user
  email = user@example.com

[credential]
  helper = cache --timeout=3600 # Store credentials for an hour

[alias]
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
```

## Oops, committed to the wrong branch!

```Bash
  git lg # Oh no, mistakes were made...

  git checkout -b correct-branch
  git lg # check branch HEADs

  git checkout master
  git reset --hard [commit-hash-code]

  git branch
  git checkout correct-branch
  git lg # Commits should still be here. Push 'em
```

If there's a mistake in how you added the commits, you can create or
checkout the correct branch and then check where you are using
`git log`. You should see the commits are now on the new branch,
but the **incorrect branch(master)** will still be present.

Now you can checkout the **incorrect branch (master)**, and reset
it to a point before your commits were added.

Checkout the correct branch now and look at the log again just to
see if everything has been corrected. If yes, push those changes!
