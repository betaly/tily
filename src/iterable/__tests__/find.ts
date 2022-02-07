import find from '../find';

describe('iterable/find', function () {
  test('find', () => {
    expect(find(n => n % 2 === 0, new Set([1, 2, 3, 4]))).toBe(2);
    expect(find(n => n > 100, new Set([1, 2, 3, 4]))).toBeUndefined();
  });
});
