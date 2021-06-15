/* eslint-disable no-console */
import map from 'tily/array/map';
import range from 'tily/array/range';
import drop from 'tily/array/drop';
import filter from 'tily/array/filter';
import sum from 'tily/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
