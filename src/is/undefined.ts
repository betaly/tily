/**
 * Checks if `test` is `undefined`.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0); // => true
 * isUndefined(null);// => false
 */
export const isUndefined = (test): test is undefined => typeof test === 'undefined';

export default isUndefined;
