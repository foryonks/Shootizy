import React from "react";
//import PropTypes from "prop-types";
import Interweave from "interweave";

const data = [
  {
    title: "Léa est venue chez nous<br><strong>pour ses 24 Printemps</strong>",
    buttonText: "Je réserve mon shooting",
    text: "Avec Shootizy payez seulement les photos que vous aimez !",
    img: "/assets/photos/visuel1.jpg",
  },
];

const Carousel = props => (
  <div className="Carousel container">
    <div className="carousel-content">
      <ul>
        {data.map(({ title, buttonText, text, img }) => (
          <li className="carousel-item">
            <img src={img} alt="" className="carousel-image" />
            <div className="carousel-item-content">
              <div className="carousel-item-title">
                <Interweave content={title} />
              </div>
              <p className="carousel-item-button-container">
                <button className="carousel-item-button">{buttonText}</button>
              </p>
              <p className="carousel-item-text">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Carousel.propTypes = {
  // bla: PropTypes.string,
};

Carousel.defaultProps = {
  // bla: 'test',
};

export default Carousel;
