import React, { Children } from "react";
import PropTypes from "prop-types";
import "./Form.scss";

const Form = props => {
  const { className, action } = props;
  return <form className={`Form ${className}`}>{this.props.children}</form>;
};

Form.propTypes = {
  // bla: PropTypes.string,
};

Form.defaultProps = {
  // bla: 'test',
};

export default Form;
