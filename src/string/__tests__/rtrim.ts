import assert from 'assert';
import {rtrim} from '../rtrim';

describe('string/rtrim', () => {
  test('rtrim', () => {
    assert.strictEqual(rtrim('foo', 'o'), 'f');
    assert.strictEqual(rtrim('foo', 'f'), 'foo');
    assert.strictEqual(rtrim('http://www.test.com', '.com'), 'http://www.test');
    assert.strictEqual(rtrim('/foo/', '/'), '/foo');
    assert.strictEqual(rtrim('/foo//', '/'), '/foo');
    assert.strictEqual(rtrim('/', ''), '/');
    assert.strictEqual(rtrim('/', '/'), '');
    assert.strictEqual(rtrim('///', '/'), '');
    assert.strictEqual(rtrim('', ''), '');
    assert.strictEqual(rtrim('', '/'), '');
  });

})
