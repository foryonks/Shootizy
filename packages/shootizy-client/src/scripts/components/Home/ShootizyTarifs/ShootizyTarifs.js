import React from "react";
import PropTypes from "prop-types";

import Interweave from "interweave";
import Icon from "../../Icon";

import useRemoteContents from "scripts/hooks/useRemoteContents";

const ShootizyTarifs = ({ className }) => {
  const { contents } = useRemoteContents("/api/contents/home-detail-prices");
  const items = contents ? contents.items : [];

  return (
    <div className={"ShootizyTarifs " + className}>
      <div className="container container-2">
        <h2 className="title">
          Avec Shootizy{" "}
          <strong>
            payez seulement <br />
            les photos que vous aimez !
          </strong>
        </h2>
        <ul className="row row-3">
          {items.map(({ icon, title, text }, index) => (
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
};

ShootizyTarifs.propTypes = {
  className: PropTypes.string,
};

export default ShootizyTarifs;
