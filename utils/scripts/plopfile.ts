import type { ActionType } from 'node-plop';
import path from 'path';
import shell from 'shelljs';
import _ from 'lodash';

interface Answers {
  componentName: string;
  description: string;
}

async function createPackage() {
  // node-plop 0.32 is ESM-only and nodePlop() resolves to the API.
  // The .hbs anchor is not a module, so set the template root after init.
  const { default: nodePlop } = await import('node-plop');
  const plop = await nodePlop();
  plop.setPlopfilePath(path.resolve('utils/plop-templates/plopfile.hbs'));

  plop.setHelper('capitalize', (text) => {
    return _.capitalize(_.camelCase(text));
  });

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name (lowercased):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
    ],
    actions(answers: any) {
      const actions: ActionType[] = [];

      if (!answers) return actions;

      const { componentName, description } = answers as Answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'component/**',
        destination: '../../packages/{{dashCase componentName}}',
        base: 'component/',
        data: { description, componentName },
        abortOnFail: true,
      });

      return actions;
    },
  });

  const { runPrompts, runActions } = plop.getGenerator('component');

  const answers = await runPrompts();
  await runActions(answers);
}

async function run() {
  await createPackage();
  shell.exec('yarn');
}

run();
