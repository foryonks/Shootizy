import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";
import Icon from "../../Icon";

const Action = ({ className, label, icon, disabled, wrapper, children }) => {
  const Button = (
    <>
      <button disabled={disabled} className={className}>
        {icon ? <Icon name={icon} /> : null}
        {label}
      </button>
      {children}
    </>
  );
  return wrapper ? (
    <div className={classNamesDedupe("form-actions", wrapper.className)}>{Button}</div>
  ) : (
    Button
  );
};

Action.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  wrapper: PropTypes.object,
};
Action.defaultProps = {
  wrapper: { className: "button-container-centered" },
};

export default Action;
