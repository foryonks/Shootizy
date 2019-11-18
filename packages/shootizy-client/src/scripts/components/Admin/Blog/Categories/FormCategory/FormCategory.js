import React from "react";
import Form from "scripts/components/Form";
import { object } from "prop-types";
import "./FormCategory.scss";

const FORM_FIELDS = [
  { type: "hidden", name: "_id" },
  {
    type: "fieldset",
    className: "form-fieldset-left",
    children: [{ type: "text", name: "name", label: "Nom", isRequired: true }],
  },
  {
    type: "fieldset",
    className: "form-fieldset-right",
    children: [{ type: "text", name: "slug", label: "Slug", isRequired: true }],
  },
];
const FORM_SUBMIT_BTN = { label: "Sauvegarder", className: "btn-green" };

const FormCategory = ({ category, handleSuccess }) => {
  return (
    <div className="FormCategoryWrapper">
      <Form
        id="form-blog-category"
        className="FormCategoryWrapper generic-form form-blog-category"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/blog/category"
        successMessage="Article mis à jour"
        onSuccess={handleSuccess}
        defaultFormData={category}
      />
    </div>
  );
};

FormCategory.propTypes = {
  category: object,
};

FormCategory.defaultProps = {
  category: {},
};

export default FormCategory;
