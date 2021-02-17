module.exports = {
  preset: 'ts-jest',
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  collectCoverageFrom: [
    '/packages/*/tests/*.{js,jsx,ts,tsx}',
    '!/packages/*/src/index.{js,jsx,ts,tsx}',
    '!/packages/.template',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./utils/test/jest.setup.ts'],
  coverageReporters: ['html', 'text'],
  modulePathIgnorePatterns: ['./node_modules'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/packages/(?:.+?)/dist/',
    '/packages/.template',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  globals: {
    'ts-jest': {
      tsconfig: './utils/test/tsconfig.jest.json',
    },
  },
};
