// eslint-disable-next-line import/no-commonjs

module.exports = {
  // fakeTimers: {
  //   legacyFakeTimers: true,
  // },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        esModuleInterop: true,
      },
    },
  },
  testMatch: ['**/__tests__/*.test.+(ts|tsx|js|jsx)'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};
