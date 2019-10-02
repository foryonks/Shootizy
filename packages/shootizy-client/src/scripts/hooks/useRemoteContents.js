import { useState, useEffect, useCallback } from "react";

import { fetchJson } from "scripts/utils/api";

const CONTENTS_CACHE = {};

/**
 * Fetch remote contents
 * @param {string} apiPath remote api for fetching
 * @param {*} [initialState]
 * @param {boolean} [autoLoad]
 * @param {boolean} [defaultUseCache] use cache on init
 */
const useRemoteContents = (
  apiPath,
  {
    initialState = null,
    autoLoad = true,
    defaultUseCache = true,
    method,
    body,
    defaultContents,
  } = {}
) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(initialState);
  const load = useCallback(
    async useCache => {
      if (defaultContents) {
        return setContents(defaultContents);
      }
      try {
        setLoading(true);
        let newContents = useCache && CONTENTS_CACHE[apiPath];
        if (!newContents) {
          newContents = await fetchJson(apiPath, { method, body });
          // Update cache
          CONTENTS_CACHE[apiPath] = newContents;
        }
        setContents(newContents);
      } catch (e) {
        setContents(initialState);
      } finally {
        setLoading(false);
      }
    },
    [apiPath, body, defaultContents, initialState, method]
  );
  useEffect(() => {
    if (autoLoad) {
      load(defaultUseCache);
    }
  }, [apiPath, autoLoad, defaultUseCache, load]);

  return {
    loading,
    contents,
    load,
  };
};

export default useRemoteContents;
