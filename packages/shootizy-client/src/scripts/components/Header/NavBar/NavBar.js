import React from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { path: "/comment-ca-marche", title: "Comment ça marche ?" },
  { path: "/produit", title: "Shooting Studio" },
  { path: "/shooting-sur-mesure", title: "Shooting sur mesure" },
  { path: "/tarifs", title: "Tarifs" },
  { path: "/notre-book", title: "Notre book" },
];
const NavBar = props => (
  <div className="nav-bar">
    <ul className="menu">
      {NAV_LINKS.map(({ path, title }) => (
        <li key={path}>
          <NavLink to={path}>
            <span>{title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
