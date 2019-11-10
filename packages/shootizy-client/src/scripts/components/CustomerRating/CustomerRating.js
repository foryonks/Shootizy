import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AppContext } from "scripts/contexts/App";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import AddRating from "./Add";
import List from "./List";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";
import GlobalRating from "./GlobalRating";
import Smiley from "./Smiley";

const CustomerRating = () => {
  const { contents: ratings /*, load: reloadList */ } = useRemoteContents("/api/ratings", {
    initialState: [],
  });
  const { loadGlobalRating } = useContext(AppContext);

  return (
    <div className="CustomerRatingWrapper page-container-grey">
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse" }} />
      <HeaderImage
        className="header-image-generic header-reverse mask-grey"
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
          <a href="#donnezavis" className="btn-green">
            Donnez-votre avis
          </a>
        </div>

        <div className="container container-2 mt50">
          <List ratings={ratings} className="mb100" />
          <div className="block-forms block block-corners block-primary-background mt50">
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
                  //  reloadList();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
