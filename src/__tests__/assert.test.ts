import {AssertTrue as Assert, IsExact} from 'conditional-type-checks';
import {assert} from '../assert';

describe('assert', function () {
  it('assert with default error message', function () {
    type TestType1 = string | undefined;
    type Expected = string;
    const anything = undefined as any as TestType1;
    expect(() => assert(anything)).toThrow();
    type Actual = typeof anything;
    type Test = Assert<IsExact<Actual, string>>;
  });

  it('assert with custom error instance', function () {
    type TestType1 = string | undefined;
    type Expected = string;
    const anything = undefined as any as TestType1;
    expect(() => assert(anything, new Error('custom error'))).toThrowError('custom error');
    type Actual = typeof anything;
    type Test = Assert<IsExact<Actual, string>>;
  });
});
