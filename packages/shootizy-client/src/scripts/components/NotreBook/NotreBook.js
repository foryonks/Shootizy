import React from "react";
import "./NotreBook.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import ThemesListWithFilter from "./ThemesListWithFilter";

const NotreBook = props => (
  <div className="NotreBook page-container">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />

    <HeaderImage
      className="header-image-generic"
      //src="/assets/design/headers/header-shooting-studio.png"
      preTitle="Le book"
      title="Un peu de lorem ipsum  <strong>blabla</strong>"
    />

    <div className="container-2 mt50">
      <ThemesListWithFilter />
    </div>
  </div>
);

export default NotreBook;
