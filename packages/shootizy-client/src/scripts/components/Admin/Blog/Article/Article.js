import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import Form from "scripts/components/Form";
import "./Article.scss";

import Editor from "scripts/components/_common/Editor";

const FORM_FIELDS = [
  {
    type: "fieldset",
    className: "form-fieldset-left",
    children: [
      { type: "text", name: "title", label: "Titre", isRequired: true },
      { type: "text", name: "slug", label: "Slug", isRequired: true },
      { type: "text", name: "author", label: "Auteur", isRequired: true },
      { type: "image", name: "imageMini", label: "Image miniature", props: { maxWidth: "200" } },
      { type: "image", name: "imageLarge", label: "Image Large", props: { maxWidth: "200" } },
    ],
    renderFooter: () => (
      <div className="fieldset-footer help">
        <p>Aide</p>
        <h3>Pour mettre une image en pleine largeur</h3>
        <ul>
          <li>Cliquez sur l'image</li>
          <li>Cliquez sur le crayon au dessus ou en dessous (Edit)</li>
          <li>Cliquez sur avancé, et mettez la class "fullsize"</li>
        </ul>
      </div>
    ),
  },
  {
    type: "fieldset",
    className: "form-fieldset-right",
    children: [
      {
        type: "custom",
        label: "Texte",
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
    ],
  },
];
const FORM_SUBMIT_BTN = { label: "Sauvegarder", className: "btn-green" };

const Article = ({ history, match }) => {
  const { contents: article } = useRemoteContents(`/api/blog/article/${match.params.slug}`);

  const formatPostData = data => ({
    ...article,
    ...data,
  });

  const handleSubmitSuccess = useCallback(
    updatedArticle => {
      // Slug changed
      if (updatedArticle.slug !== article.slug) {
        history.replace(`/admin/blog/article/${updatedArticle.slug}`);
      }
    },
    [article]
  );

  return (
    article && (
      <div className="container-2">
        <Form
          id="form-blog-article"
          className="form-blog-article"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/blog/article"
          successMessage="Article mis à jour"
          formatPostData={formatPostData}
          onSuccess={handleSubmitSuccess}
          defaultFormData={article}
        />
      </div>
    )
  );
};

Article.propTypes = {
  // bla: PropTypes.string,
};

Article.defaultProps = {
  // bla: 'test',
};

export default withRouter(Article);
