import {compare} from '../compare';

describe('string/compare', function () {
  it('compare', function () {
    expect(compare('abc', 'bbc')).toBe(-1);
    expect(compare('abc', 'aac')).toBe(1);
    expect(compare('abc', 'abc')).toBe(0);
  });
});
