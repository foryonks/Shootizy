import React from "react";
import { formatDateStd } from "scripts/utils/DateUtils.js";
import "./CarouselRenderer.scss";

const CarouselRenderer = ({ item, index, key }) => {
  const { imageLarge, title, date, category } = item;
  return (
    <div className="BlogCarouselRenderer" key={key}>
      <div
        className="BlogCarouselRenderer-contentwrapper"
        style={{ backgroundImage: `url(${imageLarge})` }}>
        <div className="BlogCarousel-content">
          <div className="blog-cat-datetime">
            <span className="content-theme">{category.name}</span>
            {" / "}
            <span className="content-date">{formatDateStd(date)}</span>
          </div>
          <h3 className="BlogCarousel-content-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CarouselRenderer;
