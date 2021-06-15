import slice from './slice';

interface Tail {
  (list: string): string;

  <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns all but the first element of the given array.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
 *      tail([]); //=> []
 */
export const tail = (<T>(arr: ArrayLike<T>) => slice(1, arr.length, arr)) as Tail;

export default tail;