import React from "react";
//import PropTypes from "prop-types";
import "./ArticleComments.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import CommentForm from "./CommentForm/CommentForm";
import { formatDate } from "scripts/utils/DateUtils";
import usePagination from "scripts/hooks/usePagination";
const ITEMS_PER_PAGE = 10;

const ArticleComments = ({ articleId }) => {
  const { contents: comments, load: reloadList } = useRemoteContents(
    `/api/blog/comments/article/${articleId}`,
    { initialState: [] }
  );
  const { getCurrentPage, PaginationComponent } = usePagination(comments || [], ITEMS_PER_PAGE);
  return (
    <div className="ArticleCommentsWrapper">
      <h3 className="Blog-block-title">
        {comments.length} Commentaire{comments.length === 1 ? "" : "s"}
      </h3>
      <CommentForm
        articleId={articleId}
        onSubmit={() => {
          reloadList();
        }}
      />

      {comments && comments.length ? (
        <div className="commentsWrapper">
          <ul className="comments">
            {getCurrentPage().map(({ _id, author, date, comment }) => (
              <li key={_id}>
                <div className="comment-icon" />
                <div className="comment-content">
                  <div className="comment-infos">
                    <strong>{author}</strong> <span className="date">{formatDate(date)}</span>
                  </div>
                  <div className="comment-text">{comment}</div>
                </div>
              </li>
            ))}
          </ul>
          {PaginationComponent}
        </div>
      ) : (
        "Aucun commentaire n'a encore été posté"
      )}
    </div>
  );
};

ArticleComments.propTypes = {
  // bla: PropTypes.string,
};

ArticleComments.defaultProps = {
  // bla: 'test',
};

export default ArticleComments;
