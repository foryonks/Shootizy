import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "scripts/components/Home";
import Product from "scripts/components/Product";
import Header from "scripts/components/Header";
import CustomerRating from "scripts/components/CustomerRating";
import CommentCaMarchePage from "scripts/components/CommentCaMarchePage";
import ShootizyTarifs from "scripts/components/Home/ShootizyTarifs";
import Themes from "scripts/components/Home/Themes/Themes";
import SurMesure from "scripts/components/Home/SurMesure";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import BlogSmall from "scripts/components/Home/BlogSmall";
import Footer from "scripts/components/Footer";

//TO-DO Make your own component
const SampleComponent = () => <div>TO-DO</div>;

const Public = () => (
  <>
    <Header />
    <Switch>
      <Route path="/accueil" component={Home} />
      <Route path="/comment-ca-marche" component={CommentCaMarchePage} />
      <Route path="/shooting-studio" component={SampleComponent} />
      <Route path="/shooting-sur-mesure" component={SampleComponent} />
      <Route path="/tarifs" component={SampleComponent} />
      <Route path="/notre-book" component={SampleComponent} />
      <Route path="/produit/:productId" component={Product} />
      <Route path="/avis-clients" component={CustomerRating} />
      <Redirect from="/" to="/accueil" />
    </Switch>
    <ShootizyTarifs />
    <div className="page-section section-container">
      <Themes />
      <SurMesure />
    </div>
    <VenirAuStudio />
    <BlogSmall />
    <Footer />
  </>
);

export default Public;
