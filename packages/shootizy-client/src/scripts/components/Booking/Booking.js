import React from "react";

import HeaderImage from "scripts/components/_common/HeaderImage";
import BookingForm from "./Form";
import { Helmet } from "react-helmet";

const Booking = () => {
  return (
    <div className="Page booking-page">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <HeaderImage
        className="header-image-generic"
        //src="/assets/design/headers/header-shooting-studio.png"
        preTitle="Tarifs"
        title="Un peu de tarifs <strong>blabla</strong>"
      />
      <div className="container  container-2">
        <h2 className="title">Réservez votre séance</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
          vehicula nisl lacinia ut. Ut urna ligula.
        </p>
      </div>
      <div className="page-section section-container">
        <div className="container container-2">
          <div className="container-inside">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
