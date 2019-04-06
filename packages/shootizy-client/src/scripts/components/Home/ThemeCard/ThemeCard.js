import React from "react";
import "./ThemeCard.scss";
import FacebookShareButton from "scripts/components/_common/FacebookShareButton";
import Icon from "../../Icon";

const ThemeCard = ({ image, title, sharelink, price, description, id }) => {
  let bookingLink = `/booking/${id}`;
  let moreLink = `/theme/`;
  return (
    <div className="ThemeCard card card-simple">
      <div className="ThemeCard-image">
        <img src={image} alt="" />
      </div>
      <div className="ThemeCard-content">
        <div className="ThemeCard-actions">
          <button className="ThemeCard-price">Dès {price} la photo</button>
          <FacebookShareButton />
        </div>
        <h4 className="ThemeCard-title">{title}</h4>
        <div className="ThemeCard-description">{description}</div>
        <div className="ThemeCard-buttons">
          <button className="btn-green">Réserver mon shooting</button>
          <button className="btn-white-simple">
            <Icon name="triangle-right" />
            En savoir plus
          </button>
        </div>
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
