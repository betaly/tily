/**
 * Counts how often `character` occurs inside `value`.
 *
 * @param value
 * @param character
 *
 * @example
 *
 *      count('Hello World', 'o'); //=> 2
 */
export function count(value: string, character: string): number {
  let result = 0;
  const ch = character.charCodeAt(0);
  for (let i = value.length - 1; i >= 0; i--) {
    if (value.charCodeAt(i) === ch) {
      result++;
    }
  }
  return result;
}
