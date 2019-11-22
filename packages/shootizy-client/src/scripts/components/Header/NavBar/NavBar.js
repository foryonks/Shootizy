import React from "react";
import { NavLink } from "react-router-dom";
import ThemesNavigation from "scripts/components/Product/ThemesNavigation/ThemesNavigation.js";

const NAV_LINKS = [
  { path: "/comment-ca-marche", title: "Comment ça marche ?" },
  {
    path: "/shooting-studio",
    title: "Shooting Studio",
    subNav: (
      <div className="sub-nav-content">
        <h3>Choisissez le thème de votre Shooting</h3>
        <ThemesNavigation className="themes-navigation" showImage={true} />
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
const NavBar = props => (
  <div className="nav-bar">
    <ul className="menu">
      {NAV_LINKS.map(({ path, title, subNav }) => (
        <li key={path}>
          <NavLink to={path}>
            <span>{title}</span>
          </NavLink>
          {subNav && <div className="nav-sub">{subNav}</div>}
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
