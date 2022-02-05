/**
 * Escapes regular expression characters in a given string
 *
 * @param value
 *
 * @example
 *
 * escapeRegExpCharacters('/{([^}]+)}/g')); //=> '/\\{\\(\\[\\^\\}\\]\\+\\)\\}/g'
 */
export function escapeRegExpCharacters(value: string): string {
  return value.replace(/[\\{}*+?|^$.\[\]()]/g, '\\$&');
}
