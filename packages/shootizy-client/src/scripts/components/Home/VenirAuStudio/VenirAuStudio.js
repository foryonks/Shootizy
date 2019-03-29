import React from "react";
//import PropTypes from "prop-types";
import "./VenirAuStudio.scss";

const VenirAuStudio = props => (
  <section className="VenirAuStudioWrapper">
    <div className="container-2">
      <h2 className="title">Venir au studio !</h2>
      <div className="description">
        Pour nous trouver, <strong>c’est so easy dans Paris !</strong> En plein cœur du 9ème
        arrondissement de Paris, venez vivre l’expérience Shootizy,{" "}
        <strong>le shooting en mode so easy !</strong>
      </div>
      <div className="row row-2">
        <div className="col">
          <form action="">
            <div className="form-line label-top">
              <label htmlFor="venirstudionom">Nom :</label>
              <input type="text" id="venirstudionom" />
            </div>
            <div className="form-line label-top">
              <label htmlFor="venirstudioemail">Email :</label>
              <input type="text" id="venirstudioemail" />
            </div>
            <div className="form-line label-top">
              <label htmlFor="venirstudiomessage">
                Message (ou numéro de téléphone pour être rappelé)
              </label>
              <textarea id="venirstudiomessage" />
            </div>
            <div className="button-container-centered">
              <button className="btn-green" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

VenirAuStudio.propTypes = {
  // bla: PropTypes.string,
};

VenirAuStudio.defaultProps = {
  // bla: 'test',
};

export default VenirAuStudio;
