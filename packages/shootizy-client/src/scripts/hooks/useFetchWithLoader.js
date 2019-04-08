import { useState, useCallback } from "react";

/**
 * Returns loading state, fetchWithLoader function, error message
 * @param {function} apiFunction fetch function
 * @param {string} defaultErrorMessage fetch function
 * @param {boolean}
 */
export default (
  apiFunction,
  defaultErrorMessage = "Une erreur est survenue, veuillez réessayer plus tard !"
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWithLoader = useCallback(async (...args) => {
    try {
      setLoading(true);
      const result = await apiFunction(...args);
      setLoading(false);
      return result;
    } catch (e) {
      setError(error.isCustomError ? error.message : defaultErrorMessage);
      setLoading(false);
      throw e;
    }
  }, []);

  return {
    loading,
    fetchWithLoader,
    error,
  };
};
