import React, { useContext } from "react";
import { AppContext } from "scripts/contexts/App";
import { NavLink } from "react-router-dom";
import { func } from "prop-types";

import "./ThemesNavigation.scss";

const ThemesNavigation = ({ showImage, onItemClick, className }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];

  return (
    <ul className={`ThemesNavigation list-buttons ${className || ""}`}>
      {list.map(({ title, image, productId }, index) => (
        <li key={index}>
          <NavLink
            to={`/shooting-studio/${productId}`}
            onClick={evt => onItemClick(evt, { title, productId })}>
            {showImage && <img src={image} alt="" />} <span>{title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

ThemesNavigation.propTypes = {
  onItemClick: func,
};
ThemesNavigation.defaultProps = {
  onItemClick: () => {},
};

export default ThemesNavigation;
