import React from "react";
import { string } from "prop-types";
import "./HeaderImage.scss";
import HeaderImageMask from "../HeaderImageMask";
import { Link } from "react-router-dom";

/**
 * Affiche un header avec une image de fond et un texte qui peut être custom
 * @param {Object} props - Props object
 * @param {string} props.prefTitle - Title of the text at top of big title
 * @param {string} props.title - title
 * @param {string} props.buttonLink - link of the button
 * @param {string} props.buttonText - text of the button
 * @param {string} props.className - className
 * @param {string} props.children - Other elements to show inside
 */
const HeaderImage = ({ src, preTitle, title, buttonLink, buttonText, className, children }) => (
  <section className={`HeaderImage container ${className}`}>
    <div className="HeaderImage-content">
      {src && <img src={src} alt="" />}

      {(preTitle || title || buttonLink) && (
        <div className="text">
          {preTitle && <h3 className="title preTitle">{preTitle}</h3>}
          {title && <h2 className="title bigTitle">{title}</h2>}
          {buttonLink && (
            <Link to={buttonLink} className="btn-green">
              {buttonText}
            </Link>
          )}
        </div>
      )}
      <HeaderImageMask />
    </div>
    {children}
  </section>
);

HeaderImage.propTypes = {
  src: string,
  preTitle: string,
  link: string,
  textButton: string,
  className: string,
};

export default HeaderImage;
