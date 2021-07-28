import {Iterable} from '../iterator';

describe('Iterable', function () {
  const customIterable = new (class {
    *[Symbol.iterator]() {
      yield 'one';
      yield 'two';
      yield 'three';
    }
  })();

  it('first', function () {
    expect(Iterable.first([])).toEqual(undefined);
    expect(Iterable.first([1])).toEqual(1);
    expect(Iterable.first(customIterable)).toEqual('one');
    expect(Iterable.first(customIterable)).toEqual('one'); // fresh
  });
});
