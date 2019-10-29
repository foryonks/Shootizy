import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";
import Interweave from "interweave";

import useToggleState from "scripts/hooks/useToggleState";

import "./DropdownPopover.scss";

const generateRandomKey = () => Math.random() * 10000000;

const DropdownPopover = ({
  list,
  renderListItem,
  getItemValue,
  getItemKey,
  getItemLabel,
  isItemDisabled,
  openValue,
  value,
  title,
  placeholder,
  disabled,
  noItemsPlaceholder,
  className,
  loading,
  onChange,
  onClick,
}) => {
  const elementRef = useRef();
  const { isOpen, toggle } = useToggleState(false);
  const [valueLabel, setValueLabel] = useState("");

  useEffect(
    () => {
      const currentItem = list.find(item => getItemValue(item) === value);
      setValueLabel(currentItem ? getItemLabel(currentItem) : "");
    }, // eslint-disable-next-line
    [list, value]
  );

  useEffect(
    () => {
      toggle(!!openValue);
    }, // eslint-disable-next-line
    [openValue]
  );

  useEffect(
    () => {
      if (isOpen) {
        document.addEventListener("mousedown", handleBlur);
        return () => {
          document.removeEventListener("mousedown", handleBlur);
        };
      }
    }, // eslint-disable-next-line
    [isOpen]
  );

  const handleSelectItem = item => {
    toggle();
    // Call parent
    onChange(getItemValue(item));
  };

  const handleClick = () => {
    onClick && onClick(isOpen);
    toggle();
  };

  const handleBlur = e => {
    if (isOpen && elementRef.current && !elementRef.current.contains(e.target)) {
      // outside click, close popover
      toggle(false);
    }
  };

  return (
    <div ref={elementRef} className="dropdown-popover-wrapper">
      <input
        type="text"
        className={classNamesDedupe("dropdown-popover-input form-field--full-width", className)}
        readOnly
        placeholder={placeholder}
        disabled={disabled}
        value={valueLabel}
        onClick={handleClick}
      />
      {!disabled && (
        <div
          className={classNamesDedupe("dropdown-popover", {
            "dropdown-popover--open": isOpen,
          })}>
          <div className="dropdown-popover__contents">
            {title && <h3 className="dropdown-popover__title">{title}</h3>}
            {loading ? (
              <div className="dropdown-popover__info">Chargement...</div>
            ) : !list.length ? (
              <div className="dropdown-popover__info">{noItemsPlaceholder}</div>
            ) : (
              <ul className="dropdown-popover__list">
                {list.map(item => (
                  <li
                    className={classNamesDedupe("dropdown-popover__list__item", {
                      "dropdown-popover__list__item--disabled": isItemDisabled(item),
                    })}
                    key={getItemKey ? getItemKey(item) : generateRandomKey()}
                    onClick={() => !isItemDisabled(item) && handleSelectItem(item)}>
                    {renderListItem(item)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownPopover.propTypes = {
  list: PropTypes.array,
  renderListItem: PropTypes.func,
  getItemValue: PropTypes.func,
  getItemKey: PropTypes.func,
  getItemLabel: PropTypes.func,
  isItemDisabled: PropTypes.func,
  openValue: PropTypes.any,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  className: PropTypes.string,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  noItemsPlaceholder: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};
DropdownPopover.defaultProps = {
  list: [],
  renderListItem: item => <Interweave content={String(item)} />,
  getItemValue: item => item,
  getItemLabel: item => String(item),
  isItemDisabled: () => false,
  disabled: false,
};
export default DropdownPopover;
