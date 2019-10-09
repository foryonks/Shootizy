import React from "react";
import "./Footer.scss";
import LazyLoad from "react-lazyload";
import NewsletterSubscribeFooter from "../Newsletter/NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
import SocialButtons from "../_common/SocialButtons";
import FacebookChatBot from "./FacebookChatBot/FacebookChatBot";

const Footer = props => (
  <div className="Footer">
    <LazyLoad height={200}>
      <div className="footer-social-section">
        <div className="container-2 container-full row row-2">
          <div className="col txt-c">
            <h2 className="title">@Shootizy</h2>
            <p>Rejoignez la communauté Shootizy sur tous vps réseaux sociaux préférés</p>
            <h2 className="title">#Shootizy</h2>
            <p>
              <strong>Say Cheeese !</strong>
            </p>
            <p>Suivez et partagez le quotidien de Shootizy</p>
            <SocialButtons
              className="social-section-buttons"
              facebook={true}
              snapcode={true}
              instagram={true}
            />
          </div>
          <div className="col">inmage sociale</div>
        </div>
      </div>
    </LazyLoad>
    <NewsletterSubscribeFooter />
    <FooterBottom />
    <FacebookChatBot />
  </div>
);

export default Footer;
