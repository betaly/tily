import isBuffer from '../buffer';

describe('is/boolean', () => {
  it('test', () => {
    expect(isBuffer(Buffer.from([4]))).toBe(true);
    expect(isBuffer(Buffer.alloc(4))).toBe(true);
    expect(isBuffer(Buffer.allocUnsafeSlow(100))).toBe(true);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer('')).toBe(false);
    expect(isBuffer(true)).toBe(false);
    expect(isBuffer(false)).toBe(false);
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer(1)).toBe(false);
    expect(isBuffer(1.0)).toBe(false);
    expect(isBuffer('string')).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer([])).toBe(false);
    expect(isBuffer(function foo () {})).toBe(false);
    expect(isBuffer({ isBuffer: null })).toBe(false);
    expect(isBuffer({ isBuffer: function () { throw new Error() } })).toBe(false);
  });
});
