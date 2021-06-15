import defaults from '../defaults';

describe('utils/object/defaults', () => {
  it('should return assigned object', () => {
    const a = {a: 1, b: 2};
    const b: any = {c: 3};
    const c = {a: 4, c: 5, d: 8};

    expect(defaults(a, b)).toEqual({a: 1, b: 2, c: 3});
    b.a = 4;
    expect(defaults(a, b)).toEqual({a: 1, b: 2, c: 3});
    expect(defaults(a, b, c)).toEqual({a: 1, b: 2, c: 3, d: 8});
  });
});
