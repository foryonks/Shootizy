import React from "react";
import "./SocialButtons.scss";
import Icon from "../../Icon";
import { bool, string } from "prop-types";

const SocialButtons = ({ all, facebook, snapcode, instagram, twitter, className }) => (
  <div className={`SocialButtonsWrapper ${className}`}>
    <div className="social-buttons">
      {(all || facebook) && (
        <a href="/facebook" className="button-facebook" title="Facebook">
          <Icon name="facebook" />
        </a>
      )}
      {/* <a href="/youtube" className="button-youtube" title="Youtube">
        <Icon name="youtube" />
      </a> */}
      {(all || snapcode) && (
        <a href="/" className="snapcode snapchat">
          <img src="/assets/demo/snapcode.png" alt="" />
        </a>
      )}
      {(all || instagram) && (
        <a href="/instagram" className="button-instagram" title="Instagram">
          <Icon name="instagram" />
        </a>
      )}
      {(all || twitter) && (
        <a href="/twitter" className="button-twitter" title="Twitter">
          <Icon name="twitter" />
        </a>
      )}
    </div>
  </div>
);

SocialButtons.propTypes = {
  facebook: bool,
  snapcode: bool,
  instagram: bool,
  twitter: bool,
  all: bool,
  className: string,
};

SocialButtons.defaultProps = {
  facebook: false,
  snapcode: false,
  instagram: false,
  twitter: false,
  all: false,
  className: "",
};

export default SocialButtons;
