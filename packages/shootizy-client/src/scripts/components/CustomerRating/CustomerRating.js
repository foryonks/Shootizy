import React from "react";
import PropTypes from "prop-types";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import Icon from "scripts/components/Icon";

import "./CustomerRating.scss";

const MAX_SCORE = 5;
const Score = ({ score }) => {
  return (
    <div className="customer-rating__score">
      {[...Array(MAX_SCORE)].map((item, index) => (
        <span key={index} title={index + 1}>
          <Icon name="star" className={index < score ? "customer-rating__score--active" : ""} />
        </span>
      ))}
    </div>
  );
};
Score.defaultProps = {
  score: 0,
};

const CustomerRating = () => {
  const { contents: ratings } = useRemoteContents("/api/ratings", []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>How people rate us</h1>
      <br />
      <ul>
        {ratings.map(({ ratingId, name, date, score, comment }) => (
          <li key={ratingId}>
            <h3>----- {name}</h3>
            {date}
            <div>
              Rating {score} <Score score={score} />
            </div>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <br />
      <h1>What do you think of us?</h1>
      <br />
    </div>
  );
};

export default CustomerRating;
