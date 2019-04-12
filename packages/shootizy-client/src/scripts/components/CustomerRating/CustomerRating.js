import React from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import RatingScore from "./Score";
import AddRating from "./Add";

import "./CustomerRating.scss";

const CustomerRating = () => {
  const { contents: ratings, load } = useRemoteContents("/api/ratings", []);

  //TO-DO
  return (
    <div className="container-2" style={{ marginTop: "50px" }}>
      <h1>How people rate us</h1>
      <br />
      {/* TO-DO row-3 not working */}
      <ul className="row row-3">
        {ratings.map(({ ratingId, name, date, score, comment }) => (
          <li key={ratingId}>
            <h3>----- {name}</h3>
            {date}
            <div>
              Rating {score} <RatingScore score={score} />
            </div>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <br />

      <div className="container-inside">
        <h1>Votre avis compte !</h1>
        <h2>Vous êtes venus, laissez nous votre avis sur votre séance</h2>
        <br />
        <AddRating onSubmit={load} />
      </div>
    </div>
  );
};

export default CustomerRating;
