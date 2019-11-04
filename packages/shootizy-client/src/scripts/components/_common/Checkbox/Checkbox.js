import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import "./Checkbox.scss";

const Checkbox = ({ name, label, className, onChange, checked }) => {
  return (
    <label className={classNamesDedupe("checkbox__wrapper", className)}>
      <input
        type="checkbox"
        className="checkbox__input"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox__checkmark" />
      <span className="checkbox__text">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;
