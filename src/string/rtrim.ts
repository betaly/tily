
/**
 * Removes all occurrences of needle from the end of haystack.
 *
 * @param haystack string to trim
 * @param needle the thing to trim
 *
 * @example
 *
 *      rtrim('Helloabcabc', 'abc'); //=> 'Hello'
 *      rtrim('  Hello  ');          //=> '  Hello'
 *
 */
export function rtrim(haystack: string, needle: string = ' '): string {
  if (!haystack || !needle) {
    return haystack;
  }

  const needleLen = needle.length,
    haystackLen = haystack.length;

  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }

  let offset = haystackLen,
    idx = -1;

  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);
    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }
    if (idx === 0) {
      return '';
    }
    offset = idx;
  }

  return haystack.substring(0, offset);
}
