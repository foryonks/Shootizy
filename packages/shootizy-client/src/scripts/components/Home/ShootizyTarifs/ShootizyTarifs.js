import React from "react";
import Interweave from "interweave";
import Icon from "../../Icon";
import PropTypes from "prop-types";

const ShootizyTarifs = ({ contents, className }) => (
  <div className={"ShootizyTarifs " + className}>
    <div className="container container-2">
      <h3>
        Avec Shootizy{" "}
        <strong>
          payez seulement <br />
          les photos que vous aimez !
        </strong>
      </h3>
      <ul>
        {contents.map(({ icon, title, text }, index) => (
          <li className="ShootizyTarifs-item card card-simple card-with-top-icon" key={index}>
            <div className="top-icon">
              <Icon name={icon} />
            </div>
            <h4>
              <Interweave content={title} />
            </h4>
            <p className="text">
              <Interweave content={text} />
            </p>
          </li>
        ))}
      </ul>
      <p className="button-container-centered">
        <a className="btn-white" href="/shooting">
          <Icon name="triangle-right" />
          Consulter nos tarifs
        </a>
      </p>
    </div>
  </div>
);

ShootizyTarifs.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

ShootizyTarifs.defaultProps = {
  contents: [],
};

export default ShootizyTarifs;
