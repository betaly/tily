import curryN from '../function/curryN';

export interface Truncate {
  (maxLength: number, value: string, suffix?: string): string;
  (maxLength: number): (value: string, suffix?: string) => string;
}

/**
 * Truncate a string to `maxLength` and append a suffix.
 *
 * @param maxLength
 * @param value
 * @param suffix
 *
 * @example
 *
 *      truncate('hello world', 100);  //=> 'hello world'
 *      truncate('hello world', 5);    //=> 'hello…'
 *      truncate('你好，世界', 2);       //=> '你好…'
 */
export const truncate = curryN(2, (maxLength: number, value: string, suffix = '…') => {
  return value.length <= maxLength ? value : value.slice(0, maxLength) + suffix;
}) as Truncate;

export default truncate;
