import React from "react";
import { string } from "prop-types";
import "./Confirm.scss";
import Modal from "../Modal";

const Confirm = ({
  className,
  onValidate,
  onCancel,
  text,
  cancelLabel,
  validateLabel,
  ...props
}) => {
  return (
    <Modal className="Confirm modal" {...props}>
      <div className="confirm--text">{text}</div>
      <div className="confirm--buttons txt-c">
        <button className="btn-success" onClick={onValidate}>
          {validateLabel}
        </button>{" "}
        <button className="btn-cancel" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </Modal>
  );
};

Confirm.propTypes = {
  validateLabel: string,
  cancelLabel: string,
};

Confirm.defaultProps = {
  validateLabel: "Ok",
  cancelLabel: "Annuler",
};

export default Confirm;
