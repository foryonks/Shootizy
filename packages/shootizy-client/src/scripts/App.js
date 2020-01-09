import React, { lazy, useEffect } from "react";
import { Switch, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
//import "whatwg-fetch";
import "polyfill-array-includes";
import Debug from "./components/Debug";
import LazyRoute from "./components/LazyRoute";

const DEFAULT_TITLE = "Shootizy";

// const PublicPage = lazy(() => import("scripts/pages/Public"));
// const AdminPage = lazy(() => import("scripts/pages/Admin"));
import PublicPage from "scripts/pages/Public";
import AdminPage from "scripts/pages/Admin";

const App = () => {
  useEffect(() => {
    if (typeof Event === "function") {
      // modern browsers
      window.dispatchEvent(new Event("pageChange"));
    } else {
      // for IE and other old browsers
      // causes deprecation warning on modern browsers
      var evt = window.document.createEvent("UIEvents");
      evt.initUIEvent("pageChange", true, false, window, 0);
      window.dispatchEvent(evt);
    }
  });
  return (
    <div className="App">
      <Debug />
      <Helmet titleTemplate={`%s | ${DEFAULT_TITLE}`} defaultTitle={DEFAULT_TITLE} />
      <Switch>
        <LazyRoute path="/admin" lazyComponent={AdminPage} />
        <LazyRoute path="/" lazyComponent={PublicPage} />
      </Switch>
    </div>
  );
};
export default withRouter(App);
