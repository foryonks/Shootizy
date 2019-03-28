/**
 * Fetch with managing errors
 * @param {string} path Path to the resource (starting with ‘/’)
 * @param {object} [options] Optional option object (see fetch doc)
 * @returns {Promise} Fetch promise.
 */
const fetchApi = (path, options) =>
  fetch(path, options).then(async res => {
    // MDN: fetch not return error on 500 : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful
    // By default 404 is considered as a resolved request in REST, we force to reject
    if (!res.ok || res.status === 404) {
      const resBody = res.json ? await res.json() : res;
      return Promise.reject(resBody);
    } else {
      return Promise.resolve(res);
    }
  });

/**
 * Fetch with JSON in return
 * @param {string} path Path to the resource (starting with ‘/’)
 * @param {object} [options] Optional option object (see fetch doc)
 * @param {boolean} [authRequired] Optional option indicating should we use auth headers, default true if MAAM is used
 * @returns {Promise} Fetch promise.
 */
const fetchJson = (path, options, authRequired = false) =>
  fetchApi(path, options).then(res => res.json());

export { fetchJson };
