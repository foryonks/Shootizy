import React from "react";

const NavBar = props => (
  <div className="nav-bar">
    <ul className="menu">
      <li>
        <a href="/comment-ca-marche">Comment ça marche ?</a>
      </li>
      <li>
        <a href="/shooting-studio">Shooting Studio</a>
      </li>
      <li>
        <a href="/shooting-sur-mesure">Shooting sur mesure</a>
      </li>
      <li>
        <a href="/tarifs">Tarifs</a>
      </li>
      <li>
        <a href="/book">Notre book</a>
      </li>
    </ul>
  </div>
);

export default NavBar;
