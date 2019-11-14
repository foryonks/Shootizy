import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "scripts/components/Header/Logo";

import "./Header.scss";
import Interweave from "interweave";

const NAV_LINKS = [
  { path: "/admin/booking", title: "Réservations" },
  { path: "/admin/product", title: "Produits" },
  { path: "/admin/blog", title: "Blog" },
  { path: "/admin/contents", title: "Contenus" },
  { path: "/admin/ratings", title: "Avis clients" },
  { path: "/admin/pagescustom", title: "Pages Custom" },
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
            <NavLink to={path}>
              <Interweave content={title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
