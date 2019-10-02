/* eslint-disable */
// TODO : corriger les pb avec les react-hooks sur ce fichier dès que possible

import React, { useMemo } from "react";
import classNamesDedupe from "classnames/dedupe";
import PropTypes from "prop-types";
import Interweave from "interweave";

import Select from "react-select";
import Datepicker from "scripts/components/_common/Datepicker";
import EditableImage from "scripts/components/_common/Editor/EditableImage";

/**
 * Return true if field is error and not pristine
 * @param {object} field field object
 * @returns {boolean}
 */
const showFieldError = field => field.error && !field.isPristine;

/**
 * Field Component
 * Can be input, textarea base on type
 * Field format : { label, name, type, placeholder, value, className, fullWidth: bool, wrapperClassName props: object, isRequired: bool, customValidations: [{fn, errorMessage: string}] }
 */
const Field = ({ id, field, onChange, onValidate, showErrorFeedback }) => {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    props: extendedProps,
    render,
    rows,
    cols,
    list,
  } = field;

  const isError = showFieldError(field);
  const className = classNamesDedupe(field.className, {
    "form-field--is-error": isError,
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
    case "hidden":
      const inputProps = {
        id,
        className,
        name,
        type,
        placeholder,
        value: value || "",
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
        value: value || "",
        rows,
        cols,
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
          value={value}
          className={className}
          {...extendedProps || {}}
        />
      );
      break;
    case "image":
      Input = (
        <EditableImage
          onChange={image => {
            onChange(name, image);
            onValidate(name);
          }}
          src={value}
          {...extendedProps || {}}
        />
      );
      break;
    case "select":
      Input = <Select {...extendedProps || {}} options={list} />;
      break;
    case "custom":
      Input = render
        ? useMemo(() => render(value, isError, onChange, onValidate), [value, isError])
        : null;
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
      {showErrorFeedback && isError && <div className="form-feedback--error">{field.error}</div>}
    </>
  );
  return wrapperClassname ? <div className={wrapperClassname}>{Field}</div> : Field;
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  showErrorFeedback: PropTypes.bool,
};
export default Field;
