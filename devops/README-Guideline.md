# Product Development LifeCycle

## DevOps Server:

 - Testing: TBD
 - Production: TBD

## Caution:
 - This project is using `yarn` instead of npm. Please use yarn cli for all commands.

## Get started:
 - `yarn install`: Install all dependencies
 - `yarn start`: Start the project for development

## Project structure & architecture:
 **Dependencies:**

  - [x] React
  - [x] Redux
  - [x] etc

 **Project Structure:**

 > Add comments about your project structure.

## Development Workflow:

> `master`, `develop`, `feature`, `release`, and `hotfix` Branches? Branch naming conventions? Add notes about you & your team's workflow methodology.

 - `master` branch is now for the current version in production server
 - For every new feature/task/bug, we should create a new branch and
 create a PR that point to `master` branch
 - Make sure to **test carefully** on your local branch.

## Git Workflow Strategy:

> GitHub Workflow, Git Workflow, or another Workflow Strategy?

 - Pull Request Guidelines
   * Fetch the latest master: `git pull origin master` or `git fetch origin master` (Don't forget to stay at `master` branch
   * Create a new clean branch: `git checkout -b myNewBranch`, a good practice is to create a branch for each ticket or feature.
   * Do your work, make commits, you should create directly a PR and push your work frequently.
   * If other devs push commits, you should rebase your own branch, fetch again `git fetch origin master` and
   `git rebase master`.
   * If you have conflict, you have to resolve each conflict on each commit, do it with `kdiff3` or anything that suits you,
   add these modification and do a `git rebase --continue` until you've cleared the conflicts.
   * Test your code.
   * You can now push your code, If the branch is new, you just use `git push origin myNewBranch`. If you had to rebase you'll need to force the push `git push origin myNewBranch -f`.
   * Create the PR and point to `master` branch.

## Collaborators:
> Include: Person / Role / Contact Info / Timezone
 - Primary
 - Technical/Consultants
