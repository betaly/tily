import curryN from './curryN';
import {Func} from '../typings/types';

export interface DebounceFunc<T extends () => any> {
  cancel: Function;

  (...args: Parameters<T>): void;
}

export interface Debounce {
  <F extends Func>(wait: number, fn: F): DebounceFunc<F>;

  (wait: number): <F extends Func>(fn: F) => DebounceFunc<F>;
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. Delayed function invocation might be cancelled by calling cancel method.
 *
 * @param {number} wait The number of milliseconds to delay.
 * @param {Function} fn The function to debounce.
 * @returns {Function} Returns the new debounced function.
 */
export const debounce = curryN(
  2,
  <F extends Func>(wait: number, fn: F): DebounceFunc<F> => {
    let timeout;

    function f() {
      let args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(
        () => fn.apply(this, args), // eslint-disable-line prefer-rest-params
        wait,
      );
    }

    f.cancel = () => clearTimeout(timeout);

    return f;
  },
) as Debounce;

export default debounce;
