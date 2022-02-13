import {Constructor} from '../typings/types';

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
 * import { isInstanceOf } from 'tily/is/instanceOf';
 *
 * if (isInstanceOf(error, Error)) {
 * 	console.log(error.stack);
 * }
 * ```
 *
 * Generics can be used to type the object being checked. This will default
 * to the declaration passed to the 2nd argument.
 *
 * ```ts
 * isInstanceOf<ParseError>(error, Error);
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
 *      isInstanceOf(undefined, Foo);           //=> false
 *      isInstanceOf(null, Foo);                //=> false
 *
 *      class Foo {}
 *      class Bar {}
 *
 *      isInstanceOf(new Foo(), Foo);           //=> true
 *      isInstanceOf(new Bar(), Foo);           //=> false
 *
 *      class Baz {}
 *      Object.defineProperty(Baz, 'name', { value: 'Foo' });
 *
 *      isInstanceOf(new Baz(), Foo);           //=> true
 *      isInstanceOf(new Baz(), Foo, false);    //=> false
 *
 *
 */
export function isInstanceOf<T = unknown>(
  target: unknown,
  declaration: Constructor<T>,
  loose: boolean = true,
): target is T {
  if (!target || typeof target !== 'object') {
    return false;
  }

  if (target instanceof declaration) {
    return true;
  }

  if (!loose) {
    return false;
  }

  let current = target;

  while (current) {
    if (current.constructor.name === 'Object') {
      break;
    }

    if (
      current.constructor.name === declaration.name ||
      // istanbul ignore next
      (current instanceof Error && current.name === declaration.name)
    ) {
      return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    current = Object.getPrototypeOf(current);
  }

  return false;
}

export default isInstanceOf;
