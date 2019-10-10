import React from "react";
import "./Footer.scss";
import LazyLoad from "react-lazyload";
import NewsletterSubscribeFooter from "../Newsletter/NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
import FacebookChatBot from "./FacebookChatBot/FacebookChatBot";
import FooterSocial from "./FooterSocial";

const Footer = props => (
  <div className="Footer">
    <LazyLoad height={200}>
      <FooterSocial />
    </LazyLoad>
    <NewsletterSubscribeFooter />
    <FooterBottom />
    <FacebookChatBot />
  </div>
);

export default Footer;
