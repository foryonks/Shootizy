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
    onLoad = e => e,
    defaultUseCache = true,
    method,
    body,
    params,
  } = {}
) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(initialState);
  const load = useCallback(
    async useCache => {
      try {
        setLoading(true);
        let newContents = useCache && apiPath ? CONTENTS_CACHE[apiPath] : null;
        if (apiPath && !newContents) {
          newContents = await fetchJson(apiPath, { method, body, params });
          // Update cache
          CONTENTS_CACHE[apiPath] = newContents;
        }
        newContents = onLoad(newContents);
        setContents(newContents);
      } catch (e) {
        const result = onLoad(initialState);
        setContents(result);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line
    [apiPath]
  );
  useEffect(
    () => {
      if (autoLoad) {
        load(defaultUseCache);
      }
    },
    // eslint-disable-next-line
    [apiPath]
  );

  return {
    loading,
    contents,
    load,
  };
};

export default useRemoteContents;
