import {Func} from '../typings/types';

/**
 * A function that always returns `undefined`. Any passed in parameters are ignored.
 *
 * @return {Undefined}
 * @example
 *
 *      nothing(); //=> undefined
 */
export const nothing = (() => undefined) as Func<void>;

export default nothing;
