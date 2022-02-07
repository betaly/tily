import isEmpty from '../empty';

describe('is/empty', () => {
  it('test', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty({a: 5})).toBe(false);
    expect(isEmpty(5)).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty('t')).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });
});
