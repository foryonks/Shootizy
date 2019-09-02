import React from "react";
import PropTypes from "prop-types";
import "./LayoutJs.scss";

const Layout = props => (
  <div className="LayoutJsWrapper">
    <Header />
  </div>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
