import useMediaQueryHook from "react-hook-media-query";

export const headerMobile = "(max-width:800px)";
export const phone = "(max-width: 720px)";
export const tablet = "(max-width: 1200px)";
export const desktopStandard = "(max-width: 1400px)";

function useMediaQuery(options) {
  return useMediaQueryHook(options);
}

export default useMediaQuery;
