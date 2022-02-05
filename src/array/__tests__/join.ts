import join from '../join';

describe('array/join', () => {
  it('should return string with separated elements', () => {
    expect(join('|', [1, 2, 3])).toBe('1|2|3');
    expect(join('/', ['a', 'b', 'c'])).toBe('a/b/c');
    expect(join(',')([])).toBe('');
    expect(join('..')({0: 'a', 1: 'b', length: 2})).toBe('a..b');
  });
});
