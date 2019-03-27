import React from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
import ShootizyTarifs from "./ShootizyTarifs";
import Themes from "./Themes/Themes";
//import PropTypes from "prop-types";

const Home = props => (
  <div className="HomeWrapper">
    <Helmet>
      <title>Accueil</title>
    </Helmet>
    <Carousel />
    <Prices className="Prices-header container-2" />
    <CommentCaMarche className="CommentCaMarche-Home" />
    <ShootizyTarifs />
    <Themes />
  </div>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
