import assert from 'assert';
import {truncate} from '../truncate';

describe('string/truncate', function() {
  test('truncate', () => {
    assert.strictEqual('hello world', truncate('hello world', 100));
    assert.strictEqual('hello…', truncate('hello world', 5));
    assert.strictEqual('你好…', truncate('你好，世界', 2));
  });
});
