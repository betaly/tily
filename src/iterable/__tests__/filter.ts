import {filter} from '../filter';
import {toArray} from './support';

describe('iterable/filter', function() {
  it('filter', function() {
    expect(toArray(filter(n => n % 2 === 0, [1, 2, 3, 4]))).toEqual([2, 4]);
  });
});
