import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentForm";
import Form from "scripts/components/Form";

const FORM_FIELDS = [
  { type: "text", name: "author", label: "Nom", isRequired: true },
  { type: "textarea", rows: 3, name: "comment", label: "Commentaire", isRequired: true },
];
const FORM_SUBMIT_BTN = { label: "Envoyer", className: "btn-green" };

const CommentForm = ({ articleId, onSubmit }) => {
  const onBeforePost = data => ({
    ...data,
    articleId,
  });
  const [hideForm, setHideForm] = useState(false);

  const hideCommentForm = () => {
    setHideForm(true);
  };

  return hideForm ? null : (
    <div className="CommentFormWrapper">
      <h3 className="title mb10">Ajouter un commentaire</h3>
      <Form
        id="form-comment"
        className="form-comment"
        fields={FORM_FIELDS}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/blog/comment"
        successMessage="Article mis à jour"
        onBeforePost={onBeforePost}
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
