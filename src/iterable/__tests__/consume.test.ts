import {toIterable} from './support';
import {consume} from '../consume';
import empty from '../empty';

describe('iterable/consume', function () {
  it('consume', () => {
    expect(consume([1, 2, 3, 4])).toEqual([[1, 2, 3, 4], empty()]);
    expect(consume([1, 2, 3, 4], 2)).toEqual([[1, 2], toIterable([3, 4])]);
  });
});
