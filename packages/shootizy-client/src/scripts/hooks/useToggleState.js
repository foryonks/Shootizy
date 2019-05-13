import { useState } from "react";

/**
 * Returns isOpen state and toggle function
 * @param {boolean} defaultIsOpen default value isOpen (true/false)
 */
export default defaultIsOpen => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const toggle = forceValue => {
    setIsOpen(currentIsOpen => (typeof forceValue === "boolean" ? forceValue : !currentIsOpen));
  };
  return {
    isOpen,
    toggle,
  };
};
