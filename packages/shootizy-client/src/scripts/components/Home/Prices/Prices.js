import React from "react";
import PropTypes from "prop-types";

import Interweave from "interweave";
import useRemoteContents from "scripts/hooks/useRemoteContents";

const Prices = ({ className }) => {
  const { contents } = useRemoteContents("/api/contents/home-key-prices");
  const items = contents ? contents.items : [];

  return (
    <div className={"Prices container-2 row row-3 " + className}>
      {items.map(({ qty, unit, of, html }, index) => (
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
      git
    </div>
  );
};

Prices.propTypes = {
  className: PropTypes.string,
};

export default Prices;
