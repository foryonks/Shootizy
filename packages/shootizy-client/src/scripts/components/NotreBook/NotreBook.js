import React from "react";
//import { Link } from "react-router-dom";
import "./NotreBook.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import ThemesListWithFilter from "./ThemesListWithFilter";
import SocialSquares from "scripts/components/_common/SocialSquares";
import CarouselHome from "scripts/components/CarouselHome";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";

//import CommentCaMarche3blocks from "scripts/components/CommentCaMarchePage/CommentCaMarche3blocks";
import CommentCaMarche from "../Home/CommentCaMarche";

const NotreBook = props => (
  <div className="NotreBook page-container page-section-grey">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />

    <HeaderImage
      className="mask-grey"
      src="/assets/design/headers/le-book.svg"
      preTitle="Le book"
      title=""
      useMask={true}
    />

    <div className="page-section pt50 pb50">
      <div className="container-2   ">
        <ThemesListWithFilter />
      </div>
    </div>
    <div className="page-section-white pt100 pb100">
      <div className="container-2 ">
        <h2 className="title mb50">
          What’s new sur <strong>@Shootizy</strong>
        </h2>
        <SocialSquares cols={3} nums={9} twitterPos={[2, 7]} />
      </div>
    </div>

    <CarouselHome useMask={false} />
    <CommentCaMarche />
    <VenirAuStudio />
  </div>
);

export default NotreBook;
