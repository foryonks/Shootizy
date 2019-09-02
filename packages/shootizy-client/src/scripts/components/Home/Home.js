import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import CommentCaMarche from "./CommentCaMarche";
import Prices from "../_common/Prices";
import Layout from "scripts/pages/Layout";

const Home = () => {
  return (
    <Layout className="topheader-reverse">
      <div className="HomeWrapper">
        <Helmet>
          <title>Accueil</title>
        </Helmet>
        <Carousel>
          <Prices className="container-2" />
        </Carousel>
        <CommentCaMarche className="CommentCaMarche-Home" />
      </div>
    </Layout>
  );
};

export default Home;
