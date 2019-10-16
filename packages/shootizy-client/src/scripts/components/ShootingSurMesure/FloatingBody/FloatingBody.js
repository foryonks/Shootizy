import React, { useState } from "react";
import "./FloatingBody.scss";

const tete = ["tete-ananas.png", "tete-chien.png", "tete-robot.png"];
const corps = ["corps-buste.png", "corps-froufrou.png", "corps-etoile.png"];
const pied = ["pied-queue.png", "pied-roller.png", "pied-cactus.png"];

const randomFromArray = (items, current) => {
  let result = items[Math.floor(Math.random() * items.length)];
  return result === current ? randomFromArray(items, current) : result;
};

// packages/shootizy-client/public/assets/design/surmesure/floatting/
const FloatingBody = () => {
  //const [currentTete, setCurrentTete] = useState("tete-chien.png"); //randomFromArray(tete));
  //const [currentCorps, setCurrentCorps] = useState("corps-froufrou.png"); //randomFromArray(corps));
  //const [currentPied, setCurrentPied] = useState("pied-queue.png"); //randomFromArray(pied));
  const [currentTete, setCurrentTete] = useState(randomFromArray(tete)); // useState("tete-chien.png"); //randomFromArray(tete));
  const [currentCorps, setCurrentCorps] = useState(randomFromArray(corps)); //"corps-etoile.png"); //randomFromArray(corps));
  const [currentPied, setCurrentPied] = useState(randomFromArray(pied)); //"pied-cactus.png"); //randomFromArray(pied));

  const [animationDelayTete] = useState(Math.random() * 5);
  const [animationDelayCorps] = useState(Math.random() * 5);
  const [animationDelayPied] = useState(Math.random() * 5);

  const onAnimationIteration = (items, current, cb) => {
    cb(randomFromArray(items, current));
  };

  return (
    <div className="FloatingBodyWrapper">
      <div className="corpscomplet">
        <img
          class="pied"
          src={`/assets/design/surmesure/floatting/${currentPied}`}
          alt=""
          style={{ animationDelay: animationDelayPied + "s" }}
          onAnimationIteration={() => onAnimationIteration(pied, currentPied, setCurrentPied)}
        />
        <img
          class="corps"
          src={`/assets/design/surmesure/floatting/${currentCorps}`}
          alt=""
          style={{ animationDelay: animationDelayCorps + "s" }}
          onAnimationIteration={() => onAnimationIteration(corps, currentCorps, setCurrentCorps)}
        />
        <img
          class="tete"
          src={`/assets/design/surmesure/floatting/${currentTete}`}
          alt=""
          style={{ animationDelay: animationDelayTete + "s" }}
          onAnimationIteration={() => onAnimationIteration(tete, currentTete, setCurrentTete)}
        />
      </div>
      <img className="shadow" src="/assets/design/surmesure/floatting/shadow.png" alt="" />
    </div>
  );
};

export default FloatingBody;
