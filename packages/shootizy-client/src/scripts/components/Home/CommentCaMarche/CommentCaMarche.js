import React from "react";
import Interweave from "interweave";
//import PropTypes from "prop-types";

const data = [
  {
    icon: "calendar2",
    title: "Prenez Rendez-vous",
    text:
      "Réservez en ligne la date & l'heure de votre séance photo, 3 clics suffisent. <strong>So easy, so Shootizy",
  },
];

const CommentCaMarche = ({ className }) => (
  <div className={"CommentCaMarcheWrapper " + className}>
    <h3>Comment ça marche</h3>
    <ul>
      {data.map(({ icon, title, text }) => (
        <li class="CommentMarche-item">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>
            <Interweave content={text} />
          </p>
        </li>
      ))}
    </ul>
  </div>
);

CommentCaMarche.propTypes = {
  // bla: PropTypes.string,
};

CommentCaMarche.defaultProps = {
  // bla: 'test',
};

export default CommentCaMarche;
