import {count} from '../count';

describe('string/count', function() {
  test('count', () => {
    expect(count('Hello World', 'o')).toBe(2);
    expect(count('Hello World', 'ok')).toBe(2);
  })
});
