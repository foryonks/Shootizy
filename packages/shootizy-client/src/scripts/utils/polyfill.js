// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty((Array || {}).prototype, "find", {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      let o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      let thisArg = arguments[1];

      // 5. Let k be 0.
      let k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true,
  });
}

/** Object.values polyfill */
if (!Object.values) {
  Object.values = function(obj) {
    var res = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        res.push(obj[i]);
      }
    }
    return res;
  };
}

if (!Array.prototype.fillMultiple) {
  Object.defineProperty((Array || {}).prototype, "fillMultiple", {
    value: function(number, fill) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      let o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      const cloned = this.slice();

      const modulo = len % number;
      if (modulo > 0) {
        let addLen = number - modulo;
        for (let i = 0; i < addLen; i++) {
          cloned.push(fill || {});
        }
      }

      // 7. Return undefined.
      return cloned;
    },
    configurable: true,
    writable: true,
  });
}
