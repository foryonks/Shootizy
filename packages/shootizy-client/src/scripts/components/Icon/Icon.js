import React from "react";
import PropTypes from "prop-types";

// Icons.json is automatically generated
import icons from "./Icons.json";

const Icon = ({ name, className, onClick }) => {
  const icon = icons[name];

  return (
    <svg className={`svg-icon ${className || ""}`} viewBox={icon.viewBox} onClick={onClick}>
      {icon.paths.map((path, i) => (
        <path key={i} {...path} />
      ))}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
