import React from "react";
import PropTypes from "prop-types";
import Picker from "react-date-picker";
import classNamesDedupe from "classnames/dedupe";

import "./Datepicker.scss";

const Datepicker = ({ onChange, value, className }) => {
  const classes = classNamesDedupe("date-picker", className);
  return <Picker className={classes} onChange={onChange} value={value} />;
};

Datepicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
};
export default Datepicker;
