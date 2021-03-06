import memoizeWith from './with';
import createCacheFrom from './createCache';

/**
 * Memoize function with multiply arguments of any type.
 * Use it when you need deep equality for cache lookup.
 *
 * @param {Function} fn
 * @returns {Function}
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeDeep(addFlag));
 *     const test = {};
 *     memoize(test, {test: 2}); // from addFlag call
 *     memoize(test, {test: 2}); // from cache
 *     test.id = 123;
 *     memoize(test); // from addFlag call
 */
export const deep = memoizeWith(createCacheFrom, (...args) => JSON.stringify(args));

export default deep;
