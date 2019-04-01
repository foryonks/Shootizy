import React from "react";
//import PropTypes from "prop-types";
import Icon from "../Icon";
import "./Footer.scss";
import NewsletterSubscribeFooter from "./NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = props => (
  <section className="Footer">
    <div className="footer-social-section">
      <div className="footer-social-section-content">
        <h2 className="title">#Shootizy</h2>
        <div className="description">
          Rejoignez la communauté Shootizy sur tous <br /> vos réseaux sociaux préférés !
        </div>
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
    </div>
    <NewsletterSubscribeFooter />
    <FooterBottom />
  </section>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
