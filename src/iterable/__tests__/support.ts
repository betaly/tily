import assert from 'assert';
import isIterable from '../../is/iterable';

export function toArray<T>(iterable: Iterable<T>): T[] {
  assert(isIterable(iterable));
  const result: T[] = [];
  for (const element of iterable) {
    result.push(element);
  }
  return result;
}

export function toIterable<T>(arr: T[]): Iterable<T> {
  return arr[Symbol.iterator]();
}
