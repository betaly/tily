import assert from 'assert';
import {truncate} from '../truncate';

describe('string/truncate', function() {
  test('truncate', () => {
    assert.strictEqual('hello world', truncate(100, 'hello world'));
    assert.strictEqual('hello…', truncate(5, 'hello world'));
    assert.strictEqual('你好…', truncate(2, '你好，世界'));
    assert.strictEqual('你好…', truncate(2)('你好，世界'));
  });
});
