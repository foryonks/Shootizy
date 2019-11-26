import React from "react";
import { func, string } from "prop-types";
import "./Modal.scss";

const Modal = ({ className, children, onClose }) => {
  return (
    <div className={`modal ${className}`}>
      <div className="modal--window">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onCancel: func,
  onValidate: func,
  onClose: func,
  className: string,
};

const fn = () => {};
Modal.defaultProps = {
  className: "",
  onCancel: fn,
  onValidate: fn,
  onClose: fn,
};

export default Modal;
