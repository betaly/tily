import curryN from '../function/curryN';
import isString from '../is/string';

interface Repeat {
  (n: number, a: string): string;

  (n: number): (a: string) => string;
}

/**
 * Returns a string containing a repeated identical value.
 *
 * @param {Number} n The number to repeat value.
 * @param {String} value The value to repeat.
 * @return {String} A new string containing `n` `value`s.
 * @example
 *
 *      repeat(5, 'h'); //=> 'hhhhh'
 *
 */
export const repeat = curryN(2, (n = 0, value: string) => {
  if (!isString(value)) {
    return '';
  }

  let result = '';

  for (let i = 0; i < n; i++) {
    result += value;
  }

  return result;
}) as Repeat;

export default repeat;
