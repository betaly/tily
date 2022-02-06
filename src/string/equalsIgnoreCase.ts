import {compareSubstringIgnoreCase} from './compareSubstringIgnoreCase';

/**
 * Check two strings is equal ignore case
 *
 * @param a
 * @param b
 *
 * @example
 *
 *      equalsIgnoreCase('abc', 'AbC'); //=> true
 *      equalsIgnoreCase('abc', 'AbD'); //=> false
 */
export function equalsIgnoreCase(a: string, b: string): boolean {
  return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}

export default equalsIgnoreCase;
