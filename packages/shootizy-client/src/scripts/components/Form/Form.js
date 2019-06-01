import React, { useState, useEffect, useCallback } from "react";
import classNamesDedupe from "classnames/dedupe";
import PropTypes from "prop-types";

import useFetchWithLoader from "scripts/hooks/useFetchWithLoader";
import { fetchJson } from "scripts/utils/api";
import Field from "./Field";
import FormAction from "./Action";

import "./Form.scss";

/**
 * Generate form data object
 * @param {array} fields { label, name, type, placeholder, value, className, props: object, isRequired: bool, customValidations: [{validate: () => true, errorMessage: string}] }
 * @returns {object}
 */
const generateFormData = fields =>
  fields.reduce((acc, field) => {
    let otherSettings = {};
    if (field.type === "email") {
      // Auto add a default email validation
      //otherSettings.type = "text";
      otherSettings.customValidations = (field.customValidations || []).concat({
        validate: value => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !!value && regex.test(value);
        },
        errorMessage: "Veuillez saisir un email valide",
      });
    }
    return {
      ...acc,
      [field.name]: {
        ...field,
        isPristine: true,
        error: null,
        ...otherSettings,
      },
    };
  }, {});

/**
 * Update formData object with modified field value
 * @param {object} formData current form data object
 * @param {string} fieldName field name
 * @param {object} newValue field new value
 * @returns {object} updated formData
 */
const updateFormField = (formData, fieldName, newValue) => {
  const currentField = formData[fieldName];
  return {
    ...formData,
    [fieldName]: {
      ...currentField,
      isPristine: false,
      value: newValue,
    },
  };
};

/**
 * Return field error if there's any
 * @param {object} field field object
 * @returns {object}
 */
const checkFieldError = field => {
  const { isRequired, customValidations, value } = field;

  if (isRequired && (typeof value === "undefined" || value === null)) {
    return typeof isRequired === "string" ? isRequired : "Veuillez renseigner ce champs";
  }
  if (customValidations) {
    const validationFailed = customValidations.find(validation => !validation.validate(value));
    return validationFailed && validationFailed.errorMessage;
  }
  return null;
};

/**
 * Validate field, update field state (pristine, error)
 * @param {object} field field object
 * @returns {object} { isValid, updatedField }
 */
const validateField = field => {
  const error = checkFieldError(field);
  return {
    isValid: !error,
    updatedField: {
      ...field,
      isPristine: false,
      error: error || null,
    },
  };
};

/**
 * Validate form, update form state (pristine, error)
 * @param {object} field field object
 * @returns {object} { isValid, updatedFormData }
 */
const validateForm = formData => {
  let isValid = true;
  const updatedFormData = Object.keys(formData).reduce((acc, name) => {
    const { isValid: fieldIsValid, updatedField } = validateField(acc[name]);
    isValid = isValid && fieldIsValid;
    return {
      ...acc,
      [name]: updatedField,
    };
  }, formData);
  return {
    isValid,
    updatedFormData,
  };
};

/**
 * Generate a form from fields array
 * Field format : { label, name, type, placeholder, value, className, props: object, isRequired: bool, customValidations: [{fn, errorMessage: string}] }
 * Submit button format: { label, className }
 */
const Form = ({
  id,
  className,
  fields,
  submitBtn,
  action,
  showFieldErrorFeedback,
  errorMessage,
  successMessage,
  onSuccess,
  onError,
  defaultFormData,
  onBeforePost = data => data,
}) => {
  const [formData, setFormData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { loading, fetchWithLoader, error } = useFetchWithLoader(fetchJson, errorMessage);

  const resetForm = useCallback(() => {
    const formData = generateFormData(fields);
    if (defaultFormData && formData) {
      let newFormData = { ...formData };
      for (let key in defaultFormData) {
        if (formData[key]) {
          newFormData[key].value = defaultFormData[key];
        }
      }
    }
    setFormData(formData);
  }, [fields]);
  useEffect(() => {
    resetForm();
  }, [fields]);

  const handleFieldChange = useCallback((name, value) => {
    setFormData(currentForm => {
      const newFormData = updateFormField(currentForm, name, value);

      return newFormData;
    });
  }, []);

  const hanldeFieldValidate = useCallback(name => {
    setFormData(currentForm => {
      const { updatedField } = validateField(currentForm[name]);
      return {
        ...currentForm,
        [name]: updatedField,
      };
    });
  }, []);

  const handleSubmit = async ev => {
    ev.preventDefault();

    //Validate form
    const { isValid, updatedFormData } = validateForm(formData);
    setFormData(updatedFormData);

    if (isValid) {
      let postData = Object.keys(updatedFormData).reduce((acc, name) => {
        const value =
          typeof updatedFormData[name].value === "string"
            ? updatedFormData[name].value.trim()
            : updatedFormData[name].value;
        return { ...acc, [name]: value };
      }, {});

      if (onBeforePost) postData = onBeforePost(postData);

      try {
        const response = await fetchWithLoader(action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        setSubmitted(true);
        onSuccess && onSuccess(response);
      } catch (e) {
        onError && onError(e);
      }
    }
  };

  return (
    formData && (
      <form className={classNamesDedupe("form", className)} onSubmit={handleSubmit}>
        {fields.map(field => {
          const fieldId = `${id}__${field.name}`;
          return (
            <Field
              key={fieldId}
              id={fieldId}
              field={formData[field.name]}
              value={formData[field.name].value}
              onChange={handleFieldChange}
              onValidate={hanldeFieldValidate}
              showErrorFeedback={showFieldErrorFeedback}
            />
          );
        })}
        <FormAction
          icon={submitBtn.icon}
          disabled={loading || submitBtn.disableOnSubmit ? submitted : false}
          className={submitBtn.className}
          label={submitBtn.label}
          wrapper={submitBtn.wrapper}>
          {submitted && successMessage && (
            <div className="form-feedback--success">{successMessage}</div>
          )}
          {error && <div className="form-feedback--error">{error}</div>}
        </FormAction>
      </form>
    )
  );
};

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  submitBtn: PropTypes.object,
  showFieldErrorFeedback: PropTypes.bool,
};

Form.defaultProps = {
  id: `form-${Math.floor(Math.random() * 10)}`,
  submitBtn: { label: "Envoyer", className: "btn-green" },
  errorMessage: "Une erreur est survenue, veuillez réessayer plus tard !",
  successMessage: "Votre demande sera traitée prochainement, merci !",
  showFieldErrorFeedback: true,
};

export default Form;
