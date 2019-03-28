import React from "react";
//import PropTypes from "prop-types";
import "./SurMesure.scss";

const SurMesure = props => (
  <div className="SurMesure card-simple container-2">
    <div className="container-inside">
      <h3 className="SurMesure-title">Sur mesure !</h3>
      <div className="SurMesure-description">
        Un besoin (très) particulier ? Avec ou sans vidéo ? Une solution que vous ne trouvez pas
        encore ? <strong>Dites-nous tout, on s’occupe de vous !</strong>
      </div>
      <form action="">
        <div className="form-line label-top">
          <label htmlFor="surmesureemail">Votre mail afin qu’on puisse vous répondre</label>
          <input type="text" id="surmesureemail" />
        </div>
        <div className="form-line label-top">
          <label htmlFor="surmesureexplain">Expliquez-nous</label>
          <textarea id="surmesureexplain" />
        </div>
        <div className="button-container-centered">
          <button className="btn-green" type="submit">
            Je propose mon thème à Shootizy
          </button>
        </div>
      </form>
    </div>
  </div>
);

SurMesure.propTypes = {
  // bla: PropTypes.string,
};

SurMesure.defaultProps = {
  // bla: 'test',
};

export default SurMesure;
