const regexEscape = /[\\^$.*+?()[\]{}|]/g;

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @param {string} str The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * escapeRegExp('[test](utils)'); // => '\[test\]\(utils\)'
 */
export const escapeRegExp = (str = '') => str.replace(regexEscape, '\\$&');

export default escapeRegExp;
