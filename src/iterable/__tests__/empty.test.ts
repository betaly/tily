import {empty} from '../empty';
import isIterable from '../../is/iterable';

describe('iterable/empty', function () {
  it('empty', function () {
    expect(empty()).toBeInstanceOf(Object);
    expect(isIterable(empty())).toBe(true);
  });
});
