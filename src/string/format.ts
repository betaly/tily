const _formatRegexp = /{(\d+)}/g;

/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 *
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 *
 * @example
 *
 *      format('Foo {0} Bar {1}{2}', 'yes');             //=> 'Foo yes Bar {1}{2}'
 *      format('Foo {0} Bar {1}{2}', 'yes', undefined);  //=> 'Foo yes Bar undefined{2}'
 *      format('Foo {0} Bar {1}{2}', 'yes', 5, false);   //=> 'Foo yes Bar 5false'
 *
 */
export function format(value: string, ...args: any[]): string {
  if (args.length === 0) {
    return value;
  }
  return value.replace(_formatRegexp, function (match, group) {
    const idx = parseInt(group, 10);
    return isNaN(idx) || idx < 0 || idx >= args.length ?
      match :
      args[idx];
  });
}
