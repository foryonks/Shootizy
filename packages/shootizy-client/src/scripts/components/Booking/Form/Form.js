import React from "react";
import PropTypes from "prop-types";

import Form from "scripts/components/Form";
import TimePicker from "../TimePicker";

import "./Form.scss";

const FORM_FIELDS = [
  {
    type: "custom",
    name: "bookingTime",
    label: "Date souhaitée",
    isRequired: true,
    render: (value, isError, onChange, onValidate) => {
      return (
        <TimePicker
          score={value}
          className={isError ? "form-field--is-error" : ""}
          onChange={selectedTime => {
            onChange("bookingTime", selectedTime);
            onValidate("bookingTime");
          }}
        />
      );
    },
  },
  { type: "text", name: "name", label: "Votre nom et prénom", isRequired: true },
  {
    type: "email",
    name: "email",
    label: "Votre email",
    placeholder: "ex : julien@yahoo.fr",
    isRequired: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Message (ou numéro de téléphone pour être rappelé)",
    isRequired: true,
    props: { rows: "3" },
  },
];
const FORM_SUBMIT_BTN = { label: "Réserver", className: "btn-green" };

const BookingForm = ({ productId }) => {
  const actionUrl = `/api/booking/reservations${productId ? `?productId=${productId}` : ""}`;
  return (
    <div className="card card-simple booking-form">
      <Form
        id="form-reservation"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action={actionUrl}
        errorMessage="Réservation échouée, veuillez réessayer !"
        successMessage="Votre réservation a été enregistrée, merci !"
      />
    </div>
  );
};

BookingForm.propTypes = {
  productId: PropTypes.string,
};
export default BookingForm;
