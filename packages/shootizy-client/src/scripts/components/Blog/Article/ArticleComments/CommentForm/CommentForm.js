import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentForm.scss";
import Form from "scripts/components/Form";

const FORM_FIELDS = [
  { type: "text", name: "author", label: "", placeholder: "Nom", isRequired: true },
  {
    type: "textarea",
    rows: 4,
    name: "comment",
    label: "",
    placeholder: "Écrivez un message...",
    isRequired: true,
  },
];
const FORM_SUBMIT_BTN = { label: "Envoyer", className: "btn-green" };

const CommentForm = ({ articleId, onSubmit }) => {
  const formatPostData = data => ({
    ...data,
    articleId,
  });
  const [hideForm, setHideForm] = useState(false);

  const hideCommentForm = () => {
    setHideForm(true);
  };

  return hideForm ? null : (
    <div className="CommentFormWrapper">
      <Form
        id="form-comment"
        className="form-comment generic-form"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/blog/comment"
        successMessage="Article mis à jour"
        formatPostData={formatPostData}
        onSuccess={() => {
          hideCommentForm();
          onSubmit();
        }}
        errorMessage="Problème de connexion"
      />
    </div>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CommentForm;
