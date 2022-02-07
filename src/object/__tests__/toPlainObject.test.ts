import assert from 'assert';
import lodashStable from 'lodash';
import toPlainObject from '../toPlainObject';

describe('toPlainObject', function () {
  it('should flatten inherited string keyed properties', function () {
    function Foo() {
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const actual = lodashStable.assign({a: 1}, toPlainObject(new Foo()));

    assert.deepStrictEqual(actual, {a: 1, b: 2, c: 3});
  });

  it('should convert `arguments` objects to plain objects', function () {
    const actual = toPlainObject([1, 2, 3]);
    const expected = {'0': 1, '1': 2, '2': 3};

    assert.deepStrictEqual(actual, expected);
  });

  it('should convert arrays to plain objects', function () {
    const actual = toPlainObject(['a', 'b', 'c']);
    const expected = {'0': 'a', '1': 'b', '2': 'c'};

    assert.deepStrictEqual(actual, expected);
  });
});
