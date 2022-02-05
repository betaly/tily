/**
 * Truncate a string to `maxLength` and append a suffix.
 *
 * @param value
 * @param maxLength
 * @param suffix
 *
 * @example
 *
 *      truncate('hello world', 100);  //=> 'hello world'
 *      truncate('hello world', 5);    //=> 'hello...'
 *      truncate('你好，世界', 2);       //=> '你好…'
 */
export function truncate(value: string, maxLength: number, suffix = '…'): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.substring(0, maxLength)}${suffix}`;
}
