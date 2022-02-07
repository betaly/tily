import {first} from '../first';

describe('iterable/first', function() {
  it('first', function() {
    expect(first([1, 2, 3])).toEqual(1);
    expect(first(new Set([1, 2, 3]))).toEqual(1);
  });
});
