import trim from '../trim';

describe('string/trim', () => {
  it('test', () => {
    expect(trim('test')).toBe('test');
    expect(trim('  aa ge \n')).toBe('aa ge');
  });
});
