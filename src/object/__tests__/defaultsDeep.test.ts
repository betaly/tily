import defaultsDeep from '../defaultsDeep';

const React = require('react');

describe('object/defaultsDeep', () => {
  it('should deeply assign objects', () => {
    expect(defaultsDeep({a: 1}, {a: 2, b: 3})).toEqual({a: 1, b: 3});
    expect(defaultsDeep({a: [1, 2, 3]}, {a: [4, 5, 6, 7], b: 3})).toEqual({a: [1, 2, 3], b: 3});
    expect(defaultsDeep({a: 'test', b: {c: 3, d: 4}}, {b: {d: 5, f: 8}})).toEqual({
      a: 'test',
      b: {c: 3, d: 4, f: 8},
    });
    expect(defaultsDeep({a: 1}, null)).toEqual({a: 1});
    expect(defaultsDeep(undefined, {a: 3})).toEqual({a: 3});
    expect(defaultsDeep({a: undefined}, {a: 3})).toEqual({a: 3});
    expect(defaultsDeep({a: null}, {a: 3})).toEqual({a: null});
  });
});
