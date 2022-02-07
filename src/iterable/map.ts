import curryN from '../function/curryN';

export type IterableMapFunc<T, R> = (value: T, index: number) => R;

interface Map {
  <T, R>(fn: IterableMapFunc<T, R>, iterable: Iterable<T>): Iterable<T>;

  <T, R>(fn: IterableMapFunc<T, R>): (iterable: Iterable<T>) => Iterable<T>;
}

/**
 *
 * Creates an iterable of values by running each element in list through fn. The fn is invoked with two arguments:
 * (value, index).
 *
 * @param fn Iterable map function
 * @param iterable The iterable target
 *
 * @example
 *
 *      map(n => 2 * n, [1, 2, 3, 4]);    // Iterable<[2, 4, 6, 8]>
 */
export const map = curryN(2, function* <T, R>(fn: IterableMapFunc<T, R>, iterable: Iterable<T>) {
  let index = 0;
  for (const element of iterable) {
    yield fn(element, index++);
  }
}) as Map;

export default map;
