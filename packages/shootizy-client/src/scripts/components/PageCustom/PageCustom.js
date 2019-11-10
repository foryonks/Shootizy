import React from "react";
import { withRouter } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Interweave from "interweave";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import "./PageCustom.scss";

const PageCustom = ({ match }) => {
  const { contents } = useRemoteContents(`/api/contents/page/${match.url.replace(/^\//, "")}`);
  return (
    contents && (
      <div className="PageCustomWrapper page-section-grey">
        <Helmet bodyAttributes={{ class: "header-padding-page" }} />
        <HeaderImage
          className="page-custom-header mask-grey"
          preTitle={contents.preTitle}
          title={contents.title}
          reverseColor={true}
        />

        <ul className="list-buttons mt50">
          <li>
            <NavLink to="/politique-confidentialite">Politique de confidentialité</NavLink>
          </li>
        </ul>

        <div className="container-2 ">
          <div className="pageContent pageCustom-content">
            <Interweave content={contents.text} />
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(PageCustom);
