import React from "react";
import { string } from "prop-types";
import "./HeaderImage.scss";
import HeaderImageMask from "../HeaderImageMask";
import { NavLink } from "react-router-dom";
import Interweave from "interweave";

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
const HeaderImage = ({
  src,
  preTitle,
  title,
  buttonLink,
  buttonText,
  className,
  children,
  reverseColor,
}) => (
  <section className={`HeaderImage  ${className} ${reverseColor ? "HeaderImage-reverse" : ""}`}>
    <div
      className="HeaderImage-content header-image"
      style={{ backgroundImage: src && `url(${src})` }}>
      <div className="header-image-content">
        {(preTitle || title || buttonLink) && (
          <div className="text">
            {preTitle && <h3 className="title preTitle">{preTitle}</h3>}
            {title && (
              <h2 className="title bigTitle">
                <Interweave content={title} />
              </h2>
            )}
            {buttonLink && (
              <NavLink to={buttonLink} className="header-image__btn-link btn-green">
                {buttonText}
              </NavLink>
            )}
          </div>
        )}
      </div>
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
