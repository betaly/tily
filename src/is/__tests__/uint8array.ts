import isUint8Array from '../uint8array';

describe('isUint8Array', function() {
  it('test', function() {
    expect(isUint8Array('5')).toBe(false);
      expect(isUint8Array(5,)).toBe(false);
      expect(isUint8Array(NaN,)).toBe(false);
      expect(isUint8Array(true,)).toBe(false);
      expect(isUint8Array(null,)).toBe(false);
      expect(isUint8Array(void 0,)).toBe(false);
      expect(isUint8Array([],)).toBe(false);
      expect(isUint8Array({},)).toBe(false);
      expect(isUint8Array(function noop() {},)).toBe(false);
      expect(isUint8Array(new Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Float64Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Float32Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Uint32Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Int32Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Uint16Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Int16Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Int8Array( 10 ),)).toBe(false);
      expect(isUint8Array(new Uint8ClampedArray( 10 ))).toBe(false);

      expect(isUint8Array(new Uint8Array(10))).toBe(true);
  });
});
