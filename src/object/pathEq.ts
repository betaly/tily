import curryN from '../function/curryN';
import path from './path';
import {CurriedFunction2, Paths} from '../typings/types';

interface PathEq {
  (path: Paths, val, obj): boolean;

  (path: Paths, val): (obj) => boolean;

  (path: Paths): CurriedFunction2<any, any, boolean>;
}

/**
 * Determines whether a nested path on an object has a specific value
 *
 * @param {Array} paths The path of the nested property to use
 * @param {*} value The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value is the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = pathEq(['address', 'zipCode'], 90210);
 *      filter(isFamous, users); //=> [ user1 ]
 */
export const pathEq = curryN(3, (paths: Paths = [], value, obj = {}) => path(paths, obj) === value) as PathEq;

export default pathEq;
