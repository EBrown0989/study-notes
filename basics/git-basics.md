# Git Basics

> [Productive Git for Developers](https://egghead.io/courses/productive-git-for-developers)

## Useful Commands

```bash
git status
git add .
git add ./file1 ./file2 #wildcards work for this.
git commit -m 'example commit message'
git log
git lg #After setting up an alias in .gitconfig

git checkout -b example-branch
git reset --hard <commit-hash>
git branch
```

## Example Git Config

```bash
# Example .gitconfig file, stored as ~/.gitconfig
#

[alias]
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
[user]
  name = user
  email = user@example.com
```
