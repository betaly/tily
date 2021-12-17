import repeat from '../../array/repeat';
import fromCallback from '../fromCallback';

function greeter(options?: {
  error?: any;
  argsCount?: number;
}) {
  const throws = options?.error;
  const argsCount = options?.argsCount ?? 0;
  return (cb: (error: any, ...args: any[]) => void) => {
    if (throws) {
      cb(throws);
    } else if (argsCount === 0) {
      cb(null);
    } else if (argsCount > 0) {
      cb(null, ...repeat(argsCount, 'hi'));
    }
  };
}

function greetWithThis(cb: (error: any, ...args: any[]) => void) {
  cb(null, this);
}

describe('fromCallback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should handle error', function() {
    return expect(fromCallback(cb => greeter({
      error: new Error('A sample error'),
    })(cb))).rejects.toThrow('A sample error');
  });

  it('should handle empty argument', function() {
    return expect(fromCallback(cb => greeter({
      argsCount: 0,
    })(cb))).resolves.toBeUndefined();
  });

  it('should handle one argument', function() {
    return expect(fromCallback(cb => greeter({
      argsCount: 1,
    })(cb))).resolves.toBe('hi');
  });

  it('should handle multiple arguments', function() {
    return expect(fromCallback(cb => greeter({
      argsCount: 3,
    })(cb))).resolves.toEqual(['hi', 'hi', 'hi']);
  });

  it('should work with thisArg', async () => {
    const obj = {};
    const result = await fromCallback(function(cb) {
      greetWithThis.call(this, cb);
    }, obj);
    expect(result).toBe(obj);
  });

  it('should support promised fn', (done) => {
    fromCallback(async cb => {
      await new Promise(resolve => setTimeout(resolve, 100));
      cb();
    }).then(() => done());
    jest.advanceTimersByTime(1000);
  });

});
