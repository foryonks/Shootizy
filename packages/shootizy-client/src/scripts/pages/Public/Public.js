import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";

// Global Layout components :
import Header from "scripts/components/Header";
//import LazyLoad from "react-lazyload";
import Footer from "scripts/components/Footer";

// import ShootizyTarifs from "scripts/components/Home/ShootizyTarifs";
// import Themes from "scripts/components/Home/Themes/Themes";
// import SurMesure from "scripts/components/ShootingSurMesure/SurMesure/SurMesure";
// import CommentCaMarche3blocks from "scripts/components/CommentCaMarchePage/CommentCaMarche3blocks";
// import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
// import BlogSmall from "scripts/components/Blog/BlogSmall";
// import FooterSocial from "scripts/components/Footer/FooterSocial";

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
import PageCustom from "scripts/components/PageCustom";
//import ShowHideWithRoute from "../../components/ShowHideWithRoute/ShowHideWithRoute";

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

          {/* Pages Custom */}
          <CrumbRoute
            path="/politique-confidentialite"
            title="Politique de confidentialité"
            component={PageCustom}
          />
          <CrumbRoute path="/mentions-legales" title="Mentions légales" component={PageCustom} />

          <Route path="/accueil" component={Home} />
          <Redirect to="/accueil" />
        </Switch>
      )}
    />

    {/* <LazyLoad height={400}>
      <ShowHideWithRoute>
        <VenirAuStudio />
      </ShowHideWithRoute>
    </LazyLoad> */}

    {/* <LazyLoad height={200}>
      <ShowHideWithRoute hideWith={[/blog/, /comment-ca-marche/, /shooting-studio\/?$/]}>
        <BlogSmall />
      </ShowHideWithRoute>
    </LazyLoad> */}
    <Footer />
    <div id="bottomForTest" />
  </>
);

export default Public;
