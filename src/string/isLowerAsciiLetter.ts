/**
 * Check `code` is lower ascii letter
 *
 * @param code
 *
 * @example
 *
 *      isLowerAsciiLetter('a'.charCodeAt(0));  //=> true
 *      isLowerAsciiLetter('z'.charCodeAt(0));  //=> true
 *      isLowerAsciiLetter('A'.charCodeAt(0));  //=> false
 *      isLowerAsciiLetter('Z'.charCodeAt(0));  //=> false
 */
export function isLowerAsciiLetter(code: number): boolean {
  return code >= 97 && code <= 122;
}

export default isLowerAsciiLetter;
