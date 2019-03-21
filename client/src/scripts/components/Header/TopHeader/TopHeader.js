import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const TopHeader = ({ showAdmLinks }) => {
  return (
    <div class="header-top">
      <span>Shootizy : Studio photo professionnel à Paris</span>
      <span className="header-reservation">
        <Icon name="phone-circle" />
        Réservation par téléphone : +33 84 929 21 71
      </span>
      <span className="header-links">
        <a href="/nl">Newsletter</a>
        <a href="/blog">Le Blog</a>
        <a href="/avis-clients">Avis clients</a>
        <a href="/contacts">Contacts</a>
        <a href="/facebook">FB</a>
        <a href="/instagram">In</a>
      </span>
    </div>
  );
};

TopHeader.propTypes = {
  showAdmLinks: PropTypes.bool
};
export default TopHeader;
