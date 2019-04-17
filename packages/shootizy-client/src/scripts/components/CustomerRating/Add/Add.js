import React from "react";
import PropTypes from "prop-types";

import RatingScore, { MAX_SCORE } from "../Score";
import Form from "scripts/components/Form";

import "./Add.scss";

const FORM_FIELDS = [
  { type: "text", name: "name", label: "Votre nom et prénom", isRequired: true },
  {
    type: "date",
    name: "shootingDate",
    label: "Date de votre shooting",
    //TO-DO add date picker for IE
    placeholder: "aaaa-mm-jj",
    isRequired: true,
  },
  {
    type: "custom",
    name: "score",
    label: "Votre avis",
    value: MAX_SCORE,
    isRequired: true,
    render: (value, isError, onChange) => {
      return (
        <RatingScore
          score={value}
          className={!value && isError ? "form-field--is-error" : ""}
          onItemClick={score => onChange("score", score)}
        />
      );
    },
  },
  {
    type: "textarea",
    name: "comment",
    className: "field--full-width",
    isRequired: true,
    props: { rows: "3" },
  },
];
const FORM_SUBMIT_BTN = { label: "Publier", className: "btn-green" };

const Add = ({ onSubmit }) => {
  return (
    <Form
      id="form-rating"
      className="form-rating"
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
