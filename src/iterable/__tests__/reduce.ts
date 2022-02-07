import reduce from '../reduce';

describe('iterable/reduce', function() {
  it('reduce', () => {
    const numbers = [1, 2, 3];
    const plus = (a, b) => a + b;
    expect(reduce(plus, 10, numbers)).toBe(16);
  })
});
