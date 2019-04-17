import React from "react";
import PropTypes from "prop-types";

import RatingScore from "../Score";

const List = ({ ratings }) => (
  <ul className="row row-3 row-stretch row-margin row-wrap">
    {ratings.map(({ ratingId, name, shootingDate, score, comment }, index) =>
      ratingId ? (
        <li key={ratingId} className="card card-simple">
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
);

List.propTypes = {
  ratings: PropTypes.array.isRequired,
};

export default List;
