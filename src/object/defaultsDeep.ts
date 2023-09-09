import curryN from '../function/curryN';
import isPlainObject from '../is/plainObject';
import objectKeys from './keys';

export interface DefaultsDeep {
  <T1, T2>(a: T1, b: T2): T1 & T2;

  <T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;

  <T1>(a: T1): {
    <T2, T3>(b: T2, c: T3): T1 & T2 & T3;
    <T2>(b: T2): T1 & T2;
  };

  <T>(...args: T[]): T;
}

/**
 * This method is like 'defaults' except that it recursively assigns default properties.
 *
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 *      defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }); //=> { 'a': { 'b': 2, 'c': 3 } }
 */
export const defaultsDeep = curryN(2, (...sources: any[]) => {
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

      if (isPlainObject(res) && isPlainObject(value)) {
        result[key] = defaultsDeep(res, value);
      } else if (res === undefined) {
        result[key] = value;
      }
    }
  }

  return result;
}) as DefaultsDeep;

export default defaultsDeep;
