import React, { useState } from "react";
import "./FloattingItems.scss";

const items = ["duck.png", "banane.png", "boobs.png", "burger.png", "golden-dog.png"];

const FloattingItems = props => {
  const [currentItem, setCurrentItem] = useState(0);

  function onAnimationIteration() {
    console.log("animation end");
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1);
  }

  return (
    <div className="studio-photo-container">
      <div className="studio-photo-content">
        <img
          className="floating-img"
          src={`/assets/design/shooting-studio/floatting/${items[currentItem]}`}
          alt=""
          onAnimationIteration={onAnimationIteration}
        />
        <div className="shadow" />
      </div>
    </div>
  );
};

export default FloattingItems;
