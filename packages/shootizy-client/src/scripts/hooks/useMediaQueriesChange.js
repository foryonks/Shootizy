import { useState, useEffect } from "react";
import _throttle from "lodash.throttle";

const supportsPassive = false;

let getMode = () => {
  return {
    mode: getComputedStyle(document.body, ":before").content,
    width: window.innerWidth,
  };
};
let defaultOptions = {
  throttle: 300,
};

function useMediaQueriesChange(options) {
  let opts = Object.assign({}, defaultOptions, options);
  let [mode, setMode] = useState(getMode());

  useEffect(() => {
    let handleResize = _throttle(() => {
      setMode(getMode());
    }, opts.throttle);

    window.addEventListener("resize", handleResize, supportsPassive ? { passive: true } : false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [opts.throttle]);
  return mode;
}

export default useMediaQueriesChange;
