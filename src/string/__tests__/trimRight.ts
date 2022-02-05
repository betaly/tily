import trimRight from '../trimRight';

describe('string/trimRight', () => {
  it('test', () => {
    expect(trimRight('test')).toBe('test');
    expect(trimRight('  aa ge \n')).toBe('  aa ge');
  });
});
