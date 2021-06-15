import {Func} from '../typings/types';

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @return {Boolean}
 * @example
 *
 *      F(); //=> false
 */
export const F = (() => false) as Func<false>;

export default F;
