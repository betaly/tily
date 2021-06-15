import curryN from '../function/curryN';
import concat from './concat';
import {CurriedFunction2, Endo1} from '../typings/types';

interface Adjust {
  <T>(fn: Endo1<T>, index: number, list: ArrayLike<T>): T[];

  <T>(fn: Endo1<T>, index: number): (list: ArrayLike<T>) => T[];

  <T>(fn: Endo1<T>): CurriedFunction2<number, ArrayLike<T>, T[]>;
}

/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array} list An array whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 *
 * @example
 *
 *      adjust(add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      adjust(add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 */
export const adjust = curryN(3, <T>(fn: Endo1<T>, idx: number, list: ArrayLike<T> = []) => {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }

  const start = idx < 0 ? list.length : 0;
  const index = start + idx;
  const result = concat(list, []);

  result[index] = fn(list[index]);
  return result;
}) as Adjust;

export default adjust;
