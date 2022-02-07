import {CurriedFunction2} from '../typings/types';
import curryN from '../function/curryN';

interface Slice {
  <T>(from: number, to: number, arr: ReadonlyArray<T>): Iterable<T>;

  <T>(from: number, to: number): (arr: ReadonlyArray<T>) => Iterable<T>;

  <T>(from: number): CurriedFunction2<number, ReadonlyArray<T>, Iterable<T>>;
}

/**
 * Returns an iterable slice of the array, with the same semantics as `array.slice()`.
 *
 * @param {Number} from The start index (inclusive).
 * @param {Number} to The end index (exclusive).
 * @param {ReadonlyArray} list
 * @return {Iterable}
 * @example
 *
 *      slice(1, 3, ['a', 'b', 'c', 'd']);        //=> Iterable<['b', 'c']>
 *      slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> Iterable<['b', 'c', 'd']>
 *      slice(0, -1, ['a', 'b', 'c', 'd']);       //=> Iterable<['a', 'b', 'c']>
 *      slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> Iterable<['b', 'c']>
 */
export const slice = curryN(3, function* <T>(from: number, to: number, arr: ReadonlyArray<T>) {
  if (from < 0) {
    from += arr.length;
  }

  if (to < 0) {
    to += arr.length;
  } else if (to > arr.length) {
    to = arr.length;
  }

  for (; from < to; from++) {
    yield arr[from];
  }
}) as Slice;
