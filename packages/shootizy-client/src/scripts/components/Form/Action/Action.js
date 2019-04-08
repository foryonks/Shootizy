import React from "react";
import PropTypes from "prop-types";

const Action = ({ className, label, disabled, wrapper, children }) => {
  const Button = (
    <>
      <button disabled={disabled} className={className}>
        {label}
      </button>
      {children}
    </>
  );
  return wrapper ? <div className={wrapper.className}>{Button}</div> : Button;
};

Action.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  wrapper: PropTypes.object,
};
Action.defaultProps = {
  wrapper: { className: "button-container-centered" },
};

export default Action;
