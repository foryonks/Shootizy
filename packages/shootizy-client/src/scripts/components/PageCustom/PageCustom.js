import React from "react";
import { withRouter } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Interweave from "interweave";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { formatDateStd } from "scripts/utils/DateUtils";

import "./PageCustom.scss";

const PageCustom = ({ match }) => {
  const { contents } = useRemoteContents(`/api/contents/page/${match.url.replace(/^\//, "")}`);
  const { preTitle, title, text, modifiedDate } = contents || {};
  return (
    contents && (
      <div className="PageCustomWrapper page-section-grey">
        <Helmet bodyAttributes={{ class: "header-padding-page" }} />
        <HeaderImage
          className="page-custom-header mask-grey"
          preTitle={preTitle}
          title={title}
          reverseColor={true}
        />

        <ul className="list-buttons list-buttons-big ">
          <li>
            <NavLink to="/mentions-legales">Mentions légales</NavLink>
          </li>
          <li>
            <NavLink to="/politique-confidentialite">Politique de confidentialité</NavLink>
          </li>
        </ul>

        <div className="container-2 pt100 pb100">
          <div className="update-date">
            Dernière mise à jour le : {formatDateStd(modifiedDate || new Date())}
          </div>
          <div className="pageContent pageCustom-content">
            <Interweave content={text} />
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(PageCustom);
