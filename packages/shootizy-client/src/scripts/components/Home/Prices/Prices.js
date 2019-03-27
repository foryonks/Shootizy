import React from "react";
import Interweave from "interweave";
import { keyfix } from "../../../utils/utils";
//import PropTypes from "prop-types";

const data = keyfix([
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
]);

const Prices = ({ className }) => (
  <div className={"Prices row row-3 " + className}>
    {data.map(({ qty, unit, of, html, key }) => (
      <div className="price-item card" key={key}>
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
