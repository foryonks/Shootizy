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
  }, [apiPath]);
  console.log("apiPath", apiPath);
  useEffect(() => {
    console.log("useEffect load, autoload");
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
