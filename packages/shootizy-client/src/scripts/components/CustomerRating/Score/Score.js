import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";
import RatingStarIcon from "./RatingStarIcon/RatingStarIcon";

import "./Score.scss";

export const MAX_SCORE = 5;
const Score = ({ score, onItemClick, className }) => {
  const editable = !!onItemClick;
  let fillScore = score; //score;
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
            fill={Math.trunc(fillScore-- * 100)}
            {...(!!onItemClick ? { onClick: () => onItemClick(MAX_SCORE - index) } : {})}
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
