import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";
import RatingStarIcon from "./RatingStarIcon/RatingStarIcon";

import "./Score.scss";

export const MAX_SCORE = 5;
const Score = ({ score, onItemClick, className }) => {
  const editable = !!onItemClick;
  return (
    <span
      className={classNamesDedupe("rating-score", className, {
        "rating-score--editable": editable,
      })}>
      {[...Array(MAX_SCORE)].map((item, index) => {
        return (
          <RatingStarIcon
            className="rating-score__item"
            key={index}
            name="star"
            fill={Math.round((score - index) * 100)}
            {...(!!onItemClick ? { onClick: () => onItemClick(index + 1) } : {})}
          />
        );
      })}
    </span>
  );
};
Score.propTypes = {
  score: PropTypes.number,
  className: PropTypes.string,
  onItemClick: PropTypes.func,
};
Score.defaultProps = {
  score: 0,
};

export default Score;
