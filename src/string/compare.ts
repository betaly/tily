/**
 * Compare two strings.
 *
 * Returns -1 if `a` lower than `b`
 * Returns 1 of `a` greater than `b`
 * Returns 0 if `a` equals `b`
 *
 * @param a
 * @param b
 *
 * @example
 *
 *      compare('abc', 'bbc'); //=> -1
 *      compare('abc', 'aac'); //=> 1
 *      compare('abc', 'abc'); //=> 0
 */
export function compare(a: string, b: string): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
