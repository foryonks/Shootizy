import React from "react";
//import { Link } from "react-router-dom";
import "./NotreBook.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import ThemesListWithFilter from "./ThemesListWithFilter";
import SocialSquares from "scripts/components/_common/SocialSquares";
import Carousel from "scripts/components/CarouselHome";
//import CommentCaMarche3blocks from "scripts/components/CommentCaMarchePage/CommentCaMarche3blocks";
import CommentCaMarche from "../Home/CommentCaMarche";

const NotreBook = props => (
  <div className="NotreBook page-container">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />

    <HeaderImage
      className="header-image-generic mask-grey"
      //src="/assets/design/headers/header-shooting-studio.png"
      preTitle="Le book"
      title="Un peu de lorem ipsum  <strong>blabla</strong>"
    />

    <div className="page-section page-section-grey">
      <div className="container-2  mt50 pb50">
        <ThemesListWithFilter />
      </div>
    </div>
    <div className="container-2 pt100 pb100">
      <h2 className="title mb50">
        What’s new sur <strong>@Shootizy</strong>
      </h2>
      <SocialSquares cols={3} nums={9} twitterPos={[2, 7]} />
    </div>

    <Carousel useMask={false} />
    <CommentCaMarche />
  </div>
);

export default NotreBook;
