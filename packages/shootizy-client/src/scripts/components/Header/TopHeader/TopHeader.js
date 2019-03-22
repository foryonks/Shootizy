import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const TopHeader = ({ showAdmLinks }) => {
  return (
    <div className="header-top">
      <span>
        <span>Shootizy : Studio photo professionnel à Paris</span>
        <span className="header-reservation">
          <Icon name="phone-circle" />
          Réservation par téléphone : +33 84 929 21 71
        </span>
      </span>
      <ul className="header-links">
        <li>
          <a href="/nl">
            <Icon name="newsletter" />
            Newsletter
          </a>
        </li>
        <li>
          <a href="/blog">
            <Icon name="blog" />
            Le Blog
          </a>
        </li>
        <li>
          <a href="/avis-clients">
            <Icon name="star" />
            Avis clients
          </a>
        </li>
        <li>
          <a href="/contacts">
            <Icon name="letter" />
            Contacts
          </a>
        </li>
        <li className="facebook">
          <a href="/facebook">
            <Icon name="facebook" />
          </a>
        </li>
        <li className="instagram">
          <a href="/instagram">
            <Icon name="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

TopHeader.propTypes = {
  showAdmLinks: PropTypes.bool,
};
export default TopHeader;
