import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Carousel from "../Carousel";
import Prices from "./Prices";
import CommentCaMarche from "./CommentCaMarche";
import ShootizyTarifs from "./ShootizyTarifs";
import Themes from "./Themes/Themes";
//import PropTypes from "prop-types";
import { fetchJson } from "scripts/utils/api";
import SurMesure from "./SurMesure/SurMesure";
import VenirAuStudio from "./VenirAuStudio/VenirAuStudio";
import BlogSmall from "./BlogSmall/BlogSmall";

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
      <div className="section-container">
        <Themes />
        <SurMesure />
      </div>

      <VenirAuStudio />
      <BlogSmall />
    </div>
  );
};

export default Home;
