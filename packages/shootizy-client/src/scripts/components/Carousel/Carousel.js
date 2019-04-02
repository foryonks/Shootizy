import React from "react";
//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import { keyfix } from "../../utils/utils";

const data = keyfix([
  {
    title: "Léa est venue chez nous<br><strong>pour ses 24 Printemps</strong>",
    buttonText: "Je réserve mon shooting",
    text: "Avec Shootizy payez seulement les photos que vous aimez !",
    img: "/assets/photos/visuel1.jpg",
  },
  {
    title: "Lorem ipsum<br><strong>dolor sit amet</strong>",
    buttonText: "Je réserve mon shooting",
    text: "Avec Shootizy les meilleures clichés !",
    img: "/assets/photos/visuel2.jpg",
  },
]);

const Carousel = props => (
  <div className="Carousel container">
    <div className="carousel-content">
      <CarouselResponsive
        infiniteLoop
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={500000}>
        {data.map(({ title, buttonText, text, img, key }) => (
          <div className="carousel-item" key={key}>
            <img src={img} alt="" className="carousel-image" />
            <svg
              className="carousel-ellipse"
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 476 367">
              <path d="M0 0h423.86C456.43 59.2 476 134.94 476 217.7c0 54.44-8.47 103.6-23.53 149.3H0z" />
            </svg>
            <div className="carousel-item-content">
              <div className="carousel-item-title">
                <Interweave content={title} />
              </div>
              <p className="carousel-item-button-container">
                <button className="btn-green carousel-item-button">{buttonText}</button>
              </p>
              <p className="carousel-item-text">{text}</p>
            </div>
          </div>
        ))}
      </CarouselResponsive>
    </div>
    <svg
      className="carousel-mask"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 811 44">
      <path
        d="M0 0c97.95 23.5 245.72 37.41 411.21 37.41C571.4 37.41 715.12 22.24 813 0v44H0z"
        fill="#fff"
      />
    </svg>
  </div>
);

export default Carousel;
