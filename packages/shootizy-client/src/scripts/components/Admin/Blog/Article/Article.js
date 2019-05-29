import React, { useState, useEffect } from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import Form from "scripts/components/Form";
import "./Article.scss";

import Editor from "./Editor";

const FORM_FIELDS = [
  { type: "text", name: "title", label: "Titre", isRequired: true },
  { type: "text", name: "slug", label: "Slug", isRequired: true },
  { type: "text", name: "author", label: "Auteur", isRequired: true },
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
];
const FORM_SUBMIT_BTN = { label: "Sauver", className: "btn-green" };

const Article = ({ match }) => {
  const [articleState, setArticleState] = useState(null);
  const { contents: article } = useRemoteContents(`/api/blog/article/${match.params.slug}`);

  useEffect(() => {
    setArticleState(article);
  });

  if (!articleState) return null;
  const { image } = articleState;
  return (
    <div className="blog-list__item mea container-2">
      <img className="mea-img" src={image} alt="blog" />
      <div className="mea-desc">
        <Form
          id="form-rating"
          className="form-rating"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/blog/article/post"
          successMessage="Merci pour votre avis !"
          onSuccess={() => {}}
          defaultFormData={articleState}
        />
      </div>
    </div>
  );
};

Article.propTypes = {
  // bla: PropTypes.string,
};

Article.defaultProps = {
  // bla: 'test',
};

export default Article;
