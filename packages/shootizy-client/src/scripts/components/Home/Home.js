import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
import ShootizyTarifs from "./ShootizyTarifs";
//import PropTypes from "prop-types";

const Home = props => (
  <div className="HomeWrapper">
    <Helmet>
      <title>Accueil</title>
    </Helmet>
    <Carousel />
    <Prices className="Prices-header" />
    <CommentCaMarche className="CommentCaMarche-Home" />
    <ShootizyTarifs />
  </div>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
