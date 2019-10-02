import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Icon from "../../Icon";

const Links = [
  { to: "/newsletter", title: "Newsletter", icon: "newsletter" },
  { to: "/blog", title: "Le Blog", icon: "blog" },
  { to: "/avis-clients", title: "Avis clients", icon: "star" },
  { to: "/contact", title: "Contact", icon: "email" },
  { to: "/facebook", title: "", icon: "facebook", className: "facebook" },
  { to: "/instagram", title: "", icon: "instagram", className: "instagram" },
];

const TopHeader = () => {
  return (
    <div className="header-top">
      <span>
        <span>Shootizy : Studio photo professionnel à Paris</span>
        <span className="header-reservation">
          <Icon name="phone-circle" />
          Réservation par téléphone : <a href="tel:+3384292171">+33 84 29 21 71</a>
        </span>
      </span>
      <ul className="header-links">
        {Links.map(({ to, title, icon, className }, index) => (
          <li key={index} className={className}>
            <NavLink to={to}>
              <Icon name={icon} />
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopHeader.propTypes = {
  showAdmLinks: PropTypes.bool,
};
export default TopHeader;
