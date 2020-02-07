import React from "react";
import "./ResaShooting.scss";

const ResaShooting = props => (
  <div className="ResaShootingWrapper">
    <h2 className=" title">
      Aucune obligation <span className="nowrap">d’achat !</span>
      <br />
      <strong>Payez seulement les photos que vous voulez ! </strong>
    </h2>
    <div className="txt-c button">
      <a href="/booking" className="btn-green">
        Je réserve mon shooting
      </a>
    </div>
  </div>
);

export default ResaShooting;
