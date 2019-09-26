import React from "react";
import "./NotreBook.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Themes from "../Home/Themes/Themes";
import { Helmet } from "react-helmet";

const NotreBook = props => (
  <div className="NotreBook page-container">
    <Helmet>
      <body className="header-padding-page" />
    </Helmet>
    <HeaderImage
      className="header-image-generic"
      //src="/assets/design/headers/header-shooting-studio.png"
      preTitle="Le book"
      title="Un peu de lorem ipsum  <strong>blabla</strong>"
    />

    <div className="main container-2">
      <h2 className="title">
        Notre Book <br />
        PAGE A FAIRE !!!
      </h2>
    </div>
    <div className="page-section section-container">
      <Themes />
    </div>
  </div>
);

export default NotreBook;
