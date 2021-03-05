#!/usr/bin/env node

require('dotenv').config();
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require('ora');
const execa = require('execa');
const util = require('util');
const fs = require('fs');
const temp = require('temp').track();
const resolve = require('path').resolve;
const { Changelog } = require('lerna-changelog');
const { fromPath } = require('lerna-changelog/lib/configuration');

const { displayError, assertGitBranch } = require('./common');
const spinner = ora();

const ALLOWED_RELEASE_BRANCHES = ['release/*'];
const INSERTION_SLUG = '<!-- insert-new-changelog-here -->';

const printCommits = async () => {
  spinner.start('Commits since current version:');

  const describeArgs = ['describe', '--abbrev=0', '--tags'];
  // Get last release tag
  const prevTag = (await execa('git', describeArgs)).stdout.toString();

  const logArgs = [
    '--no-pager',
    'log',
    `${prevTag}..HEAD`,
    '--no-decorate',
    '--oneline',
  ];
  spinner.info();
  // Print commits since last release tag
  await execa('git', logArgs, { stdout: process.stdout });
};

const generateChangelog = async () => {
  spinner.start('Generating changelog');

  const write = util.promisify(fs.write);
  const open = util.promisify(temp.open);
  const { path, fd } = await open({ prefix: 'CHANGELOG', suffix: '.md' });

  const rootPath = await execa('git', ['rev-parse', '--show-toplevel']);
  const changelogConfig = fromPath(rootPath.stdout);
  const markdown = await new Changelog(changelogConfig).createMarkdown();

  await write(fd, markdown);

  const readFile = util.promisify(fs.readFile);
  const changelogPath = resolve(__dirname, '..', '..', 'CHANGELOG.md');
  const data = await readFile(changelogPath, 'utf8');

  if (data.includes(INSERTION_SLUG)) {
    const retVal = await readFile(path, 'utf8');

    const writeFile = util.promisify(fs.writeFile);
    const changes = data.replace(
      INSERTION_SLUG,
      `${INSERTION_SLUG}\n${retVal}`
    );

    await writeFile(changelogPath, changes);
    await execa('git', [
      'commit',
      '-m',
      `chore(changelog): generate changelog`,
      '--no-verify',
      '--quiet',
      changelogPath,
    ]);

    spinner.succeed();
  } else {
    throw new Error(`Missing "${INSERTION_SLUG}" in CHANGELOG.md`);
  }
};

const run = async () => {
  clear();
  // Display intro message banner
  console.log(chalk.blue(figlet.textSync('release')));
  try {
    await assertGitBranch(ALLOWED_RELEASE_BRANCHES, spinner);
    await printCommits();
    await generateChangelog();
    spinner.succeed(
      'Success\n✨ Push this branch and create a new pull request.'
    );
  } catch (error) {
    displayError(error.message, spinner);
  }
};

run();
