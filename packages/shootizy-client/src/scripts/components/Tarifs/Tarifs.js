import React from "react";
import "./Tarifs.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Themes from "../Home/Themes/Themes";
import { Helmet } from "react-helmet";

const Tarifs = props => (
  <div className="Tarifs page-container page-section-grey">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />
    <HeaderImage
      className="header-image-generic mask-grey"
      src="/assets/design/headers/tarifs.svg"
      preTitle="Tarifs"
      title="Un peu de tarifs <strong>blabla</strong>"
    />

    <div className="main container-2">
      <h2 className="title">
        Tarifs <br />
        PAGE A FAIRE !!!
      </h2>
    </div>
    <div className="page-section section-container">
      <Themes />
    </div>
  </div>
);

export default Tarifs;
