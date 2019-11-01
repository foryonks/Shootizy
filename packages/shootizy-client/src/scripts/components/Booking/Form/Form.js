import React from "react";
import PropTypes from "prop-types";

import Form from "scripts/components/Form";
import { formatDateStd } from "scripts/utils/DateUtils";

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
  if (!stepsData || stepsData.some(stepValue => !stepValue)) {
    // Only show if every step is ok
    return null;
  }
  const { productTitle } = stepsData[0];
  const { date, startTime, endTime } = stepsData[1];
  return (
    stepsData &&
    stepsData.every(stepValue => !!stepValue) && (
      <>
        <ul className="row row-2 booking-summary">
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>1. Shooting</strong>
            <span>{stepsData[0].productTitle}</span>
            <button className="btn-green-small">Modifier</button>
          </li>
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>2. Date</strong>
            <span>
              {formatDateStd(date)}
              <br />
              {startTime} - {endTime}
            </span>
            <button className="btn-green-small">Modifier</button>
          </li>
        </ul>
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
      </>
    )
  );
};

BookingForm.propTypes = {
  stepsData: PropTypes.array,
};
export default BookingForm;
