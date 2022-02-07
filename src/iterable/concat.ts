/**
 * Returns the result of concatenating the given iterables.
 *
 * @param iterables The iterable list
 * @return A list consisting of the elements of iterables
 *
 * @example
 *
 *      concat([4, 5, 6], [1, 2, 3]);   //=> Iterable<[4, 5, 6, 1, 2, 3]>
 *      concat([], []);                 //=> Iterable<[]>
 */
export function* concat<T>(...iterables: Iterable<T>[]): Iterable<T> {
  for (const iterable of iterables) {
    for (const element of iterable) {
      yield element;
    }
  }
}

export default concat;
