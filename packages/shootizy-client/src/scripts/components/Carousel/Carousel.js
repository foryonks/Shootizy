import React from "react";
//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import { keyfix } from "../../utils/utils";

const data = keyfix([
  {
    title: "Léa est venue chez nous<br><strong>pour ses 24 Printemps !</strong>",
    buttonText: "Je réserve mon Shooting",
    text: "Avec Shootizy payez seulement les photos que vous aimez !",
    img: "/assets/photos/visuel1.jpg",
  },
  {
    title: "Relancer sa carrière avec<br><strong>Shootizy, c'est so Easy !</strong>",
    buttonText: "Je réserve mon Shooting",
    text: "Avec Shootizy payez seulement les photos que vous aimez !",
    img: "/assets/photos/visuel2.jpg",
  },
]);

const Carousel = props => (
  <div className="Carousel container">
    <div className="carousel-content">
      <CarouselResponsive
        infiniteLoop
        //autoPlay
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={5000}>
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
            <a href="/">
              <div className="carousel-item-content">
                <div className="carousel-item-title">
                  <Interweave content={title} />
                </div>
                <p className="carousel-item-button-container">
                  <button className="btn-green carousel-item-button">{buttonText}</button>
                </p>
                <p className="carousel-item-text">{text}</p>
              </div>
            </a>
          </div>
        ))}
      </CarouselResponsive>
    </div>
    <svg className="carousel-mask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 813 44">
      <path
        d="M0 0c97.9 23.5 245.7 37.4 411.2 37.4C571.4 37.4 715.1 22.2 813 0v44H0V0z"
        fill="#fff"
      />
    </svg>
  </div>
);

export default Carousel;
