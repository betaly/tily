/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const publish = (dir, npmTag) =>
  execa(`npm publish --registry https://registry.npmjs.com --access public ${dir} --tag ${npmTag}`, {shell: true});

module.exports = publish;
