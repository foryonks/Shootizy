import React, { Fragment, useState, useCallback } from "react";
import classNamesDedupe from "classnames/dedupe";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

import HeaderImage from "scripts/components/_common/HeaderImage";
import BookingForm from "./Form";
import { Helmet } from "react-helmet";
import ProductSelect from "./ProductSelect";
import TimePicker from "./TimePicker";

import "./Booking.scss";

const STEPS = [
  {
    title: "Shooting",
    header: (
      <>
        Choisissez <strong>le thème</strong> de votre shooting, <br />
        <strong>selon votre besoin ou votre envie</strong>
      </>
    ),
  },
  { title: "Date", header: "Choisissez une date dans notre agenda" },
  {
    title: "Finalisation",
    header: (
      <>
        <strong>Finalisez</strong> votre réservation
      </>
    ),
  },
];
const Booking = ({ location }) => {
  //const { productId: redirectProductId, productTitle: redirectProductTitle } = location.state || {};

  //const [currentStep, setCurrentStep] = useState(redirectProductId ? 1 : 0);
  // const [stepsData, setstepsData] = useState([
  //   redirectProductId ? { productId: redirectProductId, productTitle: redirectProductTitle } : null,
  //   null,
  // ])
  const [currentStep, setCurrentStep] = useState(2);
  const [stepsData, setstepsData] = useState([
    { productId: "produit-theme-bookmodel", productTitle: "Book Artiste" },
    { date: new Date(), startTime: "10:00", endTime: "11:00" },
  ]);

  const handleProductSelect = useCallback((productId, productTitle) => {
    setstepsData(currentstepsData => [{ productId, productTitle }, ...currentstepsData.slice(1)]);
    // Go to next step
    setCurrentStep(currentStep => currentStep + 1);
  }, []);
  const handleTimeSelect = useCallback(bookingTime => {
    setstepsData(currentstepsData => [...currentstepsData.slice(0, 1), bookingTime]);
    // Go to next step if time selected
    if (!!bookingTime) {
      setCurrentStep(currentStep => currentStep + 1);
    }
  }, []);

  return (
    <div className="Page booking-page">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <HeaderImage
        className="header-image-generic"
        //src="/assets/design/headers/header-shooting-studio.png"
        preTitle="Réserver mon shooting"
        title="Réserver mon shooting <br/><strong>en 3 étapes</strong>"
      />
      <div className="page-section section-container booking-page-section">
        <div className="container container-2">
          <div className="container-inside">
            <div className="booking__step-button-wrapper">
              {STEPS.map(({ title }, index) => (
                <button
                  key={index}
                  className={classNamesDedupe("booking__step-button", {
                    "booking__step-button--active": index === currentStep,
                    "booking__step-button--done": !!stepsData[index],
                  })}
                  disabled={index > 0 && !stepsData[index - 1]}
                  onClick={() => setCurrentStep(index)}>
                  <span className="booking__step-button__index">{index + 1}</span>
                  <strong className="booking__step-button__title">{title}</strong>
                </button>
              ))}
            </div>
            <div className="booking__step">
              <CarouselResponsive
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
                selectedItem={currentStep}>
                {STEPS.map((step, index) => (
                  <Fragment key={index}>
                    <h2 className="booking__step__title title">
                      {index + 1}. {step.header}
                    </h2>
                    <div className="booking__step__contents">
                      {(() => {
                        switch (index) {
                          case 0:
                            return (
                              <ProductSelect
                                currentId={stepsData[0] && stepsData[0].productId}
                                onClick={handleProductSelect}
                              />
                            );
                          case 1:
                            return (
                              <TimePicker
                                onChange={handleTimeSelect}
                                isOpen={index === currentStep}
                              />
                            );
                          case 2:
                            return (
                              <BookingForm stepsData={stepsData} onStepChange={setCurrentStep} />
                            );
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  </Fragment>
                ))}
              </CarouselResponsive>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
