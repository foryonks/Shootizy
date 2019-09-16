import React from "react";
//import PropTypes from "prop-types";
import "./ArticleComments.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import CommentForm from "./CommentForm/CommentForm";
import { formatDate } from "scripts/utils/DateUtils";

const ArticleComments = ({ articleId }) => {
  const { contents: comments, load: reloadList } = useRemoteContents(
    `/api/blog/comments/article/${articleId}`,
    { initialState: [] }
  );
  //if (!comments || !comments.length) return null;
  return (
    <div className="ArticleCommentsWrapper">
      <h3 className="Blog-block-title">Commentaires</h3>
      {comments && comments.length ? (
        <ul className="comments">
          {comments.map(({ commentId, author, date, comment }) => (
            <li key={commentId}>
              <div>
                <strong>{author}</strong> / {formatDate(date)}
              </div>
              <div>{comment}</div>
            </li>
          ))}
        </ul>
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
