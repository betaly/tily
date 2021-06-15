import type from './type';
import mapObj from './object/map';
import mapArr from './array/map';
import isReactElement from './is/reactElement';
import isReactComponent from './is/reactComponent';

interface Clone {
  <T>(x: T): T;
}

const cloneRegExp = (pattern: RegExp) =>
  new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
    (pattern.ignoreCase ? 'i' : '') +
    (pattern.multiline ? 'm' : '') +
    (pattern.sticky ? 'y' : '') +
    (pattern.unicode ? 'u' : ''),
  );

/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not
 * copied, but assigned by their reference.
 *
 * @param {*} x The value to clone
 * @return {*} A copy of a value.
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = clone(objects);
 *      objects[0] === objectsClone[0]; //=> false
 */
export const clone: Clone = <T>(x: T): T => {
  switch (type(x)) {
    case 'Object':
      // Skip clone react object
      if (isReactComponent(x) || isReactElement(x)) {
        break;
      } else {
        // @ts-ignore
        return mapObj(clone, x);
      }
    case 'Array':
      // @ts-ignore
      return mapArr(clone, x);
    case 'Date':
      // @ts-ignore
      return new Date(x.valueOf());
    case 'RegExp':
      // @ts-ignore
      return cloneRegExp(x);
  }

  return x;
};

export default clone;
