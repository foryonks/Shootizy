import React from "react";
//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImageMask from "scripts/components/_common/HeaderImageMask/HeaderImageMask";

const Carousel = ({ children }) => {
  const { contents } = useRemoteContents("/api/contents/home-carousel");
  const items = contents ? contents.items : [];

  return (
    <div className="Carousel container">
      <div className="carousel-content">
        <CarouselResponsive
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          interval={4000}>
          {items.map(({ title, buttonText, text, img, key }, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt="" className="carousel-image" />
              <svg
                className="carousel-ellipse"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476 367">
                <path d="M0 0h423.86C456.43 59.2 476 134.94 476 217.7c0 54.44-8.47 103.6-23.53 149.3H0z" />
              </svg>
              <a href="/">
                <div className="carousel-item-content">
                  <div className="carousel-item-title">
                    <Interweave content={title} />
                  </div>
                  <p className="carousel-item-button-container">
                    <button className="btn-green btn-green-hover-invert carousel-item-button">
                      {buttonText}
                    </button>
                  </p>
                  <p className="carousel-item-text">{text}</p>
                </div>
              </a>
            </div>
          ))}
        </CarouselResponsive>
        <HeaderImageMask />
      </div>
      {children}
    </div>
  );
};

export default Carousel;
