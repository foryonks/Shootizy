import React from "react";
import "./HeaderImage.scss";
import HeaderImageMask from "../HeaderImageMask";
import { Link } from "react-router-dom";

const HeaderImage = ({ src, preTitle, title, link, textButton }) => (
  <div className="HeaderImage container">
    <div className="HeaderImage-content">
      <img src={src} alt="" />
      <HeaderImageMask />
    </div>
    <div className="text">
      <h3 className="title preTitle">{preTitle}</h3>
      <h2 className="title bigTitle">{title}</h2>

      <Link to={link} className="btn-white">
        {textButton}
      </Link>
    </div>
  </div>
);

export default HeaderImage;
