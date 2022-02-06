import {isUpperAsciiLetter} from '../isUpperAsciiLetter';

describe('string/isUpperAsciiLetter', function() {
  test('isUpperAsciiLetter', () => {
    expect(isUpperAsciiLetter('a'.charCodeAt(0))).toBe(false);
    expect(isUpperAsciiLetter('z'.charCodeAt(0))).toBe(false);
    expect(isUpperAsciiLetter('A'.charCodeAt(0))).toBe(true);
    expect(isUpperAsciiLetter('Z'.charCodeAt(0))).toBe(true);
  })
});
