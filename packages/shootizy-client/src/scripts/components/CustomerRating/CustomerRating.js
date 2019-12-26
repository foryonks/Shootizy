import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { AppContext } from "scripts/contexts/App";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import AddRating from "./Add";
import List from "./List";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";
import GlobalRating from "./GlobalRating";
import Smiley from "./Smiley";
import animateScrollTo from "animated-scroll-to";

const CustomerRating = () => {
  const { contents: ratings /*, load: reloadList */ } = useRemoteContents("/api/ratings", {
    initialState: [],
  });
  const { loadGlobalRating } = useContext(AppContext);
  const formEl = useRef(null);
  const onAvisClick = e => {
    const item = formEl.current;
    if (item) {
      // remove 100 because sticky header
      const y = item.getBoundingClientRect().top + window.scrollY - 100;
      animateScrollTo(y);
    }
  };
  return (
    <div className="CustomerRatingWrapper page-container-grey">
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse" }} />
      <HeaderImage
        className="header-reverse mask-grey"
        preTitle="Avis clients"
        title={() => (
          <div>
            <GlobalRating className="customer-rating__total" />
            <div>Et vous vous en pensez quoi ?</div>
          </div>
        )}
      />
      <div className="page-section-grey">
        <div className="button-container-centered-header button-container-centered">
          <button type="button" className="btn-green" onClick={onAvisClick}>
            Donnez-votre avis
          </button>
        </div>

        {/* content of page  */}
        <div className="container container-2 ratings-container">
          <List ratings={ratings} />
          <div
            ref={formEl}
            className="block-forms block block-corners block-shadow block-primary-background">
            <div className="txt-c">
              <Smiley score={5} className="smallSmiley" />{" "}
              <Smiley score={0} className="smallSmiley" />
            </div>
            <h3 className="title txt-c">Votre avis compte !</h3>
            <p className="txt-c">
              Vous êtes venus chez Shootizy et vous souhaitez nous dire ce que vous avez pensé de
              votre shooting ?<br />
              <strong>Dites-nous tout, on vous écoute !</strong>
            </p>
            <div className="block-content">
              <AddRating
                onSubmit={() => {
                  loadGlobalRating();
                }}
              />
            </div>
          </div>
        </div>
        <VenirAuStudio />
      </div>
    </div>
  );
};

export default CustomerRating;
