import React from "react";
import "./Footer.scss";
import NewsletterSubscribeFooter from "./NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
import SocialButtons from "../_common/SocialButtons";

const Footer = props => (
  <section className="Footer">
    <div className="footer-social-section">
      <div className="footer-social-section-content">
        <h2 className="title">#Shootizy</h2>
        <div className="description">
          Rejoignez la communauté Shootizy sur tous <br /> vos réseaux sociaux préférés !
        </div>
        <SocialButtons />
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
