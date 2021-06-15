import allPass from '../allPass';

describe('utils/function/allPass', () => {
  it('should return true', () => {
    const f1 = jest.fn((x) => true);
    const f2 = jest.fn((x) => true);
    const f3 = jest.fn((x) => true);

    expect(allPass([f1, f2, f3], 1, 2, 3)).toBe(true);
    expect(f1).toBeCalledWith(1, 2, 3);
    expect(f2).toBeCalledWith(1, 2, 3);
    expect(f3).toBeCalledWith(1, 2, 3);
  });
  it('should return false', () => {
    const f1 = jest.fn((x) => true);
    const f2 = jest.fn((x) => false);
    const f3 = jest.fn((x) => true);

    expect(allPass([f1, f2, f3], 1, 2, 3)).toBe(false);
    expect(f1).toBeCalledWith(1, 2, 3);
    expect(f2).toBeCalledWith(1, 2, 3);
    expect(f3).not.toBeCalled();
  });
});
