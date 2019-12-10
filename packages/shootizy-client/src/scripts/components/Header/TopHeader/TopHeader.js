import React from "react";
import PropTypes from "prop-types";

import Icon from "../../Icon";
import TopHeaderLinks from "./TopHeaderLinks/index";

const TopHeader = () => {
  return (
    <div className="header-top">
      <span>
        <span>
          <span className="site-name">Shootizy</span>
          <span className="site-name-with-copy">&copy; Shootizy 2019</span>

          <span className="studio-pro"> : Studio photo professionnel à Paris</span>
        </span>
        <span className="header-reservation">
          <Icon name="phone-circle" />
          <span className="header-reservation-par-tel">Réservation par téléphone :</span>{" "}
          <a href="tel:+3384292171">+33 84 29 21 71</a>
        </span>
      </span>
      <TopHeaderLinks />
    </div>
  );
};

TopHeader.propTypes = {
  showAdmLinks: PropTypes.bool,
};
export default TopHeader;
