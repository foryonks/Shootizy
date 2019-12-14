import React from "react";
import "./FooterSocial.scss";
import SocialButtons from "scripts/components/_common/SocialButtons";
import SocialSquares from "../../_common/SocialSquares";
import LazyLoad from "react-lazyload";

const FooterSocial = props => {
  return (
    <div className="footer-social-section section-paddings">
      <div className="container-2 container-full row row-2">
        <div className="col col-description txt-c">
          <h2 className="title">
            <strong>@Shootizy</strong>
          </h2>
          <p>Rejoignez la communauté Shootizy sur tous vps réseaux sociaux préférés</p>
          <h2 className="title title-hashtag">
            <strong>#Shootizy</strong>
          </h2>
          <p>
            <strong>Say Cheeese !</strong>
          </p>
          <p className="phrase2">Suivez et partagez le quotidien de Shootizy</p>
          <SocialButtons
            className="social-section-buttons"
            facebook={true}
            snapcode={true}
            instagram={true}
          />
        </div>
        <div className="col col-social">
          <LazyLoad height={250}>
            <SocialSquares cols={2} nums={4} twitterPos={[2]} />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
