import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Article.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Interweave from "interweave";
import { blog } from "scripts/utils/routesManager";
import Layout from "scripts/pages/Layout";
import MostReadArticles from "../MostReadArticles";
import { formatDateStd } from "../../../utils/DateUtils";

const Article = ({ match }) => {
  const { contents: article } = useRemoteContents(`/api/blog/article/${match.params.slug}`);

  if (!article) return null;
  const { title, text, category, imageLarge } = article;

  return (
    <Layout>
      <div className="Article container-2 header-height-space">
        <div className="article-image" style={{ backgroundImage: `url(${imageLarge})` }}>
          <div className="article-header">
            <div className="blog-cat-datetime">
              <Link className="content-theme" to={blog.categoryUrl(category.slug)}>
                {category.name}
              </Link>
              {" / "}
              <span className="content-date">{formatDateStd(article.date)}</span>
            </div>
            <h2 className="title">{title}</h2>
          </div>
        </div>

        <main className="Blog-Content">
          <content>
            <div className="article-content">
              <Interweave content={text} />
            </div>
          </content>
          <aside>
            <MostReadArticles />
          </aside>
        </main>
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
