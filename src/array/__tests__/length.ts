import length from '../length';

describe('array/length', () => {
  it('should return length of array', () => {
    expect(length([])).toBe(0);
    expect(length([1])).toBe(1);
    expect(length([1, 2, 3, 4, 5])).toBe(5);
  });
});
