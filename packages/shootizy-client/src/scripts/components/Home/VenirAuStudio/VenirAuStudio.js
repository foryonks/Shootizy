import React from "react";
import PropTypes from "prop-types";
import "./VenirAuStudio.scss";

const VenirAuStudio = props => (
  <section className="VenirAuStudioWrapper">
    <h2 className="title">Venir au studio !</h2>
    <div className="description">
      Pour nous trouver, <strong>c’est so easy dans Paris !</strong> En plein cœur du 9ème
      arrondissement de Paris, venez vivre l’expérience Shootizy,{" "}
      <strong>le shooting en mode so easy !</strong>
    </div>
    <div className="row row-2">
      <div className="col">
        <form>sfsdf</form>
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
