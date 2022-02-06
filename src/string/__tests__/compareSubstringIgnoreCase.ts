import {compareSubstringIgnoreCase} from '../compareSubstringIgnoreCase';

describe('string/compareSubstringIgnoreCase', function() {
  it('compareSubstringIgnoreCase', function() {
    expect(compareSubstringIgnoreCase('aBCd', 'AbcDE', 1, 3, 0, 2)).toBe(1);
    expect(compareSubstringIgnoreCase('aBCd', 'AbcDE', 1, 3, 1, 3)).toBe(0);
    expect(compareSubstringIgnoreCase('aBCd', 'AbcDE', 1, 3, 2, 4)).toBe(-1);
  });
});
