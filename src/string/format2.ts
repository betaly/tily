const _format2Regexp = /{([^}]+)}/g;

/**
 * Helper to create a string from a template and a string record.
 * Similar to `format` but with objects instead of positional arguments.
 *
 * @param template
 * @param values
 *
 * @example
 *
 *      format2('Foo {foo} Bar {bar}{boo} {{kong}}', { foo: 'bar' });                       //=> 'Foo bar Bar {bar}{boo} {{kong}}'
 *      format2('Foo {foo} Bar {bar}{boo} {{kong}}', { foo: 'bar', bar: 'undefined' });     //=> 'Foo bar Bar undefined{boo} {{kong}}'
 *      format2('Foo {foo} Bar {bar}{boo} {{kong}}', { foo: 'bar', bar: '5', boo: false }); //=> 'Foo bar Bar 5false {{kong}}'
 */
export function format2(template: string, values: Record<string, unknown>): string {
  return template.replace(_format2Regexp, (match, group) => (values[group] ?? match) as string);
}
