import curryN from '../function/curryN';
import slice from './slice';
import {ArrPred} from '../typings/types';

interface TakeRightWhile {
  (fn: ArrPred<string>, arr: string): string;

  <T>(fn: ArrPred<T>, arr: ArrayLike<T>): T[];

  <T>(fn: ArrPred<T>): {
    (arr: string): string;
    (arr: ArrayLike<T>): T[];
  };
}

/**
 * Returns a new array|string containing the last `n` elements of a given array|string, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail.
 *
 * @param {Function} fn The function called per iteration.
 * @param {Array|String} arr The collection to iterate over.
 * @return {Array|String} A new array or string.
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      takeRightWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
export const takeRightWhile = curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
  let i = arr.length - 1;

  while (i >= 0 && fn(arr[i], i, arr)) {
    i -= 1;
  }

  return slice(i + 1, arr.length, arr);
}) as TakeRightWhile;

export default takeRightWhile;
