/**
 * Removes ending whitespace from `str`.
 *
 * @param {String} str The string to trim.
 * @returns {String} Returns the trimmed string.
 * @example
 *
 *      trimRight('  abc  '); // => 'abc   '
 *
 */
export const trimRight = (str = '') => str.replace(/[\s\uFEFF\xA0]+$/g, '');

export default trimRight;
