export interface FromCallbackOptions {
  multiArgs: boolean;
}

/**
 * Returns a promise that is resolved by a node style callback function. This is the most fitting way to do on the fly
 * promisification when libraries don't expose classes for automatic promisification by undefined.
 *
 * The resolver function is passed a callback that expects to be called back according to error-first node conventions.
 *
 * Setting multiArgs to true means the resulting promise will always fulfill with an array of the callback's success
 * value(s). This is needed because promises only support a single success value while some callback API's have multiple
 * success value. The default is to ignore all but the first success value of a callback function.
 *
 * @param fn
 * @param thisArg
 * @example
 *
 * const fs = require('fs');
 *
 * fromCallback(callback => fs.readFile('filename.txt', callback))
 *   .then(buffer => buffer.toString().trim());
 *   // ...
 *
 */
export const fromCallback = (
  fn: (callback: (err?: any, ...args: any[]) => any) => any | Promise<any>,
  thisArg?: any,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn.call(thisArg, (err: any, ...args: any[]) => {
      if (err) {
        reject(err);
      } else {
        if (args.length <= 1) {
          resolve(args[0]);
        } else {
          resolve(args);
        }
      }
    });
  });
};

export default fromCallback;
