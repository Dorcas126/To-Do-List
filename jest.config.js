module.exports = {
  // Indicates the root directory where Jest should look for test files
  rootDir: './',

  // An array of file extensions to include in test file search
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',

  // A list of paths to directories that Jest should use to search for files
  moduleDirectories: ['node_modules', 'src'],

  // A list of paths to directories that Jest should use to search for modules
  modulePaths: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Transform files with Babel for ES6+ support
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
