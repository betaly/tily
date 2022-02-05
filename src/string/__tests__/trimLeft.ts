import trimLeft from '../trimLeft';

describe('string/trimLeft', () => {
  it('test', () => {
    expect(trimLeft('test')).toBe('test');
    expect(trimLeft('  aa ge \n')).toBe('aa ge \n');
  });
});
