import React from "react";
import { NavLink } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./ThemesNavigation.scss";

const ThemesNavigation = props => {
  const { contents } = useRemoteContents("/api/products?tags=theme");
  if (!contents) return null;

  return (
    <ul className="ThemesNavigation container-2">
      {contents.map(({ title, productId }, index) => (
        <li key={index}>
          <NavLink to={`/produit/${productId}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ThemesNavigation;
