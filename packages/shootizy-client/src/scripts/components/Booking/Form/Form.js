import React from "react";
import PropTypes from "prop-types";

import Form from "scripts/components/Form";
import { formatDateStd } from "scripts/utils/DateUtils";

import "./Form.scss";

const TODAY = new Date();

const FORM_FIELDS = [
  {
    type: "fieldset",
    className: "booking-message-fieldset",
    children: [
      {
        type: "textarea",
        rows: 3,
        name: "message",
        label: "Avez-vous des attentes particulières pour votre shooting ?",
        placeholder: "Rédigez ici...",
      },
    ],
  },
  {
    type: "fieldset",
    className: "booking-separator-fieldset",
    renderHeader: () => (
      <div className="booking-separator-fieldset__header">
        <h3>Vos coordonnées</h3>
      </div>
    ),
    children: [],
  },
  {
    type: "fieldset",
    className: "booking-name-fieldset form-fieldset-row-2",
    children: [
      { type: "text", name: "lastName", label: "Nom", placeholder: "Nom", isRequired: true },
      {
        type: "text",
        name: "firstName",
        label: "Prénom",
        placeholder: "Prénom",
        isRequired: true,
      },
    ],
  },
  {
    type: "fieldset",
    className: "booking-contact-fieldset",
    children: [
      {
        type: "date",
        name: "birthdate",
        label: (
          <>
            Date de naissance <span className="label-legend">(On aime offir des cadeaux)</span>
          </>
        ),
        fullWidth: true,
        props: {
          maxDate: TODAY,
        },
      },
      {
        type: "email",
        name: "email",
        label: "Votre email afin que l'on puisse vous répondre",
        placeholder: "ex : julien@yahoo.fr",
        isRequired: true,
      },
      {
        type: "phone",
        name: "phone",
        label: "Votre numéro de téléphone",
        placeholder: "0- -- -- -- --",
      },
      {
        type: "text",
        name: "parentCode",
        label: "Code parrainage",
        placeholder: "Code",
      },
    ],
  },
  {
    type: "fieldset",
    className: "booking-checkboxes-fieldset",
    children: [
      {
        type: "checkbox",
        name: "cgv",
        label: (
          <>
            J'ai lu et j'accepte les{" "}
            <a className="link" href="#to-do">
              Conditions Générales d'Utilisation
            </a>
          </>
        ),
        isRequired: "Veuillez accepter les Conditions Générales d'Utilisation",
      },
      {
        type: "checkbox",
        name: "newsletterGeneral",
        label: "Je m'inscris à la newsletter SHOOTIZY",
      },
    ],
  },
];
const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  label: "Finaliser la réservation",
  className: "btn-green",
};

const BookingForm = ({ stepsData, onStepChange }) => {
  if (!stepsData) {
    return null;
  }
  const { productId, productTitle } = stepsData[0] || {};
  const { date, startTime, endTime } = stepsData[1] || {};
  const formatPostData = data => ({
    ...data,
    productId,
    bookingTime: { date, startTime, endTime },
  });

  return (
    <>
      <ul className="row row-2 booking-summary">
        {stepsData[0] && (
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>1. Shooting</strong>
            <span>{productTitle}</span>
            <button className="btn-green-small" onClick={() => onStepChange(0)}>
              Modifier
            </button>
          </li>
        )}
        {stepsData[1] && (
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>2. Date</strong>
            <span>
              {formatDateStd(date)}
              <br />
              {startTime} - {endTime}
            </span>
            <button className="btn-green-small" onClick={() => onStepChange(1)}>
              Modifier
            </button>
          </li>
        )}
      </ul>
      <div className="booking-form">
        <Form
          id="form-reservation"
          className="generic-form"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action={`/api/booking/reservations`}
          formatPostData={formatPostData}
          errorMessage="Réservation échouée, veuillez réessayer !"
          successMessage="Votre réservation a été enregistrée, merci !"
        />
      </div>
    </>
  );
};

BookingForm.propTypes = {
  stepsData: PropTypes.array,
  onStepChange: PropTypes.func,
};
export default BookingForm;
