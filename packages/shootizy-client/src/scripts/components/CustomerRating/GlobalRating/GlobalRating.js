import React, { useContext } from "react";
import { string, bool } from "prop-types";
import { AppContext } from "scripts/contexts/App";
import Score from "scripts/components/CustomerRating/Score";

import "./GlobalRating.scss";

const RATING_LABEL = {
  1: "A améliorer",
  2: "Moyen",
  3: "Satisfait",
  4: "Très satisfait",
  5: "Parfait",
};

// const GlobalRating = ({ className, title, showDetails }) => {
//   const { state: appState } = useContext(AppContext);
//   return appState.rating ? (
//     <div className={`GlobalRating ${className}`}>
//       {title && <h3>{title}</h3>}
//       <Score score={appState.rating.score} />
//       <span className="rating-text">
//         {appState.rating.score} / 5 {showDetails && RATING_LABEL[Math.floor(appState.rating.score)]}
//       </span>
//       {showDetails && <h4>{appState.rating.count} avis</h4>}
//     </div>
//   ) : null;
// };

const GlobalRating = ({ className, showDetails, showScore }) => {
  const { state: appState } = useContext(AppContext);
  return appState.rating ? (
    <div className={`GlobalRating ${className}`}>
      {showScore ? <Score score={appState.rating.score} /> : null}
      <span className="rating-text">
        <strong>{appState.rating.score}</strong> / 5{" "}
        {showDetails && RATING_LABEL[Math.floor(appState.rating.score)]}
      </span>

      {/* {showDetails && <h4>{appState.rating.count} avis</h4>} */}
    </div>
  ) : null;
};

GlobalRating.propTypes = {
  className: string,
  //title: string,
  showDetails: bool,
  showScore: bool,
};

GlobalRating.defaultProps = {
  className: "",
  //title: "",
  showDetails: false,
  showScore: false,
};
export default GlobalRating;
