import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "scripts/components/Icon";

const Links = [
  { to: "/newsletter", title: "Newsletter", icon: "newsletter" },
  { to: "/blog", title: "Le Blog", icon: "blog" },
  { to: "/avis-clients", title: "Avis clients", icon: "star" },
  { to: "/contact", title: "Contact", icon: "email" },
  { to: "/facebook", title: "", icon: "facebook", className: "facebook" },
  { to: "/instagram", title: "", icon: "instagram", className: "instagram" },
];

const TopHeaderLinks = () => (
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
);
export default TopHeaderLinks;
