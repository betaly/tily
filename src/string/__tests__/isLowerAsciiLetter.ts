import {isLowerAsciiLetter} from '../isLowerAsciiLetter';

describe('string/isLowerAsciiLetter', function () {
  test('isLowerAsciiLetter', () => {
    expect(isLowerAsciiLetter('a'.charCodeAt(0))).toBe(true);
    expect(isLowerAsciiLetter('z'.charCodeAt(0))).toBe(true);
    expect(isLowerAsciiLetter('A'.charCodeAt(0))).toBe(false);
    expect(isLowerAsciiLetter('Z'.charCodeAt(0))).toBe(false);
  });
});
