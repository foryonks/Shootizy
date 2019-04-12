import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Debug from "./components/Debug";
import LazyRoute from "./components/LazyRoute";
import ShootizyTarifs from "./components/Home/ShootizyTarifs";
import Themes from "./components/Home/Themes/Themes";
import SurMesure from "./components/Home/SurMesure";
import VenirAuStudio from "./components/Home/VenirAuStudio";
import BlogSmall from "./components/Home/BlogSmall";
import Footer from "./components/Footer";

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
    <ShootizyTarifs />
    <div className="page-section section-container">
      <Themes />
      <SurMesure />
    </div>
    <VenirAuStudio />
    <BlogSmall />
    <Footer />
  </div>
);

export default App;
