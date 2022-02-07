/**
 * Wrap a single element to Iterable
 *
 * @param element
 */
export function* single<T>(element: T): Iterable<T> {
  yield element;
}

export default single;
