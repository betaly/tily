import {escapeRegExpCharacters} from '../escapeRegExpCharacters';

describe('string/escapeRegExpCharacters', function () {
  test('escapeRegExpCharacters', () => {
    expect(escapeRegExpCharacters('/{([^}]+)}/g')).toEqual('/\\{\\(\\[\\^\\}\\]\\+\\)\\}/g');
  });
});
