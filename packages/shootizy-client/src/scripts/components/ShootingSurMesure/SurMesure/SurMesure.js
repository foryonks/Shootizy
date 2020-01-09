import React from "react";
import { bool } from "prop-types";

import Form from "scripts/components/Form";
import Icon from "scripts/components/Icon";
//import ReCAPTCHA from "react-google-recaptcha";

import "./SurMesure.scss";
import { Link } from "react-router-dom";

const FORM_FIELDS = [
  {
    type: "email",
    name: "email",
    label: "Votre mail afin qu’on puisse vous répondre",
    placeholder: "Email",
    isRequired: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Expliquez-nous",
    isRequired: true,
    placeholder: "Rédigez ici...",
    props: { rows: "4" },
  },
];

const FULL_FORM = [
  {
    type: "fieldset",
    className: "form-fieldset-row-2",
    children: [
      { type: "text", name: "name", label: "Nom", placeholder: "Nom", isRequired: true },
      { type: "text", name: "firstname", label: "Prénom", placeholder: "Prénom", isRequired: true },
    ],
  },
  FORM_FIELDS[0],
  {
    type: "text",
    name: "tel",
    label: "Votre numéro de téléphone",
    placeholder: "Téléphone",
    isRequired: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Dites-nous tout",
    isRequired: true,
    placeholder: "Rédigez ici...",
    props: { rows: "4" },
  },
  // {
  //   type: "custom",
  //   label: "",
  //   name: "captcha",
  //   isRequired: true,
  //   fullWidth: true,
  //   props: { rows: "3" },
  //   render: (value, isError, onChange, onValidate) => {
  //     return (
  //       <ReCAPTCHA
  //         className="recaptcha"
  //         sitekey="d6LfcoL0UAAAAAELdlqyhJzCGm-xzGuLADmRmHnVH"
  //         onChange={value => {
  //           onChange("captcha", value);
  //         }}
  //       />
  //     );
  //   },
  // },
];

const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  label: "Envoyer votre proposition",
  className: "btn-white",
};

const SurMesure = ({ fullForm, isMobile, className }) => (
  <div
    className={`SurMesure block-forms block-shadow block block-corners block-primary-background container-2 txt-c ${className ||
      ""}`}>
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
      {isMobile ? (
        <div className="txt-c button-link">
          <Link to="shooting-sur-mesure" className="btn-white">
            Demandez-nous
          </Link>
        </div>
      ) : (
        <Form
          className="mt60 generic-form"
          id="form-sur-mesure"
          fields={fullForm ? FULL_FORM : FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/contact/sur-mesure"
        />
      )}
    </div>
  </div>
);

SurMesure.propTypes = {
  fullForm: bool,
  isMobile: bool,
};

SurMesure.defaultProps = {
  fullForm: false,
  isMobile: false,
};

export default SurMesure;
