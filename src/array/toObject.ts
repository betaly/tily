import curryN from '../function/curryN';
import {ArrBase} from '../typings/types';
import isEmpty from '../is/empty';

type MapKey = string | number;
type MapBy<T, K extends keyof T> = K | K[] | ArrBase<T, MapKey>;

interface ArrayToObject {
  <T, K extends keyof T>(mapBy: MapBy<T, K> | undefined | null, arr: ArrayLike<T>): Record<MapKey, T>;

  <T, K extends keyof T>(mapBy: MapBy<T, K> | undefined | null): (arr: ArrayLike<T>) => Record<MapKey, T>;
}

/**
 * Converts an array into an object.
 *
 * @param {Function|String|Array} mapBy The function invoked per element.
 * @param {Array} arr
 * @returns {Object} Returns the converted object.
 *
 * @comment
 *    This function is initially forked from https://github.com/theZieger/arrayToObject
 *
 * @example
 *
 *     // mapBy is a function
 *     toObject(x => x.id, [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {1: {id: 1, name: 'foo'}, 2: {id: 2, name: 'bar'}}
 *     toObject(x => x.id)([{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {1: {id: 1, name: 'foo'}, 2: {id: 2, name: 'bar'}}
 *
 *     // mapBy is a string
 *     toObject('id', [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {1: {id: 1, name: 'foo'}, 2: {id: 2, name: 'bar'}}
 *     toObject('id')([{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {1: {id: 1, name: 'foo'}, 2: {id: 2, name: 'bar'}}
 *
 *     // mapBy is an array
 *     toObject(['id', 'name'], [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {'1_foo': {id: 1, name: 'foo'}, '2_bar': {id: 2, name: 'bar'}}
 *     toObject(['id', 'name'])([{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {'1_foo': {id: 1, name: 'foo'}, '2_bar': {id: 2, name: 'bar'}}
 *
 *     // mapBy is undefined, null, '', [], or any other value
 *     toObject(null, [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {0: {id: 1, name: 'foo'}, 1: {id: 2, name: 'bar'}}
 *     toObject(undefined, [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {0: {id: 1, name: 'foo'}, 1: {id: 2, name: 'bar'}}
 *     toObject('', [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {0: {id: 1, name: 'foo'}, 1: {id: 2, name: 'bar'}}
 *     toObject([], [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]); //=> {0: {id: 1, name: 'foo'}, 1: {id: 2, name: 'bar'}}
 */
export const toObject = curryN(2, <T, K extends keyof T>(mapBy: MapBy<T, K> | undefined | null, arr: ArrayLike<T>) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr argument is not of type Array');
  }

  if (mapBy != null && typeof mapBy !== 'string' && !Array.isArray(mapBy) && typeof mapBy !== 'function') {
    throw new TypeError('mapBy argument is not of type {String|Array|Function}');
  }

  let result: Record<MapKey, T> = {};
  let keyFn: (key: unknown, val: T, index: number, arr: ArrayLike<T>) => MapKey;

  if (!isEmpty(mapBy)) {
    if (typeof mapBy === 'function') {
      keyFn = (key: unknown, val: T, index: number) => mapBy(val, index, arr);
    } else if (typeof mapBy === 'string') {
      keyFn = (key: string, val: T) => val[key];
    } else if (Array.isArray(mapBy)) {
      keyFn = (key: string, val: T) => mapBy.map(k => val[k]).join('_');
    }
  }

  if (!keyFn) {
    keyFn = (key: string, val: T, index) => index;
  }

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const key = keyFn(mapBy, val, i, arr);

    result[key] = val;
  }

  return result;
}) as ArrayToObject;

export default toObject;
