import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
import ShootizyTarifs from "./ShootizyTarifs";
import Themes from "./Themes/Themes";

import SurMesure from "./SurMesure";
import VenirAuStudio from "./VenirAuStudio";
import BlogSmall from "./BlogSmall";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Carousel />
      <Prices className="Prices-header" />
      <CommentCaMarche className="CommentCaMarche-Home" />
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
};

export default Home;
