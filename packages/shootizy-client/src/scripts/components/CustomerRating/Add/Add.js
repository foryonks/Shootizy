import React from "react";
import PropTypes from "prop-types";

import RatingScore, { MAX_SCORE } from "../Score";
import Form from "scripts/components/Form";

const FORM_FIELDS = [
  { type: "text", name: "name", label: "Votre nom et prénom", isRequired: true },
  { type: "date", name: "shootingDate", label: "Date de votre shooting", isRequired: true },
  {
    type: "custom",
    name: "score",
    label: "Votre avis",
    value: MAX_SCORE,
    isRequired: true,
    render: (value, onChange, isError) => {
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
    label: "Votre commentaire",
    isRequired: true,
    props: { rows: "3" },
  },
];
const FORM_SUBMIT_BTN = { label: "Publier", className: "btn-green" };

const Add = ({ onSubmit }) => {
  return (
    <Form
      id="form-newsletter"
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
