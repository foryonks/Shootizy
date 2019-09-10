import React from "react";
import classNamesDedupe from "classnames/dedupe";
import { Link, withRouter } from "react-router-dom";

//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImageMask from "scripts/components/_common/HeaderImageMask/HeaderImageMask";

const CarouselHome = ({ history, children }) => {
  const { contents } = useRemoteContents("/api/contents/home-carousel");
  const items = contents ? contents.items : [];

  return (
    <div className="CarouselHome container">
      <div className="carouselHome-content">
        <CarouselResponsive
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          interval={6000}>
          {items.map(({ title, contentLink, buttonLink, buttonText, text, img, key }, index) => (
            <div className="carouselHome-item" key={index}>
              <img src={img} alt="" className="carouselHome-image" />
              <svg
                className="carouselHome-ellipse"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476 367">
                <path d="M0 0h423.86C456.43 59.2 476 134.94 476 217.7c0 54.44-8.47 103.6-23.53 149.3H0z" />
              </svg>
              <div
                className={classNamesDedupe("carouselHome-item-content", {
                  "carouselHome-item-content--link": !!contentLink,
                })}
                onClick={() => {
                  contentLink && history.push(contentLink);
                }}>
                <div className="carouselHome-item-title">
                  <Interweave content={title} />
                </div>
                <p className="carouselHome-item-button-container">
                  {buttonLink && (
                    <Link
                      to={buttonLink}
                      className="btn-green btn-green-hover-invert carouselHome-item-button"
                      onClick={e => e.stopPropagation()}>
                      {buttonText}
                    </Link>
                  )}
                </p>
                <p className="carouselHome-item-text">{text}</p>
              </div>
            </div>
          ))}
        </CarouselResponsive>
        <HeaderImageMask />
      </div>
      {children}
    </div>
  );
};

export default withRouter(CarouselHome);
