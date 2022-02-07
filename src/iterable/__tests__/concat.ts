import concat from '../concat';
import {toArray} from './support';

describe('iterable/concat', function () {
  it('concat', () => {
    expect(toArray(concat([4, 5, 6], [1, 2, 3]))).toEqual([4, 5, 6, 1, 2, 3]);
    expect(toArray(concat([], []))).toEqual([]);
  });
});
