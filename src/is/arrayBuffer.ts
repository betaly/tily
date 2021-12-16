import isFunction from './function';

const { toString } = Object.prototype;

/**
 * Check if the given value is an ArrayBuffer.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an ArrayBuffer, else `false`.
 * @example
 * isArrayBuffer(new ArrayBuffer())
 * // => true
 * isArrayBuffer([])
 * // => false
 */
export const isArrayBuffer = (value: unknown): value is ArrayBuffer => isFunction(ArrayBuffer) && (value instanceof ArrayBuffer || toString.call(value) === '[object ArrayBuffer]');

export default isArrayBuffer;
