import React from "react";
import { number } from "prop-types";
import "./Smiley.scss";

const smileyByScore = score => {
  if (score >= 4) {
    return "good";
  }
  if (score <= 2) {
    return "bad";
  }
  return "neutral";
};

const Smiley = ({ score, className }) => (
  <span
    className={`Smiley ${className || ""}`}
    style={{ backgroundImage: `url(/assets/design/ratings/smiley-${smileyByScore(score)}.svg)` }}
  />
);

Smiley.propTypes = {
  score: number,
};

Smiley.defaultProps = {
  // bla: 'test',
};

export default Smiley;
