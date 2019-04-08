import React from "react";
import classNamesDedupe from "classnames/dedupe";
import PropTypes from "prop-types";

/**
 * Return true if field is error and not pristine
 * @param {object} field field object
 * @returns {boolean}
 */
const showFieldError = field => field.error && !field.isPristine;

/**
 * Field Component
 * Can be input, textarea base on type
 * Field format : { label, name, type, placeholder, value, className, props: object, hideFeedback: false, isRequired: bool, customValidations: [{fn, errorMessage: string}] }
 */
const Field = ({ id, field, onChange, onBlur }) => {
  const { label, name, type, placeholder, value, props: extendedProps } = field;
  const className = field.className || (label ? "form-line label-top" : "");

  let getComponent;
  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "password":
      getComponent = inputProps => (
        <>
          <input
            {...inputProps}
            className={classNamesDedupe(inputProps.className, {
              "form-field--is-error": showFieldError(field),
            })}
          />
          {!field.hideFeedback && showFieldError(field) && (
            <div className="form-feedback--error">{field.error}</div>
          )}
        </>
      );
      break;
    case "textarea":
      getComponent = inputProps => (
        <>
          <textarea
            {...inputProps}
            className={classNamesDedupe(inputProps.className, {
              "form-field--is-error": showFieldError(field),
            })}
          />
          {!field.hideFeedback && showFieldError(field) && (
            <div className="form-feedback--error">{field.error}</div>
          )}
        </>
      );
      break;
    default:
      return null;
  }
  const props = {
    id,
    name,
    type,
    placeholder,
    defaultValue: value,
    onChange: ev => onChange(name, ev.target.value),
    onBlur: () => onBlur(name),
    ...(extendedProps || {}),
  };

  return label ? (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      {getComponent({ ...props })}
    </div>
  ) : (
    getComponent({ ...props, className })
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
export default Field;
