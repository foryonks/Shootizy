import React from "react";
// import PropTypes from "prop-types";
import Icon from "../../Icon";
import "./FacebookShareButton.scss";

const FacebookShareButton = props => (
  <button className="facebook-share-button">
    <Icon name="facebook" />
  </button>
);

FacebookShareButton.propTypes = {
  // bla: PropTypes.string,
};

FacebookShareButton.defaultProps = {
  // bla: 'test',
};

export default FacebookShareButton;
