import {compareSubstring} from '../compareSubstring';

describe('string/compareSubstring', function() {
  it('compareSubstring', function() {
    expect(compareSubstring('abcd', 'abcde', 1, 3, 0, 2)).toBe(1);
    expect(compareSubstring('abcd', 'abcde', 1, 3, 1, 3)).toBe(0);
    expect(compareSubstring('abcd', 'abcde', 1, 3, 2, 4)).toBe(-1);
  });
});
