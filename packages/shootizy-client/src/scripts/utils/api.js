/**
 * Retrieve authorization token
 */
const getAppToken = () => localStorage.getItem("shootizyAuthToken");
/**
 * Save authorization token
 */
const setAppToken = token => localStorage.setItem("shootizyAuthToken", token);
/**
 * Delete authorization token
 */
const removeAppToken = () => localStorage.removeItem("shootizyAuthToken");

/**
 * Fetch with managing errors
 * @param {string} path Path to the resource (starting with ‘/’)
 * @param {object} [options] Optional option object (see fetch doc)
 * @param {bool} [redirectLogin401] redirect on 401
 * @returns {Promise} Fetch promise.
 */
const fetchApi = (path, options, redirectLogin401 = true) => {
  console.log("fetchApi", path, options);
  let fetchOptions = options || {};
  const authToken = getAppToken();
  const headers = new Headers(fetchOptions.headers || {});
  if (authToken) {
    headers.append("authorization", `Bearer ${authToken}`);
  }
  console.log("if fetchOptions.params", fetchOptions.params);
  if (fetchOptions.params) {
    const { params } = fetchOptions;
    const queryString = Object.keys(params)
      .filter(key => params[key] !== undefined)
      .map(key => key + "=" + params[key])
      .join("&");
    path += (path.indexOf("?") === -1 ? "?" : "&") + queryString;
  }
  console.log('["POST", "DELETE", "PUSH"] in fetchOptions.method', fetchOptions.method);
  if (["POST", "DELETE", "PUSH"].indexOf(fetchOptions.method) !== -1 && fetchOptions.body) {
    fetchOptions.body =
      typeof fetchOptions.body === "string"
        ? fetchOptions.body
        : JSON.stringify(fetchOptions.body || {});
    headers.append("Accept", "application/json");
  }
  console.log("fetch before call");
  fetchOptions.headers = headers;
  console.log("call of Fetch");
  return fetch(path, fetchOptions)
    .then(async res => {
      // MDN: fetch not return error on 500 : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful
      // By default 404 is considered as a resolved request in REST, we force to reject
      if (!res.ok || res.status === 404) {
        let resBody = res;
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json") && res.json) {
          resBody = await res.json();
        }
        return Promise.reject(resBody);
      } else {
        return Promise.resolve(res);
      }
    })
    .catch(error => {
      if (redirectLogin401 && (error.code === 401 || error.status === 401)) {
        removeAppToken();
        window.location.replace("/admin/login");
      }
      return Promise.reject(error);
    });
};

/**
 * Fetch with JSON in return
 * @param {string} path Path to the resource (starting with ‘/’)
 * @param {object} [options] Optional option object (see fetch doc)
 * @param {bool} [redirectLogin401] redirect on 401
 * @returns {Promise} Fetch promise.
 */
const fetchJson = (path, options, redirectLogin401 = true) => {
  console.log("fetchjson used (path, options)", path, options);
  if (options && (options.method === "POST" || options.method === "DELETE")) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
  }

  return fetchApi(path, options, redirectLogin401).then(res => res.json());
};
export { fetchJson, getAppToken, setAppToken, removeAppToken };
