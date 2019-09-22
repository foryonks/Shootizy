import React, { useContext } from "react";
import classNamesDedupe from "classnames/dedupe";
import { Link, withRouter } from "react-router-dom";

//import PropTypes from "prop-types";
import Interweave from "interweave";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImageMask from "scripts/components/_common/HeaderImageMask/HeaderImageMask";
import { AppContext } from "scripts/contexts/App";

const CarouselHome = ({ history, children }) => {
  const { contents } = useRemoteContents("/api/contents/home-carousel");
  const {
    state: { themesById = {} },
  } = useContext(AppContext);
  const items = contents ? contents.items : [];
  return (
    <div className="CarouselHome container">
      <div className="carouselHome-content carousel-green-arrows carousel-position-full-width-header">
        <CarouselResponsive
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          interval={600000}>
          {items.map(
            ({ title, contentLink, buttonLink, buttonText, text, img, key, themeId }, index) => {
              const theme = themesById[themeId];
              return (
                <div
                  className="carouselHome-item"
                  key={index}
                  style={{ backgroundImage: `url(${img})` }}>
                  {/* <img src={img} alt="" className="carouselHome-image" /> */}
                  <div className="carouselHome-item-wrapper">
                    <div
                      className={classNamesDedupe("carouselHome-item-content", {
                        "carouselHome-item-content--link": !!contentLink,
                      })}
                      onClick={() => {
                        contentLink && history.push(contentLink);
                      }}>
                      <div className="carouselHome-item-category">
                        Shooting Studio :{" "}
                        <a href={`/shooting-studio/${theme.productId}`}>{theme.title}</a>
                      </div>
                      <div className="carouselHome-item-title">
                        <Interweave content={title} />
                      </div>
                      <p className="carouselHome-item-button-container">
                        {buttonLink && (
                          <Link
                            to={buttonLink}
                            className="btn-green btn-big btn-green-hover-invert carouselHome-item-button"
                            onClick={e => e.stopPropagation()}>
                            {buttonText}
                          </Link>
                        )}
                      </p>
                      {/* <p className="carouselHome-item-text">{text}</p> */}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </CarouselResponsive>
        <HeaderImageMask />
      </div>
      {children}
    </div>
  );
};

export default withRouter(CarouselHome);
