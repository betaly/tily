import isUndefined from '../undefined';

describe('is/undefined', () => {
  it('test', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined(null)).toBe(false);
  });
});
