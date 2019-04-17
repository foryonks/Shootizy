import React, { useContext } from "react";

import { AppContext } from "scripts/contexts/App";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import AddRating from "./Add";
import List from "./List";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";
import TotalRating from "./GlobalRating";

const CustomerRating = () => {
  const { contents: ratings, load: reloadList } = useRemoteContents("/api/ratings", []);
  const { loadGlobalRating } = useContext(AppContext);

  return (
    <div className="Page">
      <HeaderImage src="" />

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
              <TotalRating className="customer-rating__total" showDetails />
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
                  reloadList();
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
