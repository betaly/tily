import noop from '../../function/noop';
import isPromise from '../promise';

describe('is/promise', () => {
  it('test', () => {
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise('fwafwf')).toBe(false);
    expect(isPromise(() => {
    })).toBe(false);
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise(Promise.reject().catch(noop))).toBe(true);
    expect(isPromise(new Promise((res) => res(1)))).toBe(true);
    const f = () => {
    };

    expect(isPromise(f)).toBe(false);
    f.then = () => {
    };
    expect(isPromise(f)).toBe(true);
  });
});
