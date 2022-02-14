import {Constructor} from '../typings/types';
import curryN from '../function/curryN';
import isInstanceOf from './instanceOf';

export interface IsInstance {
  <T = unknown>(declaration: Constructor<T>, target: unknown, loose?: boolean): target is T;
  <T = unknown>(declaration: Constructor<T>): (target: unknown, loose?: boolean) => target is T;
}

/**
 * Native `instanceof` checks are problematic, as cross realm checks fail.
 * They will also fail when comparing against source and built files.
 * So emulate an `instanceof` check by comparing constructor names.
 */

/**
 * Performs a loose instance check by comparing class names up the prototype
 * chain if `instanceof` initially fails. To disable this loose check,
 * pass `false` as the 3rd argument.
 *
 * ```ts
 * import { isInstance } from 'tily/is/instance';
 *
 * if (isInstance(Error, error)) {
 * 	console.log(error.stack);
 * }
 * ```
 *
 * Generics can be used to type the object being checked. This will default
 * to the declaration passed to the 2nd argument.
 *
 * ```ts
 * isInstance<ParseError>(Error, error);
 * ```
 *
 * > Loose checks can be useful if multiple copies of the same class declaration
 * > exists in the module tree. For example, multiple versions of the same package are imported.
 *
 * @param target The object to check
 * @param declaration The constructor
 * @param loose Whether use loose checks. Default is true.
 *
 * @example
 *
 *      isInstance(Foo, undefined);           //=> false
 *      isInstance(Foo, null);                //=> false
 *
 *      class Foo {}
 *      class Bar {}
 *
 *      isInstance(Foo, new Foo());           //=> true
 *      isInstance(Foo, new Bar());           //=> false
 *
 *      class Baz {}
 *      Object.defineProperty(Baz, 'name', { value: 'Foo' });
 *
 *      isInstance(Foo, new Baz());           //=> true
 *      isInstance(Foo, new Baz(), false);    //=> false
 *
 *      const isFoo = isInstance(Foo);
 *
 *      isFoo(new Baz());                     //=> true
 *      isFoo(new Baz(), false);              //=> false
 *
 */
export const isInstance = curryN(
  2,
  <T = unknown>(declaration: Constructor<T>, target: unknown, loose: boolean = true) =>
    isInstanceOf(target, declaration, loose),
) as IsInstance;

export default isInstance;
