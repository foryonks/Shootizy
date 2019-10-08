import React from "react";
import LazyLoad from "react-lazyload";
import { Link, withRouter } from "react-router-dom";
import FacebookShareButton from "scripts/components/_common/FacebookShareButton";
import { sliceAndRemoveHTML } from "scripts/utils/utils.js";
import "./ThemeCard.scss";

const stopPropagation = e => {
  e.stopPropagation();
};

const ThemeCard = ({ productId, image, title, sharelink, price, description, history }) => {
  const bookingLink = `/shooting-studio/${productId}/booking`;
  const productLink = `/shooting-studio/${productId}`;

  return (
    <div
      className="ThemeCard card card-simple"
      onClick={() => {
        history.push(bookingLink);
      }}>
      <LazyLoad height={300}>
        <div className="ThemeCard-image">
          <img src={image} alt="" />
        </div>
        <div className="ThemeCard-content">
          <div className="ThemeCard-actions">
            <button className="ThemeCard-price">Dès {price} la photo</button>
            <FacebookShareButton link={sharelink} />
          </div>
          <h4 className="ThemeCard-title">{title}</h4>
          <div className="ThemeCard-description">
            {sliceAndRemoveHTML(description, 24)}

            <Link className="read-more" to={productLink} onClick={stopPropagation}>
              Lire la suite{"\xA0"}&gt;
            </Link>
          </div>
          <div className="button">
            <a href={bookingLink} className="btn-green-small">
              Réserver mon shooting
            </a>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default withRouter(ThemeCard);
