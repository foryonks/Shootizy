import React from "react";

import Header from "../Header";
import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
//import PropTypes from "prop-types";

const Home = props => (
  <div className="HomeWrapper">
    <Header />
    <Carousel />
    <Prices className="Prices-header" />
    <CommentCaMarche className="CommentCaMarche-Home" />
  </div>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
