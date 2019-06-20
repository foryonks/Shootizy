import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";

import { AppContext } from "scripts/contexts/App";
import Form from "scripts/components/Form";
import TimePicker from "../TimePicker";
import DropdownPopover from "scripts/components/_common/DropdownPopover";

import "./Form.scss";

const FORM_SUBMIT_BTN = { hiddenOnSubmit: true, label: "Réserver", className: "btn-green" };

const BookingForm = ({ productId }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];

  const FORM_FIELDS = useMemo(
    () => [
      {
        type: "custom",
        name: "bookingTime",
        label: "Date souhaitée",
        isRequired: true,
        render: (value, isError, onChange, onValidate) => {
          return (
            <TimePicker
              className={isError ? "form-field--is-error" : ""}
              onChange={selectedTime => {
                onChange("bookingTime", selectedTime);
                if (selectedTime) {
                  onValidate("bookingTime");
                }
              }}
            />
          );
        },
      },
      ...(list.length
        ? [
            {
              type: "custom",
              name: "productId",
              label: "Thème de votre shooting",
              isRequired: true,
              value: productId || null,
              render: (value, isError, onChange, onValidate) => {
                return (
                  <DropdownPopover
                    list={list}
                    disabled={!!productId}
                    renderListItem={({ productId, title, image }) => (
                      <div className="row products-dropdown">
                        <img src={image} alt={productId} className="col-2" />
                        <span className="col-10">{title}</span>
                      </div>
                    )}
                    getItemValue={({ productId }) => productId}
                    getItemKey={({ productId }) => productId}
                    getItemLabel={({ title }) => title}
                    value={value}
                    className={isError ? "form-field--is-error" : ""}
                    onChange={productId => {
                      onChange("productId", productId);
                      onValidate("productId");
                    }}
                  />
                );
              },
            },
          ]
        : []),
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
    ],
    [list]
  );

  const actionUrl = `/api/booking/reservations`;
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
