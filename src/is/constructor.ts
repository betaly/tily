import {Constructor} from '../typings/types';

/**
 *
 * Check if a function is a constructor
 *
 * https://stackoverflow.com/a/46759625
 *
 * @param f The function target to check
 * @return {boolean} Ture for constructor, False for not
 *
 * @example
 *      // true
 *      isConstructor(function(){});
 *      isConstructor(class A {});
 *      isConstructor(Array);
 *      isConstructor(Function);
 *      isConstructor(new Function);
 *
 *      // false
 *      isConstructor();
 *      isConstructor(undefined);
 *      isConstructor(null);
 *      isConstructor(1);
 *      isConstructor(new Number(1));
 *      isConstructor(Array.prototype);
 *      isConstructor(Function.prototype);
 *      isConstructor(() => {})
 *      isConstructor({method() {}}.method)
 *
 */
export function isConstructor(f: unknown): f is Constructor {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Reflect.construct(String, [], f);
    return true;
  } catch (e) {
    return false;
  }
}
