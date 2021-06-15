import snakeCaseName from '../snakeCaseName';

const snakeCaseLodash = require('lodash/snakeCase');

const testStr = 'VeryLogFooBarString';

export default {
  lodash: () => {
    snakeCaseLodash(testStr);
  },
  tily: () => {
    snakeCaseName(testStr);
  },
};
