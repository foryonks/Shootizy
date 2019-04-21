import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "scripts/components/Header/Logo";

import "./Header.scss";

const NAV_LINKS = [
  { path: "/admin/blog", title: "Gestion du blog" },
  { path: "/admin/contents", title: "Gestion des contenus" },
  { path: "/admin/ratings", title: "Gestion des avis clients" },
];
const Header = props => (
  <header className="admin-header">
    <div className="admin-header__top">
      <span>Shootizy Admin Page</span>
      <Link className="admin-header__back-home" to="/">
        Retourner vers Shootizy
      </Link>
    </div>
    <div className="admin-header__nav-bar">
      <Logo />
      <ul className="menu">
        {NAV_LINKS.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
