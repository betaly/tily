/**
 * Simple runtime assertion that narrows involved types using assertion functions.
 *
 * Note: This function is not purely type level and leaves minimal runtime trace in generated code.
 *
 * @param condition
 * @param msg
 *
 * @example
 *
 * const something: string | undefined = "abc" as any;
 * assert(something, "Something has to be defined!");
 * // from now on `something` is string, if this wouldn't be a case, assert would throw
 *
 * const anything = "abc" as any;
 * assert(anything instanceof String, "anything has to be a string!");
 * // from now on `anything` is string
 *
 */
export function assert(
  condition: any,
  msg: string | Error | (() => string | Error) = 'no additional info provided',
): asserts condition {
  if (!condition) {
    if (msg instanceof Error) {
      throw msg;
    } else if (typeof msg === 'function') {
      const error = msg();
      if (error instanceof Error) {
        throw error;
      }
      msg = error;
    }

    throw new Error('Assertion Error: ' + msg);
  }
}
