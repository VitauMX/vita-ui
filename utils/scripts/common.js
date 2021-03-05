const globToRegExp = require('glob-to-regexp');
const execa = require('execa');
const chalk = require('chalk');

/**
 * Displays an error message
 * @param {String} error
 * @param {Spinner} spinner
 */
const displayError = (error, spinner) => {
  const message = chalk.red(error);

  spinner.fail(message);
};

/**
 * Retunrs the current git branch
 */
const getCurrentGitBranch = async () => {
  let currentBranch = '';

  try {
    const output = await execa('git', ['branch', '--show-current']);
    currentBranch = output.stdout.toString();
  } catch (error) {
    throw new Error('Git branch not found');
  }

  return currentBranch;
};

/**
 * Checks if the current git branch is allowed
 * @param {String[]} allowedBranches
 * @param {Spinner} spinner
 */
const assertGitBranch = async (allowedBranches, spinner) => {
  spinner.start(`Asserting current git branch to be an allowed release branch`);

  const currentBranch = await getCurrentGitBranch();
  const isInAllowedBranch = allowedBranches.some((branch) => {
    const re = globToRegExp(branch);
    return re.test(currentBranch);
  });

  if (isInAllowedBranch) {
    spinner.succeed();
  } else {
    throw new Error(`Switch to a valid release branch`);
  }
};

module.exports = {
  displayError,
  assertGitBranch,
  getCurrentGitBranch,
};
