import React from "react";
import Interweave from "interweave";
//import PropTypes from "prop-types";

const data = [
  {
    qty: 45,
    unit: "min",
    of: "de Shooting",
    html: "Shooting photo en studio <br>avec un pro : <strong>0€</strong>",
  },
  {
    qty: 150,
    unit: "€",
    of: "le Pack",
    html: "Jusqu'à 150 photos, <br><strong>soit 1€ la photo</strong>",
  },
  {
    qty: 20,
    unit: "€",
    of: "la photo",
    html: "<strong>un prix à l'unité</strong><br>Pour les petites envies",
  },
];

const Prices = ({ className }) => (
  <div className={"Prices " + className}>
    {data.map(({ qty, unit, of, html }) => (
      <div className="price-item">
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
  // bla: PropTypes.string,
};

Prices.defaultProps = {
  // bla: 'test',
};

export default Prices;
