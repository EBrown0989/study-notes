# Readme
The project MUST include a README.md file in the Markdown format.

The README.md file SHOULD be committed as the second commit, right after LICENSE.md.

The README file MUST be kept up to date.
(It is better to have incomplete information than incorrect
or outdated information in the README.)

The README file MUST include the following information:

- the name of the project
- the author(s) of the project
- the copyright holder
- the purpose of the project
- people responsible for the project
- the programming language(s) (with versions) used in the project
- the style guide used for the code in the project
- prerequisites of running the project
- how to install project dependencies
- how to build or run the project
- what is the expected result of building or running the project

The README file SHOULD include the following information:

- how to set up a developer environment to conviently work on the project
- how to submit bugs
- how to submit feature requests if applicable

---

# [APP / SOFTWARE NAME]

[App / Software Description]

# Get started
 - Clone the project.
 - `yarn install`: Install all dependencies
 - `yarn start`: Start the project for development

# Project structure & architecture
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

# Development Workflow
> Feature Branch Workflow, Git Workflow, or another Workflow Strategy? `master`, `develop`, `feature`, `release`, `hotfix`, or `bug` Branches? Branch naming conventions? Add notes about you & your team's workflow methodology.

> Notes on the project's convention for features, hotfixes, release, etc.

## Pull Request Guidelines
   * Fetch the latest master: `git pull origin master` or `git fetch origin master` (Don't forget to stay on `master` branch)
   * Create a new branch: `git checkout -b new-branch`.
   * Make your changes and commit often.
   * Were commits pushed to `origin`? If so, you should rebase your branch. Fetch with `git fetch origin master` and run
   `git rebase master`.
   * Resolve conflicts on each commit. Do it with `kdiff3` or anything that suits you. Add these modification and run `git rebase --continue` until you've cleared all conflicts.
   * Test your code.
   * Push your code.
      - If the branch is new, you just use `git push origin myNewBranch`.
      - If you had to rebase, you'll need to force the push with `git push origin myNewBranch -f`.
   * Create the PR and point to the [`master` / `develop`] Branch.

# DevOps Info
> Development, Staging, and Production Info?

# Collaborators
> Include: Person / Role / Contact Info / Timezone
 - Primary
 - Technical/Consultants
