/**
 * Get first value from `iterable`.
 *
 * @param iterable
 *
 * @example
 *
 *      first([1, 2, 3]);     //=> 1
 */
export function first<T>(iterable: Iterable<T>): T | undefined {
  return iterable[Symbol.iterator]().next().value;
}
