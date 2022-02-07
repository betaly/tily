/**
 * Checks if `test` is IterableIterator.
 *
 * @param thing
 *
 * @example
 *
 *      isIterable([]);           //=> true
 *      isIterable(new Set());    //=> true
 *      isIterable(new Map());    //=> true
 *      isIterable({});           //=> false
 */
export function isIterable<T = any>(thing: any): thing is Iterable<T> {
  return thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
}

export default isIterable;
