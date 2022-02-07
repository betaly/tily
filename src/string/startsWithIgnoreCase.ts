import {compareSubstringIgnoreCase} from './compareSubstringIgnoreCase';
import curryN from '../function/curryN';

interface StartsWithIgnoreCase {
  (prefix: string, str: string): boolean;
  (prefix: string): (str: string) => boolean;
}

/**
 * Checks if a string starts with the provided candidate ignore case
 *
 * @param {string} candidate
 * @param {string} str
 * @return {Boolean}
 * @example
 *
 *      startsWithIgnoreCase('a', 'abc');                //=> true
 *      startsWithIgnoreCase('A', 'abc');                //=> true
 *      startsWithIgnoreCase('ab', 'ABC');               //=> true
 *      startsWithIgnoreCase('b', 'abc');                //=> false
 */
export const startsWithIgnoreCase = curryN(2, (prefix: string = '', str: string = '') =>
  _startsWithIgnoreCase(str, prefix),
) as StartsWithIgnoreCase;

function _startsWithIgnoreCase(str: string, prefix: string): boolean {
  const prefixLength = prefix.length;
  if (prefix.length > str.length) {
    return false;
  }

  return compareSubstringIgnoreCase(str, prefix, 0, prefixLength) === 0;
}

export default startsWithIgnoreCase;
