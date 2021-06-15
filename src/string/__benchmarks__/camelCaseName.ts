import camelCaseName from '../camelCaseName';

const camelCaseLodash = require('lodash/camelCase');

const testStr = 'very-log-foo-bar-string';

export default {
  lodash: () => {
    camelCaseLodash(testStr);
  },
  tily: () => {
    camelCaseName(testStr);
  },
};
