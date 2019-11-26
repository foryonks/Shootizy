import React from "react";
import PropTypes from "prop-types";
import "./Prices.scss";
import Interweave from "interweave";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import { Link } from "react-router-dom";

const Title = () => (
  <h2 className="title mt50 mb50">
    Aucune obligation d’achat ! <br />
    <strong>Payez seulement les photos que vous voulez !</strong>
  </h2>
);

const Prices = ({ className, showBottomTitle, showTitle, showButton, textKey = "home" }) => {
  const { contents } = useRemoteContents("/api/contents/home-key-prices");
  const items = contents ? contents.items : [];

  const itemsAlone = items.filter(({ parent }) => !parent);
  const itemsCollapse = items.filter(({ parent }) => !!parent);
  return (
    <div className={`PricesWrapper ${className}`}>
      {showTitle && <Title />}
      <div className={`Prices Prices-header row`}>
        {itemsAlone.map(PriceItem)}
        <div
          className={`card-simple card-shadow price-item price-collapse row row-${
            itemsCollapse.length
          }`}
          style={{ flexGrow: itemsCollapse.length }}>
          {itemsCollapse.map(PriceItem)}
        </div>
      </div>
      {showBottomTitle && <Title />}
      {showButton && (
        <p className="button-container-centered mt50">
          <Link to="/tarifs" className="btn-green">
            Consultez nos tarifs
          </Link>
        </p>
      )}
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
