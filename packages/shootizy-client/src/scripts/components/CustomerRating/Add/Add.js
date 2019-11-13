import React from "react";
import PropTypes from "prop-types";

import RatingScore, { MAX_SCORE } from "../Score";
import Smiley from "../Smiley";
import Form from "scripts/components/Form";

import "./Add.scss";

const TODAY = new Date();

const FORM_FIELDS = [
  {
    type: "text",
    name: "name",
    label: "Votre nom complet",
    placeHolder: "Ex : Anne Doe",
    isRequired: true,
  },
  {
    type: "date",
    name: "shootingDate",
    label: "Date de votre shooting",
    placeHolder: "Ex : 15/04/1982",
    isRequired: true,
    fullWidth: true,
    props: {
      maxDate: TODAY,
    },
  },
  {
    type: "custom",
    name: "score",
    label: "Votre note",
    value: MAX_SCORE,
    isRequired: true,
    render: (value, isError, onChange, onValidate) => {
      return (
        <div className="rating-line">
          <RatingScore
            score={value}
            className={isError ? "form-field--is-error" : ""}
            onItemClick={score => {
              onChange("score", score);
              onValidate("score");
            }}
          />
          <Smiley score={value} className="smallSmiley" />
        </div>
      );
    },
  },
  {
    type: "textarea",
    name: "comment",
    label: "Ajoutez un commentaire",
    placeHolder: "Rédigez-ici",
    isRequired: true,
    fullWidth: true,
    props: { rows: "3" },
  },
];
const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  label: "Envoyez votre avis",
  className: "btn-white mt50",
};

const Add = ({ onSubmit }) => {
  return (
    <Form
      id="form-rating"
      className="form-rating generic-form"
      fields={FORM_FIELDS}
      submitBtn={FORM_SUBMIT_BTN}
      action="/api/ratings"
      successMessage="Merci pour votre avis !"
      onSuccess={onSubmit}
    />
  );
};

Add.propTypes = {
  onSubmit: PropTypes.func,
};
export default Add;
