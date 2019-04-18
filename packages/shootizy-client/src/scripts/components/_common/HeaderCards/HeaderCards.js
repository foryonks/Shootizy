import React from "react";
import PropTypes from "prop-types";
import Interweave from "interweave";
import "./HeaderCards.scss";

const Prices = ({ className, data }) => {
  return (
    <div className={`HeaderCards row row-3 ${className}`}>
      {data.map(({ html, title, text }, index) => (
        <div className="card card-simple card-shadow" key={index}>
          <div className="card-content">
            {html ? (
              <Interweave content={html} />
            ) : (
              <div>
                <h3 className="card-title">{title}</h3>
                {text && (
                  <div className="card-text">
                    <Interweave content={text} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Prices.propTypes = {
  className: PropTypes.string,
};

export default Prices;
