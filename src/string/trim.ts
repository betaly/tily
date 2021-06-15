/**
 * Removes leading and trailing whitespace from `str`.
 *
 * @param {String} str The string to trim.
 * @returns {String} Returns the trimmed string.
 * @example
 *
 * trim('  abc  '); // => 'abc'
 *
 */
export const trim = (str = '') => str.toString().trim() || '';

export default trim;