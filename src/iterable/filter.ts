import curryN from '../function/curryN';

interface Filter {
  <T, R extends T>(predicate: (t: T) => t is R, iterable: Iterable<T>): Iterable<R> | undefined;

  <T>(predicate: (t: T) => boolean, iterable: Iterable<T>): Iterable<T> | undefined;

  <T, R extends T>(predicate: (t: T) => t is R): (iterable: Iterable<T>) => Iterable<R> | undefined;

  <T>(predicate: (t: T) => boolean): (iterable: Iterable<T>) => Iterable<T> | undefined;
}

/**
 *
 * Takes a predicate and a "iterable", and returns a new iterable of the
 * same type containing the members of the given iterable which satisfy the
 * given predicate.
 *
 * @param predicate The predicate function
 * @param iterable The iterable target to filter
 *
 * @example
 *
 *      filter(n => n % 2 === 0, [1, 2, 3, 4]);     //=> Iterable<[2, 4]>
 *
 */
export const filter = curryN(2, function*<T>(predicate: (t: T) => boolean, iterable: Iterable<T>) {
  for (const element of iterable) {
    if (predicate(element)) {
      yield element;
    }
  }
}) as Filter;

export default filter;
