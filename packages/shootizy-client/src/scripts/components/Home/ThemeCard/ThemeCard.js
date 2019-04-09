import React from "react";
import { Link } from "react-router-dom";

import FacebookShareButton from "scripts/components/_common/FacebookShareButton";
import Icon from "../../Icon";

import "./ThemeCard.scss";

const ThemeCard = ({ productId, image, title, sharelink, price, description }) => {
  const bookingLink = `/booking/${productId}`;
  const productLink = `/produit/${productId}`;
  // TODO : onclick sur tout la carte = reserver mon shooting

  return (
    <div className="ThemeCard card card-simple">
      <div className="ThemeCard-image">
        <img src={image} alt="" />
      </div>
      <div className="ThemeCard-content">
        <div className="ThemeCard-actions">
          <button className="ThemeCard-price">Dès {price} la photo</button>
          <FacebookShareButton link={sharelink} />
        </div>
        <h4 className="ThemeCard-title">{title}</h4>
        <div className="ThemeCard-description">{description}</div>
      </div>
      <div className="ThemeCard-buttons">
        <Link to={bookingLink} className="btn-green">
          Réserver mon shooting
        </Link>
        <Link to={productLink} className="btn-white-simple">
          <Icon name="triangle-right" />
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

ThemeCard.propTypes = {
  // bla: PropTypes.string,
};

ThemeCard.defaultProps = {
  // bla: 'test',
};
export default ThemeCard;
