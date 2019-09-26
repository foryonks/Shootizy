import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AppContext } from "scripts/contexts/App";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import AddRating from "./Add";
import List from "./List";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";
import GlobalRating from "./GlobalRating";

const CustomerRating = () => {
  const { contents: ratings /*, load: reloadList */ } = useRemoteContents("/api/ratings", {
    initialState: [],
  });
  const { loadGlobalRating } = useContext(AppContext);

  return (
    <div className="CustomerRatingWrapper page-container">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <HeaderImage
        className="header-image-generic header-image-reverse"
        // src="/assets/design/headers/header-shooting-studio.png"
        preTitle="Shooting sur mesure"
        title="Décrivez-nous votre besoin <br>et obtenez un <strong>devis gratuit</strong> sur mesure !"
      />
      <div className="container  container-2">
        <h2 className="title">Avis de nos clients</h2>
        <p>
          Nous apportons toute l'importance à nos clients, chaque rendez-vous se doit d'être
          parfait.
        </p>
      </div>
      <div className="page-section section-container">
        <div className="container container-2">
          <div className="container-inside">
            <div className="card card-simple">
              <GlobalRating className="customer-rating__total" showDetails />
            </div>
          </div>
          <List ratings={ratings} />
          <div className="container-inside">
            <div className="card card-simple">
              <h1>Votre avis compte !</h1>
              <h2>Vous êtes venus, laissez nous votre avis sur votre séance</h2>
              <br />
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
