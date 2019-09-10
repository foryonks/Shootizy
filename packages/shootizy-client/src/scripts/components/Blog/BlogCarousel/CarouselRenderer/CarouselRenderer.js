import React from "react";
import { formatDateStd } from "scripts/utils/DateUtils.js";
import "./CarouselRenderer.scss";

const CarouselRenderer = ({ item, index, key }) => {
  const { imageLarge, title, date, category } = item;
  const formattedDate = formatDateStd(date);
  return (
    <div className="BlogCarouselRenderer" key={key}>
      <div
        className="BlogCarouselRenderer-contentwrapper"
        style={{ backgroundImage: `url(${imageLarge})` }}>
        <div className="BlogCarousel-content">
          <div className="BlogCarousel-firstline">
            <span className="BlogCarousel-content-theme">{category.name}</span>
            {" / "}
            <span className="BlogCarousel-content-date">{formattedDate}</span>
          </div>
          <h3 className="BlogCarousel-content-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CarouselRenderer;
