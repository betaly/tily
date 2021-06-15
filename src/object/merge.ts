import curryN from '../function/curryN';

export interface Merge {
  <T1, T2>(a: T1, b: T2): T1 & T2;

  <T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;

  <T1>(a: T1): {
    <T2, T3>(b: T2, c: T3): T1 & T2 & T3;
    <T2>(b: T2): T1 & T2;
  };

  <T>(...args: T[]): T;
}

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the others objects. If a key exists in several objects,
 * the value from the last object will be used.
 *
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }); //=> { 'name': 'fred', 'age': 40 }
 */
export const merge = curryN(2, (target: Record<any, any>, ...sources: Record<any, any>[]) => Object.assign(target, ...sources)) as Merge;
export default merge;
