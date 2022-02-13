import isInstanceOf from '../instanceOf';

describe('isInstanceOf()', () => {
  class Foo {}
  class Bar {}

  it('returns false if object is falsy', () => {
    expect(isInstanceOf(undefined, Foo)).toBe(false);
    expect(isInstanceOf(null, Foo)).toBe(false);
  });

  it('returns true if object extends declaration', () => {
    expect(isInstanceOf(new Foo(), Foo)).toBe(true);
  });

  it('returns false if object does not extend declaration', () => {
    expect(isInstanceOf(new Bar(), Foo)).toBe(false);
  });

  it('returns true if object does not extend declaration, but names match', () => {
    class Baz {}

    Object.defineProperty(Baz, 'name', {value: 'Foo'});

    const similar = new Baz();

    expect(isInstanceOf(similar, Foo)).toBe(true);
  });

  it('returns false if object does not extend declaration, but names match, but loose is disabled', () => {
    class Baz {}

    Object.defineProperty(Baz, 'name', {value: 'Foo'});

    const similar = new Baz();

    expect(isInstanceOf(similar, Foo, false)).toBe(false);
  });
});
