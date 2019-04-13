import React from "react";
import PropTypes from "prop-types";
import "./Prices.scss";
import Interweave from "interweave";
import useRemoteContents from "scripts/hooks/useRemoteContents";

const Prices = ({ className, textKey = "home" }) => {
  const { contents } = useRemoteContents("/api/contents/home-key-prices");
  const items = contents ? contents.items : [];

  return (
    <div className={`Prices Prices-header row row-3 ${className}`}>
      {items.map(({ qty, unit, of, html }, index) => (
        <div className="price-item card card-simple card-shadow" key={index}>
          <span className="price-item-qty">
            {qty}
            <sup>{unit}</sup>
          </span>
          <span className="price-item-of">{of}</span>
          <p className="price-item-text">
            <Interweave content={html[textKey]} />
          </p>
        </div>
      ))}
    </div>
  );
};

Prices.propTypes = {
  className: PropTypes.string,
};

export default Prices;
