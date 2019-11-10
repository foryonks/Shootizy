import React from "react";
import PropTypes from "prop-types";
import "./PageCustomEditor.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Form from "scripts/components/Form";
import Editor from "scripts/components/_common/Editor";

const FORM_FIELDS = [
  { type: "hidden", name: "id" },
  { type: "text", name: "title", label: "Title", placeholder: "Nom", isRequired: true },
  {
    type: "hidden",
    name: "slug",
    placeholder: "Slug obligatoire pour l'url",
  },
  {
    type: "custom",
    name: "text",
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
];

const FORM_SUBMIT_BTN = { label: "Sauvegarder", className: "btn-green" };

const PageCustomEditor = ({ pageSlug }) => {
  const { contents } = useRemoteContents(`/api/contents/page/${pageSlug}`);

  const formatPostData = data => {
    return {
      ...contents,
      ...data,
    };
  };

  const handleSubmitSuccess = updatedPage => {
    // Slug changed
    // if (updatedPage.slug !== article.slug) {
    //   history.replace(`/admin/blog/article/${updatedPage.slug}`);
    // }
  };

  return (
    <div className="PageCustomEditorWrapper">
      <div>
        {/* <h2>{currentPage.title}</h2> */}

        <Form
          id="form-comment"
          className="form-comment generic-form"
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
  // bla: PropTypes.string,
};

PageCustomEditor.defaultProps = {
  // bla: 'test',
};

export default PageCustomEditor;
