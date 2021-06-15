const unescapeRegExp = /&(?:amp|lt|gt|quot|#39);/g;

const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': '\'',
};
const replace = (char) => htmlUnescapes[char];

/**
 * The inverse of `escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * @param {string} str The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * unescape('fred, barney, &amp; pebbles'); // => 'fred, barney, & pebbles'
 */
export const unescape = (str = '') => str.replace(unescapeRegExp, replace);

export default unescape;
