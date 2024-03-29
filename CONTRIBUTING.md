# Contributing to Vitau-ui

Here are a few guidelines that will help you along the way.

## Branches

### Branches naming standard

[Contributor name]/[Project acronym]-[Jira task id]/-[task description]


### Example

```bash
git checkout -b rulo/DSGN-001/select-component
```

- rulo = Contributor name
- DSGN = Project acronym
- 001 = Jira task id
- select-component = task description

## Commits

### Conventional Commits standard

[Type] (optional scope): [description]

[optional body]

[optional footer(s)]

### Example

```bash
git commit -m 'feat(button): create loader package'
```

- **Type***- feat (introduces a new feature to the codebase )
- **Optional scope **- button
- **Description**-  create loader package

Learn more about conventional commit [here](https://www.conventionalcommits.org/en/v1.0.0/ "here")

## Pull Requests

### Before creating a pull request please

- Make sure you created an Jira task related to it.
- Make sure you're following the [branches section](#Branches) recommendations
- Make sure you're following the [commits section](#Commits) recommendations


### Steps to PR
1- Create a local branch based off master
```bash
$ git checkout master
$ git pull
$ git checkout -b <branch-name>
$ git push --set-upstream origin <branch-name>
```

2- When you've staged the changes, commit them.
```bash
$ git status
$ git commit -m "The message goes here"
```

3- Share your branch.
```bash
$ git push origin <branch-name>
```
4- Submit a GitHub Pull Request and Get someone else to Code Review.

5- After approved, you can now merge the branch. Make sure you only have the commits you want to go into master, then use **squash and merge** of GitHub option in your pull request.


