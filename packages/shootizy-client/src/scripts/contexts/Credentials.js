import React, { createContext, useReducer, useEffect, useState } from "react";
import { fetchJson, getAppToken, removeAppToken } from "scripts/utils/api";

const ACTIONS = {
  USER_LOGGED_IN: "USER_LOGGED_IN",
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
};

const INITIAL_STATE = null;
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER_LOGGED_IN:
      const { user, token } = action;
      return { user, token };
    case ACTIONS.USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const CredentialsContext = createContext();

/**
 * Provider to be inject into root ONCE
 * @param {object} props
 */
const CredentialsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [init, setInit] = useState(false);
  /**
   * Init and check existing login credentials (in case of refresh page)
   */
  useEffect(() => {
    const token = getAppToken();
    if (token || process.env.REACT_APP_USE_DEV_TOKEN === "true") {
      (async () => {
        try {
          const user = await fetchJson("/api/user/me");
          dispatch({
            type: ACTIONS.USER_LOGGED_IN,
            token,
            user,
          });
        } catch (e) {
          // Token may expired, remove it
          removeAppToken();
        }
      })();
    }
    setInit(true);
  }, []);

  return (
    <CredentialsContext.Provider value={{ state, dispatch }}>
      {init && children}
    </CredentialsContext.Provider>
  );
};

export { ACTIONS, CredentialsContext, CredentialsProvider };
