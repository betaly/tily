import {toArray} from './support';
import {consume} from '../consume';

describe('iterable/consume', function () {
  it('consume', () => {
    let consumed;
    let remained;
    const arr = [1, 2, 3, 4];

    [consumed, remained] = consume(arr);
    expect(consumed).toEqual([1, 2, 3, 4]);
    expect(toArray(remained)).toEqual([]);

    [consumed, remained] = consume(arr, 2);
    expect(consumed).toEqual([1, 2]);
    expect(toArray(remained)).toEqual([3, 4]);

    [consumed, remained] = consume(arr, 0);
    expect(consumed).toEqual([]);
    expect(toArray(remained)).toEqual([1, 2, 3, 4]);
  });
});
