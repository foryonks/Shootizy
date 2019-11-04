import React from "react";
import PropTypes from "prop-types";
import Picker from "react-date-picker";
import classNamesDedupe from "classnames/dedupe";

import "./Datepicker.scss";

const Datepicker = ({ onChange, value, className, ...datePickerProps }) => {
  const classes = classNamesDedupe("date-picker", className);
  return (
    <Picker
      className={classes}
      onChange={date => {
        // Convert to UTC to avoid timezone
        const dateUTC =
          date && new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        onChange(dateUTC);
      }}
      value={value}
      locale="fr-FR"
      {...datePickerProps}
    />
  );
};

Datepicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
};
export default Datepicker;
