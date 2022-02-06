import {equalsIgnoreCase} from '../equalsIgnoreCase';

describe('string/equalsIgnoreCase', function() {
  test('equalsIgnoreCase', () => {
    expect(equalsIgnoreCase('abc', 'AbC')).toBe(true);
    expect(equalsIgnoreCase('abc', 'AbD')).toBe(false);
  })
});
