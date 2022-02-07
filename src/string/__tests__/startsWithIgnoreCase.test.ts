import {startsWithIgnoreCase} from '../startsWithIgnoreCase';

describe('string/startsWithIgnoreCase', () => {
  it('test', () => {
    expect(startsWithIgnoreCase('a', 'abc')).toBe(true);
    expect(startsWithIgnoreCase('B', 'abc')).toBe(false);
    expect(startsWithIgnoreCase('abc', 'ABC')).toBe(true);
    expect(startsWithIgnoreCase('abcd', 'ABC')).toBe(false);
  });
});
