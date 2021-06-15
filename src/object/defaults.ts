import curryN from '../function/curryN';
import objectKeys from './keys';

export interface Defaults {
  <T1, T2>(a: T1, b: T2): T1 & T2;

  <T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;

  <T1>(a: T1): {
    <T2, T3>(b: T2, c: T3): T1 & T2 & T3;
    <T2>(b: T2): T1 & T2;
  };

  <T>(...args: T[]): T;
}

/**
 * Assigns own and inherited enumerable string keyed properties of source objects to the destination object for
 * all destination properties that resolve to undefined. Source objects are applied from left to right.
 *
 * Once a property is set, additional values of the same property are ignored.
 *
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
export const defaults = curryN(2, (...sources: Record<any, any>[]) => {
  const result = sources[0] || {};

  for (let i = 1; i < sources.length; i++) {
    const src = sources[i];

    if (!src) {
      continue;
    }

    const keys = objectKeys(src);

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = src[key];
      const res = result[key];

      if (res === undefined) {
        result[key] = value;
      }
    }
  }

  return result;
}) as Defaults;
export default defaults;
