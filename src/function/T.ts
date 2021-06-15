import {Func} from '../typings/types';

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @return {Boolean}
 * @example
 *
 *      T(); //=> true
 */
export const T = (() => true) as Func<true>;

export default T;
