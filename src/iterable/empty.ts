const _empty: Iterable<any> = Object.freeze([]);

/**
 * Returns an empty iterable
 */
export function empty<T = any>(): Iterable<T> {
  return _empty;
}

export default empty;
