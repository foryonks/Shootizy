import React from "react";
import { string } from "prop-types";
import "./PageCustomEditor.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Form from "scripts/components/Form";
import Editor from "scripts/components/_common/Editor";

const FORM_FIELDS = [
  { type: "hidden", name: "id" },
  {
    type: "fieldset",
    className: "form-fieldset-left",
    children: [
      {
        type: "text",
        label: "Pré-titre",
        name: "preTitle",
        placeholder: "Nom",
        isRequired: true,
      },
      {
        type: "custom",
        name: "title",
        label: "Titre",
        isRequired: true,
        fullWidth: true,
        props: { rows: "3" },
        render: (value, isError, onChange, onValidate) => {
          return (
            <Editor
              content={value}
              onChange={content => {
                onChange("title", content);
              }}
            />
          );
        },
      },
      {
        type: "hidden",
        name: "slug",
        //placeholder: "Slug (obligatoire pour l'url)",
      },
    ],
  },
  {
    type: "fieldset",
    className: "form-fieldset-right",
    children: [
      {
        type: "custom",
        name: "text",
        label: "Texte",
        isRequired: true,
        fullWidth: true,
        props: { rows: "3" },
        render: (value, isError, onChange, onValidate) => {
          return (
            <Editor
              content={value}
              onChange={content => {
                onChange("text", content);
              }}
            />
          );
        },
      },
    ],
  },
];

const FORM_SUBMIT_BTN = {
  label: "Sauvegarder",
  className: "form-submit-button btn-green btn-small",
};

const PageCustomEditor = ({ pageSlug }) => {
  const { contents } = useRemoteContents(`/api/contents/page/${pageSlug}`);

  const formatPostData = data => {
    return {
      ...contents,
      ...data,
      slug: pageSlug,
      type: "page",
      modifiedDate: new Date(),
    };
  };

  const handleSubmitSuccess = updatedPage => {};

  return (
    <div className="PageCustomEditorWrapper">
      <div>
        <Form
          id="form-comment"
          className="generic-form form-with-columns mt100"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/contents"
          successMessage="Page mise à jour"
          formatPostData={formatPostData}
          onSuccess={handleSubmitSuccess}
          errorMessage="Problème de connexion"
          defaultFormData={contents}
        />
      </div>
    </div>
  );
};

PageCustomEditor.propTypes = {
  pageSlug: string,
};
export default PageCustomEditor;
