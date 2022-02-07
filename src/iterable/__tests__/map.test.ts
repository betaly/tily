import {map} from '../map';
import {toArray} from './support';

describe('iterable/map', function () {
  it('map', () => {
    expect(toArray(map(n => 2 * n, [1, 2, 3, 4]))).toEqual([2, 4, 6, 8]);
  });
});
