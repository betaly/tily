// eslint-disable-next-line import/no-commonjs

module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  testMatch: ['**/__tests__/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};
