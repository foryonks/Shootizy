import React, { useState, useCallback } from "react";
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
  const redirectProductId = location.state && location.state.productId;

  const [currentStep, setCurrentStep] = useState(redirectProductId ? 1 : 0);
  const [stepsValues, setStepsValues] = useState([
    redirectProductId ? { productId: redirectProductId } : null,
    null,
  ]);

  const handleProductSelect = useCallback(productId => {
    setStepsValues(currentStepsValues => [{ productId }, ...currentStepsValues.slice(1)]);
    // Go to next step
    setCurrentStep(currentStep => currentStep + 1);
  }, []);
  const handleTimeSelect = useCallback(bookingTime => {
    setStepsValues(currentStepsValues => [
      ...currentStepsValues.slice(0, 1),
      bookingTime && { bookingTime },
    ]);
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
      <div className="page-section section-container">
        <div className="container container-2">
          <div className="container-inside">
            <div className="booking__step-button-wrapper">
              {STEPS.map(({ title }, index) => (
                <button
                  className={classNamesDedupe("booking__step-button", {
                    "booking__step-button--active": index === currentStep,
                    "booking__step-button--done": !!stepsValues[index],
                  })}
                  key={index}
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
                  <>
                    <h2 className="booking__step__title title">
                      {index + 1}. {step.header}
                    </h2>
                    <div className="booking__step__contents">
                      {(() => {
                        switch (index) {
                          case 0:
                            return (
                              <ProductSelect
                                currentId={stepsValues[0] && stepsValues[0].productId}
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
                            return <BookingForm />;
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  </>
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
