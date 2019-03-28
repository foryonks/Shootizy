import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "scripts/components/Header";
import Home from "scripts/components/Home";
import Debug from "./components/Debug";

const DEFAULT_TITLE = "Shootizy";

//TO-DO Make your own component
const SampleComponent = () => <div>TO-DO</div>;

const App = () => (
  <div className="App">
    <Debug />
    <Helmet titleTemplate={`%s | ${DEFAULT_TITLE}`} defaultTitle={DEFAULT_TITLE} />
    <Header />
    <Switch>
      <Route path="/accueil" component={Home} />
      <Route path="/comment-ca-marche" component={SampleComponent} />
      <Route path="/shooting-studio" component={SampleComponent} />
      <Route path="/shooting-sur-mesure" component={SampleComponent} />
      <Route path="/tarifs" component={SampleComponent} />
      <Route path="/reservation" component={SampleComponent} />
      <Redirect to="/accueil" />
    </Switch>
    <div className="main" />
  </div>
);

export default App;
