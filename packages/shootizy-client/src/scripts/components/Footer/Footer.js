import React from "react";
import "./Footer.scss";
import LazyLoad from "react-lazyload";
import NewsletterSubscribeFooter from "./NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
import SocialButtons from "../_common/SocialButtons";

const Footer = props => (
  <div className="Footer">
    <LazyLoad height={200}>
      <div className="footer-social-section">
        <div className="footer-social-section-content">
          <h2 className="title">#Shootizy</h2>
          <div className="description">
            Rejoignez la communauté Shootizy sur tous vos réseaux sociaux préférés !
          </div>
          <SocialButtons />

          <a href="/" className="snapcode">
            <img src="/assets/demo/snapcode.png" alt="" />
          </a>
        </div>
      </div>
      <NewsletterSubscribeFooter />
      <FooterBottom />
    </LazyLoad>
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
