import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.scss";
import Icon from "../../Icon";

function Logo({ className }) {
  return (
    <span className={`logo ${className}`}>
      <NavLink to="/">
        <Icon name="logo" />
      </NavLink>
      <span className="logo-text">
        Le shooting photo
        <br /> qui vous chouchoute
      </span>
    </span>
  );
}
export default Logo;
