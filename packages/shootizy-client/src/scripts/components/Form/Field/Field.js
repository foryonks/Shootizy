import React from "react";
import classNamesDedupe from "classnames/dedupe";
import PropTypes from "prop-types";
import Interweave from "interweave";

import Datepicker from "scripts/components/_common/Datepicker";

/**
 * Return true if field is error and not pristine
 * @param {object} field field object
 * @returns {boolean}
 */
const showFieldError = field => field.error && !field.isPristine;

/**
 * Field Component
 * Can be input, textarea base on type
 * Field format : { label, name, type, placeholder, value, className, fullWidth: bool, wrapperClassName props: object, hideFeedback: false, isRequired: bool, customValidations: [{fn, errorMessage: string}] }
 */
const Field = ({ id, field, value: currentValue, onChange, onValidate }) => {
  const {
    label,
    name,
    type,
    placeholder,
    value: defaultValue,
    props: extendedProps,
    render,
  } = field;

  const className = classNamesDedupe(field.className, {
    "form-field--is-error": showFieldError(field),
    "form-field--full-width": field.fullWidth,
  });
  const wrapperClassname = classNamesDedupe(field.wrapperClassname, {
    "form-line label-top": !!label,
  });

  let Input;
  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "password":
      const inputProps = {
        id,
        className,
        name,
        type,
        placeholder,
        defaultValue,
        onChange: ev => onChange(name, ev.target.value),
        onBlur: () => onValidate(name),
        ...(extendedProps || {}),
      };
      Input = <input {...inputProps} />;
      break;
    case "textarea":
      const textAreaProps = {
        id,
        className,
        name,
        type,
        placeholder,
        defaultValue,
        onChange: ev => onChange(name, ev.target.value),
        onBlur: () => onValidate(name),
        ...(extendedProps || {}),
      };
      Input = <textarea {...textAreaProps} />;
      break;
    case "date":
      Input = (
        <Datepicker
          onChange={date => {
            onChange(name, date);
            onValidate(name);
          }}
          value={currentValue}
          className={className}
        />
      );
      break;
    case "custom":
      Input = render ? render(currentValue, showFieldError(field), onChange, onValidate) : null;
      break;
    default:
      return null;
  }

  const Field = (
    <>
      {label && (
        <label htmlFor={id}>
          <Interweave content={label} />
        </label>
      )}
      {Input}
      {!field.hideFeedback && showFieldError(field) && (
        <div className="form-feedback--error">{field.error}</div>
      )}
    </>
  );
  return wrapperClassname ? <div className={wrapperClassname}>{Field}</div> : Field;
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
};
export default Field;
