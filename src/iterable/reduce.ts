import {CurriedFunction2} from '../typings/types';
import curryN from '../function/curryN';

export type IterableReduceFunc<T, R> = (previousValue: R, currentValue: T) => R;

interface Reduce {
  <T, R>(reducer: IterableReduceFunc<T, R>, initialValue: R, iterable: Iterable<T>): R;
  <T, R>(reducer: IterableReduceFunc<T, R>, initialValue: R): (iterable: Iterable<T>) => R;
  <T, R>(reducer: IterableReduceFunc<T, R>): CurriedFunction2<R, Iterable<T>, R>;
}

/**
 * Returns a single item by iterating through the iterable, successively calling
 * the iterable function and passing it an previousValue value and the current
 * value from the iterable, and then passing the result to the next call.
 *
 * @param {Function} reducer The iterable function. Receives two values, the previous element and the
 *        current element from the iterable.
 * @param {*} initialValue The initial value.
 * @param {Array} iterable The iterable target to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      const numbers = [1, 2, 3];
 *      const plus = (a, b) => a + b;
 *
 *      reduce(plus, 10, numbers); //=> 16
 */
export const reduce = curryN(3, <T, R>(reducer: IterableReduceFunc<T, R>, initialValue: R, iterable: Iterable<T>) => {
  let value = initialValue;
  for (const element of iterable) {
    value = reducer(value, element);
  }
  return value;
}) as Reduce;

export default reduce;
