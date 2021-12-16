import isFunction from './function';

const { toString } = Object.prototype;

/**
 * Check if the given value is an Uint8Array.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an Uint8Array, else `false`.
 * @example
 * isUint8Array(new Uint8Array(8))
 * // => true
 * isUint8Array([])
 * // => false
 */
export const isUint8Array = (value: unknown): value is Uint8Array => isFunction(Uint8Array) && (value instanceof Uint8Array || toString.call(value) === '[object Uint8Array]');

export default isUint8Array;
