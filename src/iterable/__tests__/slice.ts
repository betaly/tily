import {toArray} from './support';
import {slice} from '../slice';

describe('iterable/slice', function () {
  it('slice', function () {
    expect(toArray(slice(1, 3, ['a', 'b', 'c', 'd']))).toEqual(['b', 'c']);
    expect(toArray(slice(1, Infinity, ['a', 'b', 'c', 'd']))).toEqual(['b', 'c', 'd']);
    expect(toArray(slice(0, -1, ['a', 'b', 'c', 'd']))).toEqual(['a', 'b', 'c']);
    expect(toArray(slice(-3, -1, ['a', 'b', 'c', 'd']))).toEqual(['b', 'c']);
  });
});
