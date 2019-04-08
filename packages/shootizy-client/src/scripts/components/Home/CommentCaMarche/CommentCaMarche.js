import React from "react";
import Interweave from "interweave";
import Icon from "../../Icon";
import { keyfix } from "../../../utils/utils";
//import PropTypes from "prop-types";

const data = keyfix([
  {
    icon: "calendar",
    title: "Prenez Rendez-vous",
    text:
      "Réservez en ligne la date & l'heure de votre séance photo, 3 clics suffisent. <strong>So easy, so Shootizy</strong>",
  },
  {
    icon: "during",
    title: "Vivez votre Shooting",
    text: "Au studio, nous révélons <strong>le meilleur de vous-même</strong>",
  },
  {
    icon: "pics",
    title: "Choisissez vos photos",
    text:
      "Découvez instantanément vos clichés.<br><strong>Achetez seulement ceux que vous aimez</strong>",
  },
]);

const CommentCaMarche = ({ className }) => (
  <section className={`CommentCaMarche container container-2 page-section ${className}`}>
    <h2 className="title">
      <strong>Comment ça marche ?</strong>
    </h2>
    <ul className="row row-3">
      {data.map(({ icon, title, text, key }) => (
        <li className="CommentCaMarche-item item-with-arrow card card-with-top-icon" key={key}>
          <div className="top-icon icon-big">
            <Icon name={icon} />
          </div>
          <h4>{title}</h4>
          <p className="text">
            <Interweave content={text} />
          </p>
        </li>
      ))}
    </ul>
    <p>
      <a className="btn-green" href="/shooting">
        Je réserve mon shooting
      </a>
    </p>
  </section>
);

CommentCaMarche.propTypes = {
  // bla: PropTypes.string,
};

CommentCaMarche.defaultProps = {
  // bla: 'test',
};

export default CommentCaMarche;
