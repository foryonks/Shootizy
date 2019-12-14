import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemesNavigation from "scripts/components/Product/ThemesNavigation/ThemesNavigation.js";
import { bool } from "prop-types";
import Icon from "scripts/components/Icon";

const NAV_LINKS = [
  { path: "/comment-ca-marche", title: "Comment ça marche ?" },
  {
    path: "/shooting-studio",
    title: "Shooting Studio",
    subNavOpenedRegExp: /\/produit-/,
    subNav: (
      <div className="sub-nav-content">
        <ThemesNavigation className="themes-navigation" showImage={false} />
      </div>
    ),
  },
  {
    path: "/shooting-sur-mesure",
    title: "Shooting sur mesure",
  },
  { path: "/tarifs", title: "Tarifs" },
  { path: "/notre-book", title: "Notre book" },
];
const NavItem = ({ path, title, subNav, subNavOpenedRegExp, isMobile }) => {
  const location = useLocation();
  const [opened, setOpened] = useState(
    subNavOpenedRegExp && subNavOpenedRegExp.test(location.pathname)
  );

  const onButtonClick = e => {
    e.preventDefault();
    setOpened(!opened);
  };

  return (
    <li key={path}>
      <NavLink to={path} className="navbar-link">
        <span>{title}</span>
        {subNav && isMobile ? (
          <button className={`subNav-button`} onClick={onButtonClick}>
            <Icon name={opened ? "moins" : "plus"} />
          </button>
        ) : null}
      </NavLink>
      {subNav && (!isMobile || (isMobile && opened)) ? (
        <div className="nav-sub">{subNav}</div>
      ) : null}
    </li>
  );
};
const NavBar = ({ isMobile }) => (
  <div className="nav-bar">
    <ul className="menu">
      {NAV_LINKS.map((props, key) => (
        <NavItem isMobile={isMobile} {...props} key={key} />
      ))}
    </ul>
  </div>
);

NavBar.propTypes = {
  isMobile: bool,
};

NavBar.defaultProps = {
  isMobile: false,
};

export default NavBar;
