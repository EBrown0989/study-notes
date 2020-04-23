# Git Basics

![Git logo (light-bg)](https://git-scm.com/images/logos/2color-lightbg@2x.png)

#### - [Git Tutorial for Begnners](https://academind.com/learn/web-dev/git-the-basics/)
#### - [Productive Git for Developers](https://egghead.io/courses/productive-git-for-developers)
#### - [Git](https://git-scm.com/)

## Add Files & Check Status

```bash
git status
git add .
git add ./file1 ./file2
git commit -m 'your commit message goes here'
```

Specify which files you want to commit, and then add a related
message. Try to commit as often as possible so that your changes
are easier to rollback in the event of a mistake. This makes it
easier to categorize the specific changes made as well.

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



### GIT GUD
