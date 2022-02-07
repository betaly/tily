import curryN from './curryN';
import reduce from '../array/reduce';
import pluck from '../array/pluck';
import map from '../array/map';

export interface ConvergeAfterFn {
  (...args: any[]): any;
}

export interface ConvergeArgFn {
  (...args: any[]): any;
}

export interface Converge {
  (after: ConvergeAfterFn, fns: ConvergeArgFn[]): ConvergeArgFn;

  (after: ConvergeAfterFn): (fns: ConvergeArgFn[]) => ConvergeArgFn;
}

/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @example
 *
 *      const average = converge(divide, [sum, length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = converge(concat, [toUpper, toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */

export const converge = curryN(2, function converge(after: ConvergeAfterFn, fns: ConvergeArgFn[]) {
  // @ts-ignore
  const maxNumArgs = reduce((a, b) => Math.max(a, b), 0, pluck('length', fns));
  return curryN(maxNumArgs, function (...args) {
    return after.apply(
      this,
      map(fn => fn.apply(this, args), fns),
    );
  });
}) as Converge;

export default converge;
