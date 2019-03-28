import React from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { path: "/comment-ca-marche", title: "Comment ça marche ?" },
  { path: "/shooting-studio", title: "Shooting Studio" },
  { path: "/shooting-sur-mesure", title: "Shooting sur mesure" },
  { path: "/tarifs", title: "Tarifs" },
  { path: "/reservation", title: "Réservation" },
];
const NavBar = props => (
  <div className="nav-bar">
    <ul className="menu">
      {NAV_LINKS.map(({ path, title }) => (
        <li key={path}>
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
