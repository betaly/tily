import once from '../once';

describe('function/once', () => {
  it('tes', () => {
    const f = jest.fn((x) => x + 1);
    const g = once(f);

    expect(g(2)).toBe(3);
    expect(g(3)).toBe(3);
    expect(g(5)).toBe(3);
    expect(f).toHaveBeenCalledTimes(1);
  });
});
