// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint8
es6id: 24.2.4.10
description: >
  Throws a RangeError if getIndex < 0
info: |
  24.2.4.10 DataView.prototype.getUint8 ( byteOffset )

  1. Let v be the this value.
  2. Return ? GetViewValue(v, byteOffset, true, "Uint8").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.getUint8(-1);
}, "-1");

assert.throws(RangeError, function() {
  sample.getUint8(-Infinity);
}, "-Infinity");