module.exports = {
  preset: 'ts-jest',
  testEnvironment: './lib/PlaywrightEnvironment.js',
  runner: './runner.js',
  testPathIgnorePatterns: ['/node_modules/', 'lib'],
  testMatch: ['**/e2e/**/*.test.ts'],
  setupFilesAfterEnv: ['./lib/extends.js', './setup.e2e.js'],
  verbose: true,
}
