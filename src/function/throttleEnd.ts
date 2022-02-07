import curryN from './curryN';
import {Throttle, ThrottleFunc} from './throttle';
import {Func} from '../typings/types';

/**
 * Creates a throttled function that only invokes `fn` at most once per
 * every `wait` milliseconds. `fn` is called in the end of `wait` delay
 *
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @param {Function} fn The function to throttle.
 */
export const throttleEnd = curryN(2, <F extends Func>(wait: number, fn: F): ThrottleFunc<F> => {
  let lastCalled;
  let lastArgs;
  let lastThis;
  let timeout;

  return function (...args) {
    const now = Date.now();
    const diff = lastCalled + wait - now;

    if (diff < 0 && timeout) {
      clearTimeout(timeout);
      timeout = null;
      fn.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(lastThis, lastArgs);
        timeout = null;
      }, wait);
    }

    lastCalled = now;
    lastArgs = args;
    lastThis = this;
  };
}) as Throttle;

export default throttleEnd;
