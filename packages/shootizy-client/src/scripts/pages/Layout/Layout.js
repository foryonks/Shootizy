import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

import Header from "scripts/components/Header";
import ShootizyTarifs from "scripts/components/Home/ShootizyTarifs";
import Themes from "scripts/components/Home/Themes/Themes";
import SurMesure from "scripts/components/Home/SurMesure";
import LazyLoad from "react-lazyload";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import BlogSmall from "scripts/components/Blog/BlogSmall";
import Footer from "scripts/components/Footer";

const Layout = ({ children, className }) => (
  <div className={`LayoutJsWrapper ${className}`}>
    <Header />
    {children}

    <ShootizyTarifs />
    <div className="page-section section-container">
      <Themes locationHideRegex={/shooting-studio\/?$/} />
      <SurMesure />
    </div>
    <LazyLoad height={400}>
      <VenirAuStudio />
    </LazyLoad>
    <LazyLoad height={200}>
      <BlogSmall />
    </LazyLoad>
    <Footer />
  </div>
);

Layout.propTypes = {
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: "",
};

export default Layout;
