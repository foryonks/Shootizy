import React from "react";
import { number, array, func, bool } from "prop-types";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

const Carousel = ({ selectedItem, children, className, items, render, ...props }) => {
  items = items || [];
  return (
    <div className={`Carousel   ${className}`}>
      <div className="carousel-content">
        {items && items.length && (
          <CarouselResponsive
            selectedItem={selectedItem}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            {...props}
            interval={4000}>
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
  infiniteLoop: bool,
  autoPlay: bool,
};

Carousel.defaultProps = {
  selectedItem: 0,
  infiniteLoop: false,
  autoPlay: false,
};

export default Carousel;
