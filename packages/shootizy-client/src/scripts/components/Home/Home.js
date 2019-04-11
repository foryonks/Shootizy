import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Carousel />
      <Prices className="Prices-header" />
      <CommentCaMarche className="CommentCaMarche-Home" />
    </div>
  );
};

export default Home;
