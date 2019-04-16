import React from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import RatingScore from "./Score";
import AddRating from "./Add";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";

const CustomerRating = () => {
  const { contents: ratings, load } = useRemoteContents("/api/ratings", []);

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
          <ul className="row row-3 row-stretch row-margin row-wrap">
            {ratings.map(({ ratingId, name, shootingDate, score, comment }, index) =>
              ratingId ? (
                <li key={ratingId || index} className="card card-simple">
                  <h3>{name}</h3>
                  {shootingDate}
                  <div>
                    Rating {score} <RatingScore score={score} />
                  </div>
                  <p>{comment}</p>
                </li>
              ) : (
                <div className="dummyCard" key={index} />
              )
            )}
          </ul>
          <div className="container-inside">
            <div className="card card-simple">
              <h1>Votre avis compte !</h1>
              <h2>Vous êtes venus, laissez nous votre avis sur votre séance</h2>
              <br />
              <AddRating onSubmit={load} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
