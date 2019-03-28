import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
import ShootizyTarifs from "./ShootizyTarifs";
import Themes from "./Themes/Themes";
//import PropTypes from "prop-types";

import { fetchJson } from "scripts/utils/api";
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

const Home = props => {
  const [htmlContents, setHtmlContents] = useState(() => []);
  useEffect(() => {
    (async () => {
      const contents = await fetchJson("/api/contents?page=home");
      setHtmlContents(
        contents.reduce((acc, content) => ({ ...acc, [content.contentId]: content }), {})
      );
    })();
  }, []);
  return (
    <div className="HomeWrapper">
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Carousel />
      {htmlContents["home-key-prices"] && (
        <Prices className="Prices-header" contents={htmlContents["home-key-prices"].items} />
      )}
      <CommentCaMarche className="CommentCaMarche-Home" />
      {htmlContents["home-detail-prices"] && (
        <ShootizyTarifs contents={htmlContents["home-detail-prices"].items} />
      )}
    </div>
  );
};

export default Home;
