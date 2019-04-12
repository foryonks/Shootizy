import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import Icon from "scripts/components/Icon";

import "./Score.scss";

export const MAX_SCORE = 5;
const Score = ({ score, onItemClick, className }) => {
  const editable = !!onItemClick;
  return (
    <span
      className={classNamesDedupe("rating-score", className, {
        "rating-score--editable": editable,
      })}>
      {[...Array(MAX_SCORE)].map((item, index) => (
        <Icon
          key={index}
          name="star"
          className={classNamesDedupe("rating-score__item", {
            "rating-score__item--active": index < score,
          })}
          {...(!!onItemClick ? { onClick: () => onItemClick(index + 1) } : {})}
        />
      ))}
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
