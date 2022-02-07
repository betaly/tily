import empty from './empty';

/**
 * Sure to get an iterable from the given iterable or null/undefined value
 *
 * @param iterable
 *
 * @example
 *
 *      from([]);           //=> []
 *      from(null);         //=> <empty iterable>
 *      from(undefined);    //=> <empty iterable>
 */
export function from<T>(iterable: Iterable<T> | undefined | null): Iterable<T> {
  return iterable || empty();
}

export default from;
