import React from "react";
import PropTypes from "prop-types";

// Icons.json is automatically generated
import icons from "./Icons.json";

const Icon = props => {
  const icon = icons[props.name];

  return (
    <svg className="icon-svg" viewBox={icon.viewBox}>
      {icon.paths.map((path, i) => (
        <path key={i} {...path} />
      ))}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
