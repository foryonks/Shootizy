import React from "react";
import Interweave from "interweave";
import Icon from "../../Icon";
import { keyfix } from "../../../utils/utils";
//import PropTypes from "prop-types";

const data = keyfix([
  {
    icon: "star",
    title: "Prenez Rendez-vous",
    text:
      "Réservez en ligne la date & l'heure de votre séance photo, 3 clics suffisent. <strong>So easy, so Shootizy</strong>",
  },
  {
    icon: "star",
    title: "Vivez votre Shooting",
    text: "Au studio, nous révélons <strong>le meilleur de vous-même</strong>",
  },
  {
    icon: "star",
    title: "Choisissez vos photos",
    text:
      "Découvez instantanément vos clichés.<br><strong>Achetez seulement ceux que vous aimez</strong>",
  },
]);

const CommentCaMarche = ({ className }) => (
  <div className={"CommentCaMarche container " + className}>
    <h3>Comment ça marche ?</h3>
    <ul>
      {data.map(({ icon, title, text, key }) => (
        <li className="CommentCaMarche-item item-with-arrow" key={key}>
          <div className="icon">
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
  </div>
);

CommentCaMarche.propTypes = {
  // bla: PropTypes.string,
};

CommentCaMarche.defaultProps = {
  // bla: 'test',
};

export default CommentCaMarche;
