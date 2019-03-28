import React from "react";
import Interweave from "interweave";
import PropTypes from "prop-types";

const Prices = ({ contents, className }) => (
  <div className={"Prices container-2 row row-3 " + className}>
    {contents.map(({ qty, unit, of, html }, index) => (
      <div className="price-item card card-simple" key={index}>
        <span className="price-item-qty">
          {qty}
          <em>{unit}</em>
        </span>
        <span className="price-item-of">{of}</span>
        <p className="price-item-text">
          <Interweave content={html} />
        </p>
      </div>
    ))}
  </div>
);

Prices.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

Prices.defaultProps = {
  contents: [],
};

export default Prices;
