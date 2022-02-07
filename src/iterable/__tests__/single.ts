import {single} from '../single';

describe('iterable/single', function() {
  it('single', function() {
    const it = single(1);
    expect(it[Symbol.iterator]().next().value).toEqual(1);
    expect(it[Symbol.iterator]().next().value).toBeUndefined();
  });
});
