import React, { useState } from "react";
import "./FloatingBody.scss";

const tete = ["tete-ananas.png", "tete-chien.png", "tete-robot.png"];

const corps = ["corps-buste.png", "corps-froufrou.png", "corps-etoile.png"];

const pied = ["pied-queue.png", "pied-roller.png", "pied-cactus.png"];

const randomFromArray = items => {
  return items[Math.floor(Math.random() * items.length)];
};

// packages/shootizy-client/public/assets/design/surmesure/floatting/
const FloatingBody = props => {
  const [currentTete, setCurrentTete] = useState(randomFromArray(tete)); // useState("tete-chien.png"); //randomFromArray(tete));
  const [currentCorps, setCurrentCorps] = useState(randomFromArray(corps)); //"corps-etoile.png"); //randomFromArray(corps));
  const [currentPied, setCurrentPied] = useState(randomFromArray(pied)); //"pied-cactus.png"); //randomFromArray(pied));

  const onAnimationIteration = (items, cb) => {
    cb(randomFromArray(items));
  };

  return (
    <div className="FloatingBodyWrapper">
      <div className="corpscomplet">
        <img
          class="pied"
          src={`/assets/design/surmesure/floatting/${currentPied}`}
          alt=""
          onAnimationIteration={() => onAnimationIteration(pied, setCurrentPied)}
        />
        <img
          class="coprs"
          src={`/assets/design/surmesure/floatting/${currentCorps}`}
          alt=""
          onAnimationIteration={() => onAnimationIteration(corps, setCurrentCorps)}
        />
        <img
          class="tete"
          src={`/assets/design/surmesure/floatting/${currentTete}`}
          alt=""
          onAnimationIteration={() => onAnimationIteration(tete, setCurrentTete)}
        />
      </div>
    </div>
  );
};

export default FloatingBody;
