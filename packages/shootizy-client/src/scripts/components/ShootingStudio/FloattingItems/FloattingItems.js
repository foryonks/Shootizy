import React from "react";
import "./FloattingItems.scss";

const FloattingItems = props => (
  <div className="studio-photo-container">
    <div className="studio-photo-content">
      <img
        className="floating floating-img"
        src="/assets/design/shooting-studio/floatting/duck.png"
        alt=""
      />
      <div className="shadow" />
    </div>
  </div>
);

export default FloattingItems;
