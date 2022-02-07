import converge from '../converge';
import curry from '../curry';

const add = curry((a, b) => a + b);

describe('converge', function () {
  const mult = function (a, b) {
    return a * b;
  };

  const f1 = converge(mult, [a => a, a => a]);
  const f2 = converge(mult, [a => a, (a, b) => b]);
  const f3 = converge(mult, [a => a, (a, b, c) => c]);

  it('passes the results of applying the arguments individually to two separate functions into a single one', function () {
    expect(converge(mult, [add(1), add(3)])(2)).toBe(15); // mult(add1(2), add3(2)) = mult(3, 5) = 3 * 15;
  });

  it('returns a function with the length of the "longest" argument', function () {
    expect(f1.length).toBe(1);
    expect(f2.length).toBe(2);
    expect(f3.length).toBe(3);
  });

  it('passes context to its functions', function () {
    const a = function (x) {
      return this.f1(x);
    };
    const b = function (x) {
      return this.f2(x);
    };
    const c = function (x, y) {
      return this.f3(x, y);
    };
    const d = converge(c, [a, b]);
    const context = {f1: add(1), f2: add(2), f3: add};
    expect(a.call(context, 1)).toBe(2);
    expect(b.call(context, 1)).toBe(3);
    expect(d.call(context, 1)).toBe(5);
  });

  it('returns a curried function', function () {
    expect(f2(6)(7)).toBe(42);
    // expect(f3(__).length.toBe(3);
  });

  it('works with empty functions list', function () {
    const fn = converge(function () {
      return arguments.length;
    }, []);
    expect(fn.length).toBe(0);
    expect(fn()).toBe(0);
  });
});
