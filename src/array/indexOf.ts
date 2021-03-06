import curryN from '../function/curryN';
import isString from '../is/string';

interface IndexOf {
  (target: string, list: string): number;

  <T>(target: T, list: ArrayLike<T>): number;

  (targer: string): (list: string) => number;

  <T>(target: T): (list: ArrayLike<T>) => number;
}

/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array.
 *
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @example
 *
 *      indexOf(3, [1,2,3,4]); //=> 2
 *      indexOf(10, [1,2,3,4]); //=> -1
 */

export const indexOf = curryN(2, <T>(target: T | string, xs: ArrayLike<T> | string = []) => {
  if (isString(xs)) {
    return xs.indexOf(target as string);
  }

  return Array.prototype.indexOf.call(xs, target);
}) as IndexOf;

export default indexOf;
