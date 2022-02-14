import {isInstance} from '../instance';

describe('isInstanceOf()', () => {
  class Foo {}

  class Bar {}

  it('returns false if object is falsy', () => {
    expect(isInstance(Foo, undefined)).toBe(false);
    expect(isInstance(Foo, null)).toBe(false);
  });

  it('returns true if object extends declaration', () => {
    expect(isInstance(Foo, new Foo())).toBe(true);
  });

  it('returns false if object does not extend declaration', () => {
    expect(isInstance(Foo, new Bar())).toBe(false);
  });

  it('returns true if object does not extend declaration, but names match', () => {
    class Baz {}

    Object.defineProperty(Baz, 'name', {value: 'Foo'});
    expect(isInstance(Foo, new Baz())).toBe(true);
    expect(isInstance(Foo)(new Baz())).toBe(true);
  });

  it('returns false if object does not extend declaration, but names match, but loose is disabled', () => {
    class Baz {}
    Object.defineProperty(Baz, 'name', {value: 'Foo'});
    expect(isInstance(Foo, new Baz(), false)).toBe(false);
    expect(isInstance(Foo)(new Baz(), false)).toBe(false);
  });
});
