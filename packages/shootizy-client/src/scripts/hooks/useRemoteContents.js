import { useState, useEffect, useCallback } from "react";

import { fetchJson } from "scripts/utils/api";

const useRemoteContents = (apiPath, autoLoad = true) => {
  const [loading, setLoading] = useState(!!autoLoad);
  const [contents, setContents] = useState(() => null);
  const load = useCallback(async () => {
    try {
      setLoading(true);
      const contents = await fetchJson(apiPath);
      setContents(contents);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoLoad) {
      load();
    }
  }, []);

  return {
    loading,
    contents,
    load,
  };
};

export default useRemoteContents;
