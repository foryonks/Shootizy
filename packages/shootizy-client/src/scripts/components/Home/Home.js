import React from "react";
import { Helmet } from "react-helmet";

import CarouselHome from "scripts/components/CarouselHome";
import CommentCaMarche from "./CommentCaMarche";
import Prices from "../_common/Prices";
import ResaShooting from "./ResaShooting";
import Themes from "scripts/components/Home/Themes/Themes";
import SurMesure from "scripts/components/ShootingSurMesure/SurMesure/SurMesure";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import BlogSmall from "scripts/components/Blog/BlogSmall";
import FooterSocial from "scripts/components/Footer/FooterSocial";

const Home = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse" }} title="Accueil" />
      <div className="HomeWrapper">
        <CarouselHome>
          <Prices className="container-2 home-prices" style={{ marginTop: "-10%" }} />
        </CarouselHome>
        <ResaShooting />
        <CommentCaMarche className="CommentCaMarche-Home" />

        <div className="page-section page-section-grey">
          <Themes />
          <SurMesure />
        </div>

        <VenirAuStudio />
        <BlogSmall />
        <FooterSocial />
      </div>
    </>
  );
};

export default Home;
