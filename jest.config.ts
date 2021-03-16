import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // A preset that is used as a base for Jest's configuration.
  // See: https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: 'ts-jest',
  // The directory where Jest should store its cached dependency information.
  cacheDirectory: '.jest-cache',
  // The directory where Jest should output its coverage files.
  coverageDirectory: '.jest-coverage',
  // An array of glob patterns indicating a set of files for which coverage information should be collected.
  collectCoverageFrom: [
    '/packages/*/tests/*.{js,jsx,ts,tsx}',
    '!/packages/*/src/index.{js,jsx,ts,tsx}',
    '!/packages/.template',
    '!**/node_modules/**',
  ],
  modulePathIgnorePatterns: ['./node_modules'],
  // Run some code to configure or set up the testing framework before each test file in the suite is executed.
  setupFilesAfterEnv: ['<rootDir>/utils/test/setupTests.ts'],
  // A list of reporter names that Jest uses when writing coverage reports.
  coverageReporters: ['html', 'text'],
  // Use custom watch plugins
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-yarn-workspaces',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default config;
