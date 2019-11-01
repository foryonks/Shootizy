import React from "react";
import PropTypes from "prop-types";

import Form from "scripts/components/Form";

import "./Form.scss";

const FORM_FIELDS = [
  { type: "text", name: "name", label: "Votre nom et prénom", isRequired: true },
  {
    type: "email",
    name: "email",
    label: "Votre email",
    placeholder: "ex : julien@yahoo.fr",
    isRequired: true,
  },
  {
    type: "phone",
    name: "phone",
    label: "Votre numéro de téléphone",
    placeholder: "0- -- -- -- --",
    isRequired: true,
  },
];
const FORM_SUBMIT_BTN = { hiddenOnSubmit: true, label: "Réserver", className: "btn-green" };

const BookingForm = ({ stepsData }) => {
  return (
    <div className="card card-simple booking-form">
      <Form
        id="form-reservation"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action={`/api/booking/reservations`}
        errorMessage="Réservation échouée, veuillez réessayer !"
        successMessage="Votre réservation a été enregistrée, merci !"
      />
    </div>
  );
};

BookingForm.propTypes = {
  stepsData: PropTypes.array,
};
export default BookingForm;
