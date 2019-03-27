import React from "react";
import { keyfix } from "../../../utils/utils";
import "./Themes.scss";
import ThemeCard from "../ThemeCard/ThemeCard";

const data = keyfix([
  {
    image: "image.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre ... ",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
  },
]);

const Themes = props => (
  <div className="ThemesWrapper">
    {data.map((theme, { key }) => (
      <ThemeCard {...theme} key={key} />
    ))}
  </div>
);

Themes.propTypes = {
  // bla: PropTypes.string,
};

Themes.defaultProps = {
  // bla: 'test',
};

export default Themes;
