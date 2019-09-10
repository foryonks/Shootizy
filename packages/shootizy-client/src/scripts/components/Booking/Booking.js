import React from "react";

import HeaderImage from "scripts/components/_common/HeaderImage";
import BookingForm from "./Form";
import Layout from "scripts/pages/Layout";

const Booking = () => {
  return (
    <Layout>
      <div className="Page booking-page">
        <HeaderImage src="" />
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
    </Layout>
  );
};

export default Booking;
