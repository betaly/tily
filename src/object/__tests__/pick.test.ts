import pick from '../pick';

describe('object/pick', () => {
  it('return new object with picked properties', () => {
    expect(pick(['a', 'b'])({a: 3, b: 2, c: 1})).toEqual({a: 3, b: 2});
    expect(pick(['a', 'b'], {})).toEqual({});
    expect(pick(['a', 'b', 'c'])({a: 1, b: 2})).toEqual({a: 1, b: 2});
  });
});
