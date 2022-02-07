import assert from 'assert';
import {format2} from '../format2';

describe('string/format2', function () {
  test('format2', () => {
    assert.strictEqual(format2('Foo Bar', {}), 'Foo Bar');
    assert.strictEqual(format2('Foo {oops} Bar', {}), 'Foo {oops} Bar');
    assert.strictEqual(format2('Foo {foo} Bar', {foo: 'bar'}), 'Foo bar Bar');
    assert.strictEqual(format2('Foo {foo} Bar {foo}', {foo: 'bar'}), 'Foo bar Bar bar');
    assert.strictEqual(format2('Foo {foo} Bar {bar}{boo}', {foo: 'bar'}), 'Foo bar Bar {bar}{boo}');
    assert.strictEqual(
      format2('Foo {foo} Bar {bar}{boo}', {foo: 'bar', bar: 'undefined'}),
      'Foo bar Bar undefined{boo}',
    );
    assert.strictEqual(format2('Foo {foo} Bar {bar}{boo}', {foo: 'bar', bar: '5', boo: false}), 'Foo bar Bar 5false');
    assert.strictEqual(format2('Foo {foo} Bar. {bar}', {foo: '(foo)', bar: '.test'}), 'Foo (foo) Bar. .test');
  });
});
