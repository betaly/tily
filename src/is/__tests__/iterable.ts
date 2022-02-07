import {isIterable} from '../iterable';

describe('is/iterable', function() {
  test('isIterable', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable({})).toBe(false);
  });
});
