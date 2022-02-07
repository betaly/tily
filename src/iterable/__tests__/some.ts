import {some} from '../some';

describe('iterable/some', function () {
  it('some', function () {
    expect(some(n => n % 2 === 0, [1, 2, 3, 4])).toBe(true);
    expect(some(n => n % 5 === 0, [1, 2, 3, 4])).toBe(false);
  });
});
