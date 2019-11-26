import React, { useState } from "react";
import Form from "scripts/components/Form";
import { object, func } from "prop-types";
import "./FormCategory.scss";
import DeleteIcon from "scripts/components/_common/Icons/Delete";
import { fetchJson } from "scripts/utils/api";
import Confirm from "scripts/components/_common/Modal/Confirm";

const FORM_FIELDS = [
  { type: "hidden", name: "_id" },
  {
    type: "fieldset",
    className: "form-fieldset-left",
    children: [
      {
        type: "text",
        name: "name",
        label: "Nom",
        placeholder: "Nouvelle catégorie",
        isRequired: true,
      },
    ],
  },
  {
    type: "fieldset",
    className: "form-fieldset-right",
    children: [
      {
        type: "text",
        name: "slug",
        label: "Slug",
        placeholder: "Nom de la catégorie dans l'url",
        isRequired: true,
      },
    ],
  },
];
const FORM_SUBMIT_BTN = { label: "Sauvegarder", className: "btn-green" };

const FormCategory = ({ category, handleSuccess, onDelete, reload }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const onDeleteClick = () => {
    setShowConfirm(true);
    reload();
  };

  const deleteValidate = async ok => {
    if (ok) {
      await fetchJson(`/api/blog/category/`, {
        method: "DELETE",
        body: category,
      });
      setShowConfirm(false);
      onDelete(category);
    }
  };

  const closeConfirm = () => setShowConfirm(false);

  return (
    <div className="FormCategoryWrapper admin">
      {showConfirm && (
        <Confirm
          onValidate={() => deleteValidate(true)}
          onCancel={closeConfirm}
          onClose={closeConfirm}
          text={`Etes-vous sûr de vouloir supprimer la catégorie : ${category.name}`}
        />
      )}
      <Form
        id="form-blog-category"
        className=" generic-form form-blog-category"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/blog/category"
        successMessage="Article mis à jour"
        onSuccess={handleSuccess}
        defaultFormData={category}
      />
      <div className="actions">
        <button
          className="delete-button button-icon-only"
          title="Supprimer"
          onClick={onDeleteClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

FormCategory.propTypes = {
  category: object,
  onDelete: func,
  reload: func,
};

FormCategory.defaultProps = {
  category: {},
  onDelete: () => {},
  reload: () => {},
};

export default FormCategory;
