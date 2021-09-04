// eslint-disable-next-line import/no-commonjs

module.exports = {
  timers: 'legacy',
  preset: 'ts-jest',
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: {
        esModuleInterop: true,
      },
    },
  },
  testMatch: [
    '**/__tests__/*.+(ts|tsx|js|jsx)',
  ],
}

