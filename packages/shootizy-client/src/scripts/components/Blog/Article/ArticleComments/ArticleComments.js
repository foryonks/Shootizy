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
      <h3 className="Blog-block-title">Commentaires</h3>
      {comments && comments.length ? (
        <div>
          <ul className="comments">
            {getCurrentPage().map(({ commentId, author, date, comment }) => (
              <li key={commentId}>
                <div>
                  <strong>{author}</strong> / {formatDate(date)}
                </div>
                <div>{comment}</div>
              </li>
            ))}
          </ul>
          {PaginationComponent}
        </div>
      ) : (
        "Aucun commentaire n'a encore été posté"
      )}

      <CommentForm
        articleId={articleId}
        onSubmit={() => {
          reloadList();
        }}
      />
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
