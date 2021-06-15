/**
 * Checks if `test` is boolean.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is boolean, else `false`.
 * @example
 *
 * isBool(false); // => true
 * isBool(new Boolean()); // => true
 * isBool(null); // => false
 */
export const isBoolean = (test): test is boolean => typeof test === 'boolean' || test instanceof Boolean;

export default isBoolean;
