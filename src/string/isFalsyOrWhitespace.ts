/**
 * Check a string is empty or blank.
 *
 * @param str
 *
 * @example
 *
 * isFalsyOrWhitespace('');           //=> true;
 * isFalsyOrWhitespace('  ');         //=> true;
 * isFalsyOrWhitespace(' hello ');    //=> false;
 *
 */
export function isFalsyOrWhitespace(str: string | undefined): boolean {
  if (!str || typeof str !== 'string') {
    return true;
  }
  return str.trim().length === 0;
}
