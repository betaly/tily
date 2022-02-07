import endsWith from '../endsWith';

describe('string/endsWith', () => {
  it('test', () => {
    expect(endsWith('c', 'abc')).toBe(true);
    expect(endsWith('b', 'abc')).toBe(false);
    expect(endsWith('abc', 'abc')).toBe(true);
    expect(endsWith('abcd', 'abc')).toBe(false);
  });
});
