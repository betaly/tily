import curryN from '../function/curryN';

interface Find {
  <T, R extends T>(predicate: (t: T) => t is R, iterable: Iterable<T>): T | undefined;

  <T>(predicate: (t: T) => boolean, iterable: Iterable<T>): T | undefined;

  <T, R extends T>(predicate: (t: T) => t is R): (iterable: Iterable<T>) => T | undefined;

  <T>(predicate: (t: T) => boolean): (iterable: Iterable<T>) => T | undefined;
}

/**
 * Find element in `iterable` sort matched with predicate
 *
 * @param predicate The predicate function
 * @param iterable The iterable target to find
 *
 * @example
 *
 *      find(n => n % 2 === 0, new Set([1, 2, 3, 4]));    //=> 2
 *      find(n => n > 100, new Set([1, 2, 3, 4]));        //=> undefined
 *
 */
export const find = curryN(2, <T>(predicate: (t: T) => boolean, iterable: Iterable<T>) => {
  for (const element of iterable) {
    if (predicate(element)) {
      return element;
    }
  }
  return undefined;
}) as Find;

export default find;
