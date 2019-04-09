import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "scripts/components/Home";
import Product from "scripts/components/Product";
import Header from "scripts/components/Header";

//TO-DO Make your own component
const SampleComponent = () => <div>TO-DO</div>;

const Public = () => (
  <>
    <Header />
    <Switch>
      <Route path="/accueil" component={Home} />
      <Route path="/produit/:productId" component={Product} />
      <Route path="/comment-ca-marche" component={SampleComponent} />
      <Route path="/shooting-studio" component={SampleComponent} />
      <Route path="/shooting-sur-mesure" component={SampleComponent} />
      <Route path="/tarifs" component={SampleComponent} />
      <Route path="/reservation" component={SampleComponent} />
      <Redirect from="/" to="/accueil" />
    </Switch>
  </>
);

export default Public;
