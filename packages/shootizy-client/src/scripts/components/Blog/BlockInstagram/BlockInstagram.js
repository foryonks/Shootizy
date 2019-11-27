import React from "react";
import "./BlockInstagram.scss";
import SocialSquares from "scripts/components/_common/SocialSquares";

const BlockInstagram = props => (
  <div>
    <h3 className="Blog-block-title">Sur Instagram</h3>
    <SocialSquares className="BlockInstagram" cols={3} nums={9} twitterPos={[]} fill={true} />
  </div>
);
BlockInstagram.propTypes = {
  // bla: PropTypes.string,
};

BlockInstagram.defaultProps = {
  // bla: 'test',
};

export default BlockInstagram;
