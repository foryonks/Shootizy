import React from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import RatingScore from "./Score";
import AddRating from "./Add";

import "./CustomerRating.scss";
import HeaderImage from "../_common/HeaderImage";
import { toMatrix } from "../../utils/utils";

const CustomerRating = () => {
  const { contents: ratings, load } = useRemoteContents("/api/ratings", []);

  const ratingsMatrix = ratings ? toMatrix(ratings, 3, { fill: true }) : [];

  return (
    <div className="container-2" style={{ marginTop: "50px" }}>
      <HeaderImage src="" />

      <div className="container">
        <h2 className="title">Avis de nos clients</h2>
        <p>
          Nous apportons toute l'importance à nos clients, chaque rendez-vous se doit d'être
          parfait.
        </p>

        <br />

        {ratingsMatrix.map((row, rowIndex) => (
          <ul className="row row-3 row-stretch row-margin" key={rowIndex}>
            {row.map(({ ratingId, name, shootingDate, score, comment }, index) =>
              ratingId ? (
                <li key={ratingId || index} className="card card-simple card-shadow">
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
        ))}
        <br />

        <div className="container-inside">
          <h1>Votre avis compte !</h1>
          <h2>Vous êtes venus, laissez nous votre avis sur votre séance</h2>
          <br />
          <AddRating onSubmit={load} />
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
