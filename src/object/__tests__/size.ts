import size from '../size';

describe('object/size', () => {
  it('test', () => {
    expect(size({})).toBe(0);
    expect(size({a: 1, b: 2})).toBe(2);
    expect(size({a: 1, b: 3, c: 9})).toBe(3);
  });
});
