# Git Basics

![Git logo (light-bg)](https://git-scm.com/images/logos/2color-lightbg@2x.png)

#### - [Productive Git for Developers](https://egghead.io/courses/productive-git-for-developers)
#### - [git](https://git-scm.com/)

## Add Files & Check Status

```bash
git status
git add .
git add ./file1 ./file2 #wildcards work for this.
git commit -m 'example commit message'
```

Specify which files you want to commit, and then add a related message.
Try to commit as often as possible so that your changes are easier to
rollback in the event of a mistake. This makes it easier to categorize
the specific changes made as well.

## Git Log

```Bash
git log
ls ~/.gitconfig # If it's not there, simply use touch to make it.

git lg #After setting up an alias in .gitconfig
```

Setting up an alias for `git log` will let you have a condensed and
abbreviated form that has a nice format. `graph` can let you readily
see when branches are created and merged. `pretty` does some formatting
for you. Now it'll hopefully be quicker to get an overview of your git
history when you run `git lg`.

```bash
# Example .gitconfig file, stored as ~/.gitconfig
#

[alias]
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
[user]
  name = user
  email = user@example.com
```

## Oops, committed to the wrong branch!

```Bash
  git lg # Oh no, mistakes were made...

  git checkout -b correct-branch
  git lg # check where master and correct-branch are currently looking

  git checkout master
  git reset --hard [commit-hash-code]

  git branch
  git checkout correct-branch
  git lg # the commits should still be here, and now push correctly!
```

If there's a mistake in how you added the commits, you can create or
checkout the correct branch and then check where you are using `git log`.
You should see the commits are now on the new branch, but master / the
old branch will still be present.

Now you can checkout the incorrect branch (master), and reset it to a
point before your commits were added. It's basically like rewinding
master to an earlier point in time.

Checkout the correct branch now and look at the log again just to see
if everything has been corrected. If yes, push those changes!



### GIT GUD
