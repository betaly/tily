import {isConstructor} from '../constructor';

describe('is/constructor', () => {
  it('should return true for Constructor', () => {
    expect(isConstructor(function () {})).toBe(true);
    expect(isConstructor(class A {})).toBe(true);
    expect(isConstructor(Array)).toBe(true);
    expect(isConstructor(Function)).toBe(true);
    expect(isConstructor(new Function())).toBe(true);
  });

  it('should return false otherwise', () => {
    // @ts-ignore
    expect(isConstructor()).toBe(false);
    expect(isConstructor(undefined)).toBe(false);
    expect(isConstructor(null)).toBe(false);
    expect(isConstructor(1)).toBe(false);
    expect(isConstructor(new Number(1))).toBe(false);
    expect(isConstructor(Array.prototype)).toBe(false);
    expect(isConstructor(Function.prototype)).toBe(false);
    expect(isConstructor(() => {})).toBe(false);
    expect(isConstructor({method() {}}.method)).toBe(false);
  });
});
