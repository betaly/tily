import curryN from '../function/curryN';

interface Repeat {
  <T>(n: number, a: T): T[];

  (n: number): <T>(a: T) => T[];
}

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @param {Number} n The desired size of the output list.
 * @param {*} value The value to repeat.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      repeat(5, 'hi'); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = repeat(5, obj); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 */
export const repeat = curryN(2, <T>(n: number = 0, value: T) => {
  const result: T[] = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = value;
  }

  return result;
}) as Repeat;

export default repeat;
