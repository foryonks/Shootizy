import React from "react";
import "./Footer.scss";
import NewsletterSubscribeFooter from "../Newsletter/NewsletterSubscribeFooter";
import FooterBottom from "./FooterBottom/FooterBottom";
import FacebookChatBot from "./FacebookChatBot/FacebookChatBot";

const Footer = props => (
  <div className="Footer">
    <NewsletterSubscribeFooter />
    <FooterBottom />
    <FacebookChatBot />
  </div>
);

export default Footer;
