import React from "react";
//import PropTypes from "prop-types";
import Icon from "../../Icon";
import "./NewsletterSubscribeFooter.scss";

const NewsletterSubscribeFooter = props => (
  <div className="NewsletterSubscribeFooter ">
    <div className="row container-2">
      <div className="col">
        <h3 className="title">Gagnez à nous suivre ! Abonnez-vous à notre newsletter</h3>
        <p>Profitez de nos bons plans réguliers, offres spéciales et partenariats avantageux… </p>
      </div>
      <div className="col">
        <form action="/newsletter">
          <input type="email" placeholder="ex : julien@yahoo.fr" />
          <button type="submit" className="arrow-button">
            <Icon name="arrow-right" />
          </button>
        </form>
      </div>
    </div>
  </div>
);

NewsletterSubscribeFooter.propTypes = {
  // bla: PropTypes.string,
};

NewsletterSubscribeFooter.defaultProps = {
  // bla: 'test',
};

export default NewsletterSubscribeFooter;
