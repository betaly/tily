import isNil from './nil';
import isArray from './array';
import isString from './string';
import isObject from './object';
import isIterable from './iterable';

/**
 * Checks if `test` is empty.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is empty, else `false`.
 * @example
 *
 *      isEmpty([]);            //=> true
 *      isEmpty(null);          //=> true
 *      isEmpty({});            //=> true
 *      isEmpty('');            //=> true
 *      isEmpty(new Set());     //=> true
 *
 *      isEmpty('test');        //=> false
 *      isEmpty({ a: 5 });      //=> false
 *      isEmpty([1]);           //=> false
 *      isEmpty(new Set([1]));  //=> false
 */
export const isEmpty = (test): boolean => {
  switch (true) {
    case isNil(test):
      return true;
    case isString(test):
      return test === '';
    case isArray(test):
      return test.length === 0;
    case isIterable(test):
      return test[Symbol.iterator]().next().done === true;
    case isObject(test):
      return Object.keys(test).length === 0;
  }

  return false;
};

export default isEmpty;
