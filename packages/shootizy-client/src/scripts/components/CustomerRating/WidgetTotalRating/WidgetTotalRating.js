import React from "react";
import "./WidgetTotalRating.scss";
import Score from "../Score";

const WidgetTotalRating = ({ className }) => (
  <div className={`WidgetTotalRating ${className}`}>
    <h3>Avis de nos clients</h3>
    <Score score={4.9} />
    <span>4,9/5</span>
  </div>
);

export default WidgetTotalRating;
