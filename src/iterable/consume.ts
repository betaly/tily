import empty from './empty';

/**
 * Consumes `atMost` elements from iterable and returns the consumed elements,
 * and an iterable for the rest of the elements.
 *
 * @param iterable The iterable target to consume
 * @param atMost The count at most to consume
 *
 * @example
 *
 *      consume([1, 2, 3, 4]);        //=> [[1, 2, 3, 4], Iterable<[]>]
 *      consume([1, 2, 3, 4], 2);     //=> [[1, 2], Iterable<[3, 4]>]
 */
export function consume<T>(iterable: Iterable<T>, atMost: number = Number.POSITIVE_INFINITY): [T[], Iterable<T>] {
  const consumed: T[] = [];

  if (atMost === 0) {
    return [consumed, iterable];
  }

  const iterator = iterable[Symbol.iterator]();

  for (let i = 0; i < atMost; i++) {
    const next = iterator.next();

    if (next.done) {
      return [consumed, empty()];
    }

    consumed.push(next.value);
  }

  return [
    consumed,
    {
      [Symbol.iterator]() {
        return iterator;
      },
    },
  ];
}
