/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const build = async (buildDir, tsTemp) => {
  await execa('tsc -p tsconfig.json', { shell: true });
  await execa(`npx babel ./${tsTemp} -d ${buildDir}`, { shell: true });
};

module.exports = build;
