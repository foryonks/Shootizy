import { useState, useEffect, useCallback } from "react";

import { fetchJson } from "scripts/utils/api";

const CONTENTS_CACHE = {};

/**
 * Fetch remote contents
 * @param {string} apiPath remote api for fetching
 * @param {*} [initialState]
 * @param {boolean} [autoLoad]
 */
const useRemoteContents = (apiPath, initialState = null, autoLoad = true) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(initialState);
  const load = useCallback(
    async useCache => {
      try {
        setLoading(true);
        let newContents = useCache && CONTENTS_CACHE[apiPath];
        if (!newContents) {
          newContents = await fetchJson(apiPath);

          // Update cache
          CONTENTS_CACHE[apiPath] = newContents;
        }
        setContents(newContents);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [apiPath]
  );
  useEffect(() => {
    if (autoLoad) {
      load(true);
    }
  }, [apiPath]);

  return {
    loading,
    contents,
    load,
  };
};

export default useRemoteContents;
