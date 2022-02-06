import {Func} from '../typings/types';

/**
 * Checks if `test` is function.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is function, else `false`.
 * @example
 *
 *      isFunction(() => {}); //=> true
 *      isFunction(null);     //=> false
 */
export const isFunction = (test): test is Func => typeof test === 'function';

export default isFunction;
