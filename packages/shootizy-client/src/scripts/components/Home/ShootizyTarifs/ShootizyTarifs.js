import React from "react";
import Interweave from "interweave";
import Icon from "../../Icon";
import { keyfix } from "../../../utils/utils";
//import PropTypes from "prop-types";

const data = keyfix([
  {
    icon: "star",
    title: "Shooting de 45 min = 0 €",
    text:
      "Oui, zéro euro \u{1F601}<br>Mais nous sommes sûrs que vous choisirez au moins une photo...",
  },
  {
    icon: "star",
    title: "Pack de 150 photos = 150 €,<br> soit 1 € la photo",
    text: "Rearement un billet de vingt vous aura fait <strong>autant de bien ;-)</strong>",
  },
  {
    icon: "star",
    title: "Le temps de choisir = 0 €",
    text:
      "Sitôt votre séance terminée, découvrez vos photos.<br><br>Prenez votre temps, <strong>Aucune obligation d'achat. Payez seulement les images qui vous plaisent.",
  },
]);

const ShootizyTarifs = ({ className }) => (
  <div className={"ShootizyTarifs " + className}>
    <div className="container container-2">
      <h3>
        Avec Shootizy{" "}
        <strong>
          payez seulement <br />
          les photos que vous aimez !
        </strong>
      </h3>
      <ul className="row row-3">
        {data.map(({ icon, title, text, key }) => (
          <li className="ShootizyTarifs-item card card-simple card-with-top-icon" key={key}>
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
  // bla: PropTypes.string,
};

ShootizyTarifs.defaultProps = {
  // bla: 'test',
};

export default ShootizyTarifs;
