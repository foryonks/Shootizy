import { useState, useEffect, useCallback } from "react";

import { fetchJson } from "scripts/utils/api";

const contentsCache = {};

const useRemoteContents = (apiPath, autoLoad = true) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(() => null);

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
