import React from "react";
import PropTypes from "prop-types";
import "./Prices.scss";
import Interweave from "interweave";
import useRemoteContents from "scripts/hooks/useRemoteContents";

const Prices = ({ className, textKey = "home" }) => {
  const { contents } = useRemoteContents("/api/contents/home-key-prices");
  const items = contents ? contents.items : [];

  const itemsAlone = items.filter(({ parent }) => !parent);
  const itemsCollapse = items.filter(({ parent }) => !!parent);
  return (
    <div className={`Prices Prices-header row ${className}`}>
      {itemsAlone.map(PriceItem)}
      <div
        className="card-simple price-item price-collapse"
        style={{ flexGrow: itemsCollapse.length }}>
        {itemsCollapse.map(PriceItem)}
      </div>
    </div>
  );
};

const PriceItem = ({ html: { pre, title, button, text }, className }, index) => (
  <div className={`price-item card card-simple card-shadow ${className || ""}`} key={index}>
    <div className="pretitle">{pre}</div>
    <div className="title">{title}</div>
    <a href="#offer" className="button">
      {button}
    </a>

    <p className="price-item-text">
      <Interweave content={text} />
    </p>
  </div>
);

Prices.propTypes = {
  className: PropTypes.string,
};

export default Prices;
