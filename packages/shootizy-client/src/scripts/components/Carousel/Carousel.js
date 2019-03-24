import React from "react";
//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

const data = [
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
];

const Carousel = props => (
  <div className="Carousel container">
    <div className="carousel-content">
      <CarouselResponsive
        infiniteLoop
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={5000}>
        {data.map(({ title, buttonText, text, img }) => (
          <div className="carousel-item">
            <img src={img} alt="" className="carousel-image" />
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
  </div>
);

export default Carousel;
