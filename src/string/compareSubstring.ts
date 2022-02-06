/**
 * Compare two strings with start and end limited
 *
 * @param a
 * @param b
 * @param aStart
 * @param aEnd
 * @param bStart
 * @param bEnd
 *
 * @example
 *
 *      compareSubstring('abcd', 'abcde', 1, 3, 0, 2);  //=> 1
 *      compareSubstring('abcd', 'abcde', 1, 3, 1, 3);  //=> 0
 *      compareSubstring('abcd', 'abcde', 1, 3, 2, 4);  //=> -1
 */
export function compareSubstring(a: string, b: string, aStart: number = 0, aEnd: number = a.length, bStart: number = 0, bEnd: number = b.length): number {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);
    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}

export default compareSubstring;
