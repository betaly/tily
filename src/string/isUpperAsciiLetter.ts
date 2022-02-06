/**
 * Check `code` is upper ascii letter
 *
 * @param code
 *
 * @example
 *
 *      isUpperAsciiLetter('a'.charCodeAt(0));  //=> false
 *      isUpperAsciiLetter('z'.charCodeAt(0));  //=> false
 *      isUpperAsciiLetter('A'.charCodeAt(0));  //=> true
 *      isUpperAsciiLetter('Z'.charCodeAt(0));  //=> true
 */
export function isUpperAsciiLetter(code: number): boolean {
  return code >= 65 && code <= 90;
}

export default isUpperAsciiLetter;
