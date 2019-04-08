import React from "react";
//import PropTypes from "prop-types";

import Form from "scripts/components/Form";

import "./SurMesure.scss";

const FORM_FIELDS = [
  {
    type: "email",
    name: "email",
    label: "Votre mail afin qu’on puisse vous répondre",
    isRequired: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Expliquez-nous",
    isRequired: true,
    props: { rows: "3" },
  },
];
const FORM_SUBMIT_BTN = { label: "Je propose mon thème à Shootizy", className: "btn-green" };

const SurMesure = props => (
  <div className="SurMesure card-simple container-2">
    <div className="container-inside">
      <h2 className="title">
        <strong>Sur mesure !</strong>
      </h2>
      <div className="SurMesure-description">
        Un besoin (très) particulier ? Avec ou sans vidéo ? Une solution que vous ne trouvez pas
        encore ? <strong>Dites-nous tout, on s’occupe de vous !</strong>
      </div>
      <Form
        id="form-sur-mesure"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/sur-mesure"
        successMessage="Merci pour votre proposition !"
      />
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
