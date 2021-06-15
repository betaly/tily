import adjust from './adjust';
import curryN from '../function/curryN';
import always from '../function/always';

interface Update {
  <T>(index: number, value: T, list: ArrayLike<T>): T[];

  <T>(index: number, value: T): (list: ArrayLike<T>) => T[];

  <T>(index: number): {
    <T>(value: T, list: ArrayLike<T>): T[];
    <T>(value: T): (list: ArrayLike<T>) => T[];
  };
}

/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @param {Number} idx index
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array} list The source array to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @example
 *
 *      update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 */

export const update = curryN(3, <T>(idx: number, x: T, list: ArrayLike<T>) => adjust(always(x), idx, list)) as Update;

export default update;