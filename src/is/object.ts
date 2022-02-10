/**
 * Checks if `test` is object.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is object, else `false`.
 * @example
 *
 *      isObject({ a: 'test' });  //=> true
 *      isObject(new Foo());      //=> true
 *      isObject(null);           //=> false
 */
export const isObject = <T = Record<any, any>>(test: unknown): test is T => test !== null && typeof test === 'object';

export default isObject;
