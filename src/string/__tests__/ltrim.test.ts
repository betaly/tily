import assert from 'assert';
import {ltrim} from '../ltrim';

describe('string/ltrim', function () {
  test('ltrim', () => {
    assert.strictEqual(ltrim('foo', 'f'), 'oo');
    assert.strictEqual(ltrim('foo', 'o'), 'foo');
    assert.strictEqual(ltrim('http://www.test.com', 'http://'), 'www.test.com');
    assert.strictEqual(ltrim('/foo/', '/'), 'foo/');
    assert.strictEqual(ltrim('//foo/', '/'), 'foo/');
    assert.strictEqual(ltrim('/', ''), '/');
    assert.strictEqual(ltrim('/', '/'), '');
    assert.strictEqual(ltrim('///', '/'), '');
    assert.strictEqual(ltrim('', ''), '');
    assert.strictEqual(ltrim('', '/'), '');
  });
});
