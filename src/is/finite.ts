import isNumber from './number';

/**
 * Checks if `test` is finite.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is finite, else `false`.
 * @example
 *
 * isFinite(5); // => true
 * isFinite(null); // => false
 */
export const isFinite = (test): test is number => isNumber(test) && global.isFinite(test);

export default isFinite;
