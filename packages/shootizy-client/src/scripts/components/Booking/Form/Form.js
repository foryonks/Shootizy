import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Form from "scripts/components/Form";
import { formatDate } from "scripts/utils/DateUtils";
import ThemesNavigation from "scripts/components/Product/ThemesNavigation";
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
        <h2 className="title">Vos coordonnées</h2>
        <p>Afin de rester en contact</p>
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
    className: "small-text-mandatory",
    renderHeader: () => <div>* Champs obligatoires</div>,
    children: [],
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
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(() => {
    return stepsData && stepsData[0];
  });
  useEffect(() => {
    setSelectedProduct(stepsData && stepsData[0]);
  }, [stepsData]);

  if (!stepsData) {
    return null;
  }
  const { productId, productTitle } = selectedProduct || {};
  const { date, startTime, endTime } = stepsData[1] || {};
  const formatPostData = data => ({
    ...data,
    productId,
    bookingTime: { date, startTime, endTime },
  });

  const IconModify = () => (
    <svg width="15px" height="15px" viewBox="0 0 15 15">
      <path
        d="M217.634 174.485l-1.643 1.643-4.12-4.118 1.643-1.634c.228-.238.556-.376.892-.376.336 0 .663.138.9.376l2.328 2.317c.227.237.366.564.366.901 0 .336-.14.663-.366.891zm-6.08-.158a.228.228 0 00-.168.07l-5.366 5.365c-.049.05-.07.11-.07.168 0 .13.09.219.218.219.06 0 .119-.02.168-.07l5.367-5.366c.049-.05.07-.11.07-.17a.208.208 0 00-.22-.216zm-4.059 8.505l-2.327-2.327-.9.9v1.06h1.267v1.269h1.059l.901-.902zm7.86-6.07L207.12 185H203v-4.119l8.237-8.238 4.118 4.12z"
        transform="translate(-1213 -1091) translate(570 765) translate(400 10) translate(40 146)"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );

  const onProductChange = (evt, { productId, title }) => {
    evt.preventDefault();
    setSelectedProduct({ productId, productTitle: title });
    setShowProducts(false);
  };

  return (
    <>
      <ul className="row row-2 booking-summary">
        {stepsData[0] && (
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>1. Shooting</strong>
            <span className="booking-summary__item-title">{productTitle}</span>
            <div className="themes-navigation-container">
              <button className="btn-simple" onClick={() => setShowProducts(!showProducts)}>
                Modifier <IconModify />
              </button>

              {showProducts && (
                <ThemesNavigation
                  className="themes-navigation themes-navigation--selectmode"
                  onItemClick={onProductChange}
                  showImage={false}
                />
              )}
            </div>
          </li>
        )}
        {stepsData[1] && (
          <li className="booking-summary__item card card-simple card-shadow">
            <strong>2. Date</strong>
            <span className="booking-summary__item-title">
              {formatDate(date, "ddd. D MMM YYYY")}
              <br />
              {startTime} - {endTime}
            </span>
            <button className="btn-simple" onClick={() => onStepChange(1)}>
              Modifier <IconModify />
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
          onSuccess={() => onStepChange(3)}
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
