import React from "react";
import { number, array, func } from "prop-types";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

const Carousel = ({ selectedItem, children, className, items, render }) => {
  items = items || [];
  return (
    <div className={`Carousel   ${className}`}>
      <div className="carousel-content">
        {items && items.length && (
          <CarouselResponsive
            selectedItem={selectedItem}
            infiniteLoop
            autoPlay
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            interval={6000}>
            {items.map((item, index) => render({ item, index, key: index }))}
          </CarouselResponsive>
        )}
      </div>
      {children}
    </div>
  );
};

Carousel.propTypes = {
  children: func,
  items: array,
  selectedItem: number,
};

Carousel.defaultProps = {
  selectedItem: 0,
};

export default Carousel;
