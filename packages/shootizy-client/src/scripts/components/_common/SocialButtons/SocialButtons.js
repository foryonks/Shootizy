import React from "react";
import "./SocialButtons.scss";
import Icon from "../../Icon";

const SocialButtons = props => (
  <div className="SocialButtonsWrapper">
    <div className="social-buttons">
      <a href="/facebook" className="button-facebook" title="Facebook">
        <Icon name="facebook" />
      </a>
      <a href="/twitter" className="button-twitter" title="Twitter">
        <Icon name="twitter" />
      </a>
      <a href="/youtube" className="button-youtube" title="Youtube">
        <Icon name="youtube" />
      </a>
      <a href="/facebook" className="button-instagram" title="Instagram">
        <Icon name="instagram" />
      </a>
    </div>
  </div>
);

SocialButtons.propTypes = {
  // bla: PropTypes.string,
};

SocialButtons.defaultProps = {
  // bla: 'test',
};

export default SocialButtons;
