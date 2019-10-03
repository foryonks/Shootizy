import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";

// Global Layout components :
import Header from "scripts/components/Header";
import ShootizyTarifs from "scripts/components/Home/ShootizyTarifs";
import Themes from "scripts/components/Home/Themes/Themes";
import SurMesure from "scripts/components/Home/SurMesure";
import LazyLoad from "react-lazyload";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import BlogSmall from "scripts/components/Blog/BlogSmall";
import Footer from "scripts/components/Footer";

// Pages
import Home from "scripts/components/Home";
import CustomerRating from "scripts/components/CustomerRating";
import CommentCaMarchePage from "scripts/components/CommentCaMarchePage";
import Booking from "scripts/components/Booking";
import ShootingStudio from "scripts/components/ShootingStudio";
import ShootingSurMesure from "scripts/components/ShootingSurMesure";
import Blog from "scripts/components/Blog";
import NotreBook from "scripts/components/NotreBook";
import Tarifs from "scripts/components/Tarifs";
import Newsletter from "scripts/components/Newsletter";
import Contact from "scripts/components/Contact";
import ShowHideWithRoute from "../../components/ShowHideWithRoute/ShowHideWithRoute";

const Public = () => (
  <>
    <Header />
    <CrumbRoute
      title="Accueil"
      path="/"
      render={() => (
        <Switch>
          {/* Top Links */}
          <CrumbRoute title="Avis Clients" path="/avis-clients" component={CustomerRating} />
          <CrumbRoute title="Blog" path="/blog" component={Blog} />
          <CrumbRoute title="Newsletter" path="/newsletter" component={Newsletter} />
          <CrumbRoute title="Contact" path="/contact" component={Contact} />

          {/* Main links */}
          <CrumbRoute
            title="Comment ca marche?"
            path="/comment-ca-marche"
            component={CommentCaMarchePage}
          />
          <CrumbRoute
            path="/shooting-sur-mesure"
            title="Shooting sur mesure"
            component={ShootingSurMesure}
          />

          <CrumbRoute path="/tarifs" title="Tarifs" component={Tarifs} />
          <CrumbRoute path="/notre-book" title="Notre book" component={NotreBook} />
          <CrumbRoute title="Shooting Studio" path="/shooting-studio" component={ShootingStudio} />
          <CrumbRoute path="/booking" title="Réservation" component={Booking} />
          <Route path="/accueil" component={Home} />
          <Redirect to="/accueil" />
        </Switch>
      )}
    />

    <ShootizyTarifs />
    <div className="page-section section-container">
      <ShowHideWithRoute hideWith={[/shooting-studio\/?$/]}>
        <Themes />
      </ShowHideWithRoute>
      <SurMesure />
    </div>
    <LazyLoad height={400}>
      <VenirAuStudio />
    </LazyLoad>
    <LazyLoad height={200}>
      <BlogSmall />
    </LazyLoad>
    <Footer />
  </>
);

export default Public;
