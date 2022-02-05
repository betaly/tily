
/**
 * Removes all occurrences of needle from the beginning of haystack.
 *
 * @param haystack string to trim
 * @param needle the thing to trim
 *
 * @example
 *
 *      ltrim('abcabcHello', 'abc'); //=> 'Hello'
 *      ltrim('  Hello  ');          //=> 'Hello  '
 */
export function ltrim(haystack: string, needle: string = ' '): string {
  if (!haystack || !needle) {
    return haystack;
  }

  const needleLen = needle.length;
  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }

  let offset = 0;

  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }
  return haystack.substring(offset);
}
