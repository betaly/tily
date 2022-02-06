import {Func} from '../typings/types';

/**
 * This method doing nothing and returns `undefined`.
 */
export const noop = (() => {}) as Func<void>;

export default noop;
