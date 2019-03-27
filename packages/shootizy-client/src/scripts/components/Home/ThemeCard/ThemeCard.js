import React from "react";
import "./ThemeCard.scss";
import Icon from "../../Icon";

const ThemeCard = ({ image, title, sharelink, description, bookingLink, moreLink }) => {
  return (
    <div className="ThemeCard card card-simple">
      <div className="ThemeCard-image">
        <img src={image} alt="" />
      </div>
      <h4 className="ThemeCard-title">{title}</h4>
      <div className="ThemeCard-description">{description}</div>
      <button className="facebook-share">
        <Icon name="star" />
      </button>
      <button className="btn-green">Réserver mon shooting</button>
      <button className="btn-white-simple">En savoir plus</button>
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
