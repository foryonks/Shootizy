import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Article.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Interweave from "interweave";
import { blog } from "scripts/utils/routesManager";
import Layout from "scripts/pages/Layout";

const Article = ({ match }) => {
  const { contents: article } = useRemoteContents(`/api/blog/article/${match.params.slug}`);

  if (!article) return null;
  const { title, text, category, imageLarge } = article;

  return (
    <Layout>
      <div className="Article">
        <HeaderImage src={imageLarge} title={title} />
        <div className="container">
          <h2 className="title">{title}</h2>
          <Link to={blog.categoryUrl(category.slug)}>{category.name}</Link>
          <div className="text">
            <Interweave content={text} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Article.propTypes = {
  // bla: PropTypes.string,
};

Article.defaultProps = {
  // bla: 'test',
};

export default Article;
