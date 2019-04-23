import React, { createContext, useState, useReducer, useEffect } from "react";
import { fetchJson } from "scripts/utils/api";

const AppContext = createContext();

const ACTIONS = {
  GLOBAL_RATING_RECEIVED: "GLOBAL_RATING_RECEIVED",
  THEME_PRODUCTS_RECEIVED: "THEME_PRODUCTS_RECEIVED",
};

const INITIAL_STATE = {};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GLOBAL_RATING_RECEIVED:
      const { score, count } = action;
      return { ...state, rating: { score, count } };
    case ACTIONS.THEME_PRODUCTS_RECEIVED:
      const { themes } = action;
      return { ...state, themes };
    default:
      return state;
  }
};

const actions = dispatch => ({
  // Rating
  loadGlobalRating: async () => {
    try {
      const { score, count } = await fetchJson("/api/ratings/average");
      dispatch({
        type: ACTIONS.GLOBAL_RATING_RECEIVED,
        score,
        count,
      });
    } catch (e) {}
  },
  // Theme products
  loadThemeProducts: async () => {
    try {
      const themes = await fetchJson("/api/products?tags=theme");
      dispatch({
        type: ACTIONS.THEME_PRODUCTS_RECEIVED,
        themes,
      });
    } catch (e) {}
  },
  // ...Others maybe
  // ...
});

/**
 * Provider to be inject into root ONCE
 * @param {object} props
 */
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [init, setInit] = useState(false);

  /**
   * Load all app data on init
   */
  useEffect(() => {
    for (const loadFn of Object.values(actions(dispatch))) {
      loadFn();
    }
    setInit(true);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, ...actions(dispatch) }}>
      {init && children}
    </AppContext.Provider>
  );
};

export { ACTIONS, AppContext, AppProvider };
