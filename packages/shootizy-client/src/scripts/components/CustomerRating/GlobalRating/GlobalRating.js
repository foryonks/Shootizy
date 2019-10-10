import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "scripts/contexts/App";

import Score from "../Score";

import "./GlobalRating.scss";

const RATING_LABEL = {
  1: "A améliorer",
  2: "Moyen",
  3: "Satisfait",
  4: "Très satisfait",
  5: "Parfait",
};

const GlobalRating = ({ className, title, showDetails }) => {
  const { state: appState } = useContext(AppContext);
  return appState.rating ? (
    <div className={`GlobalRating ${className}`}>
      {title && <h3>{title}</h3>}
      <Score score={appState.rating.score} />
      <span className="rating-text">
        {appState.rating.score} / 5 {showDetails && RATING_LABEL[Math.floor(appState.rating.score)]}
      </span>
      {showDetails && <h4>{appState.rating.count} avis</h4>}
    </div>
  ) : null;
};

GlobalRating.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  showDetails: PropTypes.bool,
};
export default GlobalRating;
