const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const Listr = require('listr');
const path = require('path');
const ncp = require('ncp');
const { promisify } = require('util');
const execa = require('execa');

const componentContent = require('./files/component');
const storiesContent = require('./files/story');
const testContent = require('./files/test');

const access = promisify(fs.access);
const copy = promisify(ncp);

async function prompOptions() {
  const questions = [
    {
      type: 'input',
      name: 'component',
      message: 'What component would you like to create',
    },
  ];

  const answers = await inquirer.prompt(questions);

  return {
    component: answers.component,
  };
}

function createFile(filePath, fileContent = '') {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log(`Failed to create ${filePath}`, chalk.red.bold('ERROR'));
      throw error;
    }
    console.log(`Create ${filePath}`, chalk.green.bold('DONE'));
  });
}

// Create a new folder at the specified path
function createDirectory(path) {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  } catch (err) {
    console.error(`[createDirectory]: Failed to create director at ${path}`);
  }
}

function createFiles(options) {
  const { component } = options;

  const srcFiles = [[`${component}.tsx`, componentContent], [`index.ts`]];
  const storiesFiles = [[`${component}.stories.tsx`, storiesContent]];
  const testFiles = [[`${component}.test.tsx`, testContent]];

  const srcDirectory = `packages/${component}/src/`;
  const storiesDirectory = `packages/${component}/stories/`;
  const testsDirectory = `packages/${component}/tests/`;

  createDirectory(srcDirectory);
  createDirectory(storiesDirectory);
  createDirectory(testsDirectory);

  srcFiles.forEach(([file, fileContent]) => {
    const filePath = srcDirectory + file;
    createFile(
      filePath,
      typeof fileContent === 'function' ? fileContent(component) : fileContent
    );
  });
  storiesFiles.forEach(([file, fileContent]) => {
    const filePath = storiesDirectory + file;
    createFile(
      filePath,
      typeof fileContent === 'function' ? fileContent(component) : fileContent
    );
  });
  testFiles.forEach(([file, fileContent]) => {
    const filePath = testsDirectory + file;
    createFile(
      filePath,
      typeof fileContent === 'function' ? fileContent(component) : fileContent
    );
  });
}

// Add index.ts file to the src/ folder
function appendToSrc(options) {
  const { component } = options;
  let content = `export * from "./${component}";`;

  const path = getPath(component);

  fs.appendFile(`${path}/src/index.ts`, content, 'utf8', (error) => {
    if (error) throw error;
    console.log('Data is appended to file successfully.');
  });
}

function getPath(component) {
  return `packages/${component}`;
}

function createPackageDir(options) {
  createDirectory(getPath(options.component));
}

async function copyTemplateFiles(options) {
  const templateDir = path.resolve(__dirname, 'template');

  options.templateDir = templateDir;
  options.targetDir = `packages/${options.component}`;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch {
    console.error(`%s Invalid template name`, chalk.red.bold('ERROR'));
    process.exit(1);
  }

  return copy(options.templateDir, options.targetDir, {
    clobber: false,
  });
}

async function createPackage(options) {
  const tasks = new Listr([
    {
      title: 'Create component package in packages/',
      task: () => createPackageDir(options),
    },
    { title: 'Copy template files', task: () => copyTemplateFiles(options) },
    {
      title: 'Add files to src',
      task: () => createFiles(options),
    },
    {
      title: 'Add export to src/index',
      task: () => appendToSrc(options),
    },
    {
      title: 'Symlink all packages',
      task: async () => {
        const result = await execa('yarn', ['install'], {
          cwd: process.cwd(),
        });
        if (result.failed) {
          return Promise.reject(new Error('Failed to run yarn install'));
        }
      },
    },
  ]);

  await tasks.run();

  console.log('%s Project ready', chalk.green.bold('DONE'));
  return true;
}

async function run() {
  const options = await prompOptions();
  await createPackage(options);
}

run();
