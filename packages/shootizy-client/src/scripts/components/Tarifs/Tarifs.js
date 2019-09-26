import React from "react";
import "./Tarifs.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Themes from "../Home/Themes/Themes";
import { Helmet } from "react-helmet";

const Tarifs = props => (
  <div className="Tarifs page-container">
    <Helmet>
      <body className="header-padding-page" />
    </Helmet>
    <HeaderImage
      className="header-image-generic"
      //src="/assets/design/headers/header-shooting-studio.png"
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
