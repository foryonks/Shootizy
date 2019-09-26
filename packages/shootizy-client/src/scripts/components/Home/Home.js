import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../CarouselHome";
import CommentCaMarche from "./CommentCaMarche";
import Prices from "../_common/Prices";
//className="topheader-reverse"
const Home = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "header-padding-page topheader-reverse" }} title="Accueil" />
      <div className="HomeWrapper">
        <Carousel>
          <Prices className="container-2" />
        </Carousel>
        <CommentCaMarche className="CommentCaMarche-Home" />
      </div>
    </>
  );
};

export default Home;
