import isArrayBuffer from '../arrayBuffer';

describe('isArrayBuffer', () => {
  it('test', () => {
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(false)).toBe(false);
    expect(isArrayBuffer(true)).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer(/a/g)).toBe(false);
    expect(isArrayBuffer(new RegExp('a', 'g'))).toBe(false);
    expect(isArrayBuffer(new Date())).toBe(false);
    expect(isArrayBuffer(42)).toBe(false);
    expect(isArrayBuffer(NaN)).toBe(false);
    expect(isArrayBuffer(Infinity)).toBe(false);
    expect(isArrayBuffer(Number(42))).toBe(false);
    expect(isArrayBuffer('foo')).toBe(false);
    expect(isArrayBuffer(Object('foo'))).toBe(false);
    expect(isArrayBuffer(function () {})).toBe(false);
    expect(isArrayBuffer(function* () {})).toBe(false);
    expect(isArrayBuffer(x => x * x)).toBe(false);
    expect(isArrayBuffer([])).toBe(false);

    expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true);
  });
});
