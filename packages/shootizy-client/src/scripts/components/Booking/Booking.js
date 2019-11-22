import React, { Fragment, useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classNamesDedupe from "classnames/dedupe";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

import HeaderImage from "scripts/components/_common/HeaderImage";
import BookingForm from "./Form";
import { Helmet } from "react-helmet";
import ProductSelect from "./ProductSelect";
import TimePicker from "./TimePicker";
import FloattingItems from "scripts/components/ShootingStudio/FloattingItems";

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
  {
    title: "Date",
    header: (
      <>
        Choisissez <strong>une date</strong> dans notre agenda
      </>
    ),
  },
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
  const { productId: redirectProductId, productTitle: redirectProductTitle } = location.state || {};

  const [currentStep, setCurrentStep] = useState(redirectProductId ? 1 : 0);
  const [stepsData, setstepsData] = useState([
    redirectProductId ? { productId: redirectProductId, productTitle: redirectProductTitle } : null,
    null,
  ]);

  // Success booking confirmed
  const isConfirmed = currentStep === STEPS.length;
  useEffect(() => {
    if (isConfirmed) {
      // Show confirmation
      window.scrollTo(0, 0);
    }
  }, [isConfirmed]);

  const handleProductSelect = useCallback((productId, productTitle) => {
    setstepsData(currentstepsData => [{ productId, productTitle }, ...currentstepsData.slice(1)]);

    // Go to next step
    setCurrentStep(currentStep => currentStep + 1);
  }, []);
  const handleTimeSelect = useCallback(bookingTime => {
    setstepsData(currentstepsData => [...currentstepsData.slice(0, 1), bookingTime]);
    // Go to next step if time selectedst
    if (!!bookingTime) {
      setCurrentStep(currentStep => currentStep + 1);
    }
  }, []);

  const wrapperElement = useRef();
  const scrollToWrapper = useCallback(() => {
    wrapperElement.current.scrollIntoView();
    //Avoid Sticky header
    window.scrollBy(0, -100);
  }, []);

  return (
    <div className="Page booking-page">
      <Helmet bodyAttributes={{ class: "header-padding-page page-section-grey" }} />
      <HeaderImage
        src="assets/design/booking/header-background.svg"
        preTitle="Réserver mon shooting"
        title={
          !isConfirmed
            ? "Réserver mon shooting <br/><strong>en 3 étapes</strong>"
            : "<strong>Merci</strong> de votre confiance!"
        }
        subTitle={
          isConfirmed
            ? `<span class="small">Vous allez recevoir un email de confirmation.<br />Nous revenons vers vous dans les plus brefs délais :)</span>`
            : ""
        }
        useMask={false}
      />
      <div className="section-container booking-page-section">
        <div className="container container-2">
          <div className="">
            <div className="booking__step-button-wrapper" ref={wrapperElement}>
              {!isConfirmed ? (
                STEPS.map(({ title }, index) => (
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
                ))
              ) : (
                <Link className={"booking__step-button"} to={"/"}>
                  <strong className="booking__step-button__title">Retour Accueil</strong>
                </Link>
              )}
            </div>
            <div className="booking__step">
              {!isConfirmed ? (
                <CarouselResponsive
                  showThumbs={false}
                  showIndicators={false}
                  showStatus={false}
                  showArrows={false}
                  selectedItem={currentStep}
                  swipeable={false}
                  onChange={scrollToWrapper}>
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
              ) : (
                <FloattingItems />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
