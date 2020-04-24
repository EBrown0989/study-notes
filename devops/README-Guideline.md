# Product Development LifeCycle

## Get started:
 - Clone the project.
 - `yarn install`: Install all dependencies
 - `yarn start`: Start the project for development

## Project structure & architecture:

> #### Caution: This project is using `yarn` instead of npm.

 **Dependencies:**

  - [x] React
  - [x] Redux
  - [x] ...
  - [x] ...

  **Dev Dependencies:**

  > If applicable

 **Project Structure:**

 > Add comments about the project's format for its structure.

## [Git] Development Workflow:

> Feature Branch Workflow, Git Workflow, or another Workflow Strategy? `master`, `develop`, `feature`, `release`, `hotfix`, or `bug` Branches? Branch naming conventions? Add notes about you & your team's workflow methodology.

> Notes on the project's convention for features, hotfixes, release, etc.

## Pull Request Guidelines
   * Fetch the latest master: `git pull origin master` or `git fetch origin master` (Don't forget to stay on `master` branch)
   * Create a new clean branch: `git checkout -b new-branch`.
   * Do your work and make commits. You should push your work frequently.
   * Commits were pushed to `origin`, you should rebase your own branch. Fetch again with `git fetch origin master` and run
   `git rebase master`.
   * Resolve conflicts on each commit. Do it with `kdiff3` or anything that suits you. Add these modification and run `git rebase --continue` until you've cleared all conflicts.
   * Test your code.
   * Push your code.
      - If the branch is new, you just use `git push origin myNewBranch`.
      - If you had to rebase, you'll need to force the push with `git push origin myNewBranch -f`.
   * Create the PR and point to the [`master` / `develop`] Branch.

## DevOps Server:

 - Testing: TBD
 - Production: TBD

## Collaborators:
> Include: Person / Role / Contact Info / Timezone
 - Primary
 - Technical/Consultants
