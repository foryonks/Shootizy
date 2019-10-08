import React from "react";
//import PropTypes from "prop-types";

import Form from "scripts/components/Form";
import Icon from "scripts/components/Icon";
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
const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  label: "Envoyer votre proposition",
  className: "btn-white",
};

const SurMesure = props => (
  <div className="SurMesure block-forms block block-corners block-primary-background container-2 txt-c">
    <div className="block-content">
      <div className="icon-circle">
        <Icon name="cut-peigne" />
      </div>
      <h2 className="title">
        <strong>Un Shooting sur mesure ?</strong>
      </h2>
      <div className="text">
        Un besoin (très) particulier ? Avec ou sans vidéo ? Une solution que vous ne trouvez pas
        encore ? <strong>Dites-nous tout, on s’occupe de vous !</strong>
      </div>
      {/* <div className="SurMesure-description">
        Un besoin (très) particulier ? Avec ou sans vidéo ? Une solution que vous ne trouvez pas
        encore ? <strong>Dites-nous tout, on s’occupe de vous !</strong>
      </div> */}
      <Form
        className="mt50"
        id="form-sur-mesure"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/contact/sur-mesure"
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
