import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../CarouselHome";
import CommentCaMarche from "./CommentCaMarche";
import Prices from "../_common/Prices";
import ResaShooting from "./ResaShooting";

const Home = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse" }} title="Accueil" />
      <div className="HomeWrapper">
        <Carousel>
          <Prices className="container-2 home-prices" style={{ marginTop: "-10%" }} />
        </Carousel>
        <ResaShooting />
        <CommentCaMarche className="CommentCaMarche-Home" />
      </div>
    </>
  );
};

export default Home;
