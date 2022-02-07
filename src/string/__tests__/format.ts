import assert from 'assert';
import {format} from '../format';

describe('string/format', function () {
  test('format', () => {
    assert.strictEqual(format('Foo Bar'), 'Foo Bar');
    assert.strictEqual(format('Foo {0} Bar'), 'Foo {0} Bar');
    assert.strictEqual(format('Foo {0} Bar', 'yes'), 'Foo yes Bar');
    assert.strictEqual(format('Foo {0} Bar {0}', 'yes'), 'Foo yes Bar yes');
    assert.strictEqual(format('Foo {0} Bar {1}{2}', 'yes'), 'Foo yes Bar {1}{2}');
    assert.strictEqual(format('Foo {0} Bar {1}{2}', 'yes', undefined), 'Foo yes Bar undefined{2}');
    assert.strictEqual(format('Foo {0} Bar {1}{2}', 'yes', 5, false), 'Foo yes Bar 5false');
    assert.strictEqual(format('Foo {0} Bar. {1}', '(foo)', '.test'), 'Foo (foo) Bar. .test');
  });
});
