import React from "react";
import { Link } from "react-router-dom";
import CommentCaMarche3blocks from "../../CommentCaMarchePage/CommentCaMarche3blocks";

const CommentCaMarche = ({ className }) => (
  <section className={`CommentCaMarche page-section pt100 pb100  ${className}`}>
    <div className="container-2">
      <h2 className="title mb50">
        Votre Shooting Photo <strong>en 3 étapes !</strong>
      </h2>
      <CommentCaMarche3blocks />
      <p className="button">
        <Link className="btn-white" to="/booking">
          Comment ça marche ?
        </Link>
      </p>
    </div>
  </section>
);

CommentCaMarche.propTypes = {
  // bla: PropTypes.string,
};

CommentCaMarche.defaultProps = {
  // bla: 'test',
};

export default CommentCaMarche;
