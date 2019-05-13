import React from "react";
import LazyLoad from "react-lazyload";
import { Link, withRouter } from "react-router-dom";
import FacebookShareButton from "scripts/components/_common/FacebookShareButton";
import Icon from "../../Icon";
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
            {sliceAndRemoveHTML(description, 25)}
            {"\xA0"}
            <Link className="read-more" to={productLink} onClick={stopPropagation}>
              Lire la suite
            </Link>
          </div>
        </div>
        <div className="ThemeCard-buttons">
          <Link to={bookingLink} className="btn-green">
            Réserver mon shooting
          </Link>
          <Link to={productLink} className="btn-white-simple" onClick={stopPropagation}>
            <Icon name="triangle-right" />
            En savoir plus
          </Link>
        </div>
      </LazyLoad>
    </div>
  );
};

export default withRouter(ThemeCard);
