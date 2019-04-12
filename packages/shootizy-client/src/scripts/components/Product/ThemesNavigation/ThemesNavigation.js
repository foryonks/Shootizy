import React from "react";
import { NavLink } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./ThemesNavigation.scss";

const ThemesNavigation = props => {
  const { contents } = useRemoteContents("/api/produits?tags=theme");
  if (!contents) return null;

  return (
    <ul className="ThemesNavigation container-2">
      {contents.map(({ title, productId }) => (
        <li>
          <NavLink to={`/produit/${productId}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ThemesNavigation;
