import { useState, useEffect } from "react";
import _throttle from "lodash.throttle";

let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
      return true;
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

let getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

let defaultOptions = {
  throttle: 100,
};

function useWindowScrollPosition(options) {
  let opts = Object.assign({}, defaultOptions, options);

  let [position, setPosition] = useState(getPosition());

  useEffect(() => {
    let handleScroll = _throttle(() => {
      setPosition(getPosition());
    }, opts.throttle);

    window.addEventListener("scroll", handleScroll, supportsPassive ? { passive: true } : false);
    window.addEventListener("pageChange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pageChange", handleScroll);
    };
  });

  return position;
}

export default useWindowScrollPosition;
