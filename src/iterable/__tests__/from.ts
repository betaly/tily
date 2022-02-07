import from from '../from';
import empty from '../empty';

describe('iterable/from', function () {
  it('from', function () {
    expect(from([])).toEqual([]);
    expect(from(null)).toEqual(empty());
    expect(from(undefined)).toEqual(empty());
  });
});
