import React from "react";
//import PropTypes from "prop-types";
import Icon from "../Icon";
import "./Footer.scss";

const Footer = props => (
  <section className="Footer">
    <h2 className="title">#Shootizy</h2>
    <div className="description">
      Rejoignez la communauté Shootizy sur tous <br /> vos réseaux sociaux préférés !
    </div>
    <div className="social">
      <a href="/facebook" className="button-facebook">
        <Icon name="facebook" />
      </a>
      <a href="/twitter" className="button-twitter">
        <Icon name="twitter" />
      </a>
      <a href="/youtube" className="button-youtube">
        Facebook
      </a>
      <a href="/facebook" className="button-facebook">
        Facebook
      </a>
    </div>
  </section>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
