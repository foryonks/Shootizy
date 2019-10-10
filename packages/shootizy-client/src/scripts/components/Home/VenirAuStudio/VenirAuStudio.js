import React from "react";
//import PropTypes from "prop-types";
import "./VenirAuStudio.scss";
import LazyLoad from "react-lazyload";
import Form from "scripts/components/Form";
import Logo from "scripts/components/Header/Logo";
import metro3 from "../../../../assets/icons-metro/metro-3.svg";
import metro12 from "../../../../assets/icons-metro/metro-12.svg";
import metro13 from "../../../../assets/icons-metro/metro-13.svg";
import metro14 from "../../../../assets/icons-metro/metro-14.svg";
import metrom from "../../../../assets/icons-metro/metro-m.svg";

const FORM_FIELDS = [
  { type: "text", name: "name", label: "Nom*", isRequired: true },
  {
    type: "email",
    name: "email",
    label: "Votre email afin que l’on puisse vous répondre*",
    isRequired: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Dites nous tout ! :)",
    isRequired: true,
    props: { rows: "4" },
  },
];
const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  label: "Envoyer",
  className: "btn-green btn-right",
};

const VenirAuStudio = props => (
  <section className="VenirAuStudio page-section">
    <div className="container-2">
      <h2 className="title">
        <strong>Viendez au Studio !</strong>
      </h2>

      <div className="row row-2">
        <div className="col col-description">
          <div className="description">
            Pour nous trouver, c’est so easy dans Paris !{" "}
            <strong> En plein cœur du 9ème arrondissement de Paris</strong>, entre St Lazare et
            Place de Clichy, venez nous voir on fait aussi un très bon café !
          </div>
          <Form
            className="generic-form"
            id="form-venir-au-studio"
            fields={FORM_FIELDS}
            submitBtn={FORM_SUBMIT_BTN}
            action="/api/contact/venir-au-studio"
          />
        </div>
        <div className="col col-googlemaps">
          <div className="googlemaps">
            <div className="googlemaps-content">
              <LazyLoad height={200}>
                <iframe
                  title="Googlemaps : 100 rue d'Amsterdam 75009 Paris"
                  src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=fr&amp;q=100%20rue%20d'Amsterdam%2075009%20Paris+(Shootizy)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                  scrolling="no"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="text">
            <div className="txt-c">
              <Logo hideText={true} />
            </div>
            100, rue d’Amsterdam 75009 Paris <br />
            +33 9 84 29 21 71 <br />
            contact@shootizy.com
          </div>

          <ul className="metros row row-2">
            <li className="col">
              <span>Place de clichy</span>
              <span>
                <img src={metrom} alt="Metro" />
                <img src={metro13} alt="Metro Ligne 13" />
              </span>
            </li>
            <li className="col">
              <span>St-Lazare</span>
              <span>
                <img src={metrom} alt="Metro" />
                <img src={metro3} alt="Metro Ligne 3" />
                <img src={metro12} alt="Metro Ligne 12" />
                <img src={metro13} alt="Metro Ligne 13" />
                <img src={metro14} alt="Metro Ligne 14" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

VenirAuStudio.propTypes = {
  // bla: PropTypes.string,
};

VenirAuStudio.defaultProps = {
  // bla: 'test',
};

export default VenirAuStudio;
