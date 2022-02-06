import {compareSubstring} from './compareSubstring';
import {isLowerAsciiLetter} from './isLowerAsciiLetter';

/**
 * Compare two strings ignore case with start and end limited
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
 *      compareSubstring('aBCd', 'AbcDE', 1, 3, 0, 2);  //=> 1
 *      compareSubstring('aBCd', 'AbcDE', 1, 3, 1, 3);  //=> 0
 *      compareSubstring('aBCd', 'AbcDE', 1, 3, 2, 4);  //=> -1
 */
export function compareSubstringIgnoreCase(a: string, b: string, aStart: number = 0, aEnd: number = a.length, bStart: number = 0, bEnd: number = b.length): number {

  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {

    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);

    if (codeA === codeB) {
      // equal
      continue;
    }

    if (codeA >= 128 || codeB >= 128) {
      // not ASCII letters -> fallback to lower-casing strings
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }

    // mapper lower-case ascii letter onto upper-case varinats
    // [97-122] (lower ascii) --> [65-90] (upper ascii)
    if (isLowerAsciiLetter(codeA)) {
      codeA -= 32;
    }
    if (isLowerAsciiLetter(codeB)) {
      codeB -= 32;
    }

    // compare both code points
    const diff = codeA - codeB;
    if (diff === 0) {
      continue;
    }

    return diff;
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

export default compareSubstringIgnoreCase;
