/**
 * Determine if an object is a Buffer (including the browserify Buffer).
 *
 * This function is from https://github.com/feross/is-buffer
 *
 * @param {*} test
 * @returns {boolean} Returns `true` if `value` is a Buffer, else `false`.
 * @example
 *
 *      isBuffer(new Buffer(4))       //=> true
 *      isBuffer(Buffer.alloc(4))     //=> true
 *
 *      isBuffer(undefined)           //=> false
 *      isBuffer(null)                //=> false
 *      isBuffer('')                  //=> false
 *      isBuffer(true)                //=> false
 *      isBuffer(false)               //=> false
 *      isBuffer(0)                   //=> false
 *      isBuffer(1)                   //=> false
 *      isBuffer(1.0)                 //=> false
 *      isBuffer('string')            //=> false
 *      isBuffer({})                  //=> false
 *      isBuffer(function foo () {})  //=> false
 */
export const isBuffer = (test: any): test is Buffer =>
  test != null &&
  test.constructor != null &&
  typeof test.constructor.isBuffer === 'function' &&
  test.constructor.isBuffer(test);

export default isBuffer;
