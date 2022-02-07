import isIterable from '../../is/iterable';

export function toArray<T>(iterable: Iterable<T>): T[] {
  expect(isIterable(iterable)).toBe(true);
  const result: T[] = [];
  for (const element of iterable) {
    result.push(element);
  }
  return result;
}
