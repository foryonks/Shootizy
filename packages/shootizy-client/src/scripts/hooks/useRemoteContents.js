import { useState, useEffect, useCallback } from "react";

import { fetchJson } from "scripts/utils/api";

const contentsCache = {};

/**
 * Fetch remote contents
 * @param {string} apiPath remote api for fetching
 * @param {*} [initialState]
 * @param {boolean} [autoLoad]
 */
const useRemoteContents = (apiPath, initialState = null, autoLoad = true) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(initialState);
  const load = useCallback(async () => {
    try {
      setLoading(true);
      if (contentsCache[apiPath]) {
        setContents(contentsCache[apiPath]);
      } else {
        const contents = await fetchJson(apiPath);
        contentsCache[apiPath] = contents;
        setContents(contents);
      }
      const contents = await fetchJson(apiPath);
      contentsCache[apiPath] = contents;
      setContents(contents);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [apiPath]);
  useEffect(() => {
    if (autoLoad) {
      load();
    }
  }, [apiPath]);

  return {
    loading,
    contents,
    load,
  };
};

export default useRemoteContents;
