/**
 * Returns the capitalized version of a string.
 *
 * @param {String} str The string to capitalize.
 * @return {String} The capitalized version of `str`.
 * @example
 *
 *      capitalize('xyz'); //=> 'Xyz'
 */
export const capitalize = (str = '') => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;

export default capitalize;
