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
import BlogSmall from "scripts/components/Blog/BlogSmall";
import Footer from "scripts/components/Footer";
import Booking from "scripts/components/Booking";
import ShootingStudio from "scripts/components/ShootingStudio/ShootingStudio";
import Blog from "scripts/components/Blog";
import BlogArticle from "scripts/components/Blog/Article";
import BlogCategory from "scripts/components/Blog/Category";

//TO-DO Make your own component
const SampleComponent = () => <div>TO-DO</div>;

const Public = () => (
  <>
    <Header />
    <Switch>
      {/* Top Links */}
      <Route path="/avis-clients" component={CustomerRating} />
      <Route path="/blog/article/:slug" component={BlogArticle} />
      <Route path="/blog/category/:slug" component={BlogCategory} />
      <Route path="/blog/categories" component={SampleComponent} />
      <Route path="/blog" component={Blog} />
      {/* Main links */}
      <Route path="/accueil" component={Home} />
      <Route path="/comment-ca-marche" component={CommentCaMarchePage} />
      <Route path="/shooting-sur-mesure" component={SampleComponent} />
      <Route path="/tarifs" component={SampleComponent} />
      <Route path="/notre-book" component={SampleComponent} />
      <Route path="/shooting-studio/:productId" component={Product} />
      <Route path="/shooting-studio" component={ShootingStudio} />
      <Route path="/booking" component={Booking} />
      <Redirect from="/" to="/accueil" />
    </Switch>
    <ShootizyTarifs />
    <div className="page-section section-container">
      <Themes locationHideRegex={/shooting-studio\/?$/} />
      <SurMesure />
    </div>
    <VenirAuStudio />
    <BlogSmall />
    <Footer />
  </>
);

export default Public;
