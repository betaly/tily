import curryN from '../function/curryN';

interface Some {
  <T>(predicate: (t: T) => unknown, iterable: Iterable<T>): boolean;
  <T>(predicate: (t: T) => unknown): (iterable: Iterable<T>) => boolean;
}

/**
 * Check `iterable` has element to match with `predicate`
 *
 * @param iterable
 * @param predicate
 *
 * @example
 *
 *      some((n) => n % 2 === 0, [1, 2, 3, 4]);     //=> true
 *      some((n) => n % 5 === 0, [1, 2, 3, 4]);     //=> false
 */
export const some = curryN(2, <T>(predicate: (t: T) => unknown, iterable: Iterable<T>) => {
  for (const element of iterable) {
    if (predicate(element)) {
      return true;
    }
  }
  return false;
}) as Some;
