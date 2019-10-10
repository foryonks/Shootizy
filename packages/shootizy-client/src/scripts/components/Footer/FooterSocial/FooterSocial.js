import React from "react";
import "./FooterSocial.scss";
import SocialButtons from "scripts/components/_common/SocialButtons";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import { sliceAndRemoveHTML } from "scripts/utils/utils";
import { formatDate } from "scripts/utils/DateUtils";
import Icon from "scripts/components/Icon";

const FooterSocial = props => {
  const { contents } = useRemoteContents("/api/social");
  console.log(contents);
  return (
    <div className="footer-social-section">
      <div className="container-2 container-full row row-2">
        <div className="col col-description txt-c">
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
        <div className="col col-social">
          {contents && (
            <div className="row row-wrap">
              {contents.map(({ key, url, thumbnail, type, text, date }) => (
                <a
                  key={key}
                  href={url}
                  className={`item item-${type}`}
                  style={{ backgroundImage: thumbnail ? `url("${thumbnail}")` : false }}>
                  {date && <date>{formatDate(date, "DD.MM.YYYY")}</date>}
                  {type === "twitter" && (
                    <span className="text">{sliceAndRemoveHTML(text, 12)}</span>
                  )}
                  <Icon name={type} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
