import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Debug from "./components/Debug";
import LazyRoute from "./components/LazyRoute";

const DEFAULT_TITLE = "Shootizy";

const PublicPage = lazy(() => import("scripts/pages/Public"));
const AdminPage = lazy(() => import("scripts/pages/Admin"));

const App = () => (
  <div className="App">
    <Debug />
    <Helmet titleTemplate={`%s | ${DEFAULT_TITLE}`} defaultTitle={DEFAULT_TITLE} />
    <Switch>
      <LazyRoute path="/admin" lazyComponent={AdminPage} />
      <LazyRoute path="/" lazyComponent={PublicPage} />
    </Switch>
  </div>
);

export default App;
