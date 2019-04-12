import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import CommentCaMarche from "./CommentCaMarche";
import Prices from "../_common/Prices";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Carousel>
        <Prices className="container-2" />
      </Carousel>
      <CommentCaMarche className="CommentCaMarche-Home" />
    </div>
  );
};

export default Home;
