import React, { useContext } from "react";

import { AppContext } from "scripts/contexts/App";

import { NavLink } from "react-router-dom";

import "./ThemesNavigation.scss";

const ThemesNavigation = ({ showImage }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];

  return (
    <ul className="ThemesNavigation container-2">
      {list.map(({ title, image, productId }, index) => (
        <li key={index}>
          <NavLink to={`/produit/${productId}`}>
            {showImage && <img src={image} alt="" />} {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ThemesNavigation;
