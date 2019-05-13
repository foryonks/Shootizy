import React from "react";
//import PropTypes from "prop-types";
import "./VenirAuStudio.scss";
import LazyLoad from "react-lazyload";
import Icon from "../../Icon";
import Form from "scripts/components/Form";
import metro3 from "../../../../assets/icons-metro/metro-3.svg";
import metro12 from "../../../../assets/icons-metro/metro-12.svg";
import metro13 from "../../../../assets/icons-metro/metro-13.svg";
import metro14 from "../../../../assets/icons-metro/metro-14.svg";
import metrom from "../../../../assets/icons-metro/metro-m.svg";

const FORM_FIELDS = [
  { type: "text", name: "name", label: "Nom*", isRequired: true },
  { type: "email", name: "email", label: "Email*", isRequired: true },
  {
    type: "textarea",
    name: "message",
    label: "Message (ou numéro de téléphone pour être rappelé)",
    isRequired: true,
    props: { rows: "4" },
  },
];
const FORM_SUBMIT_BTN = { icon: "letter", label: "Envoyer", className: "btn-green btn-fullwitdh" };

const VenirAuStudio = props => (
  <section className="VenirAuStudio page-section">
    <div className="container-2">
      <h2 className="title">
        <strong>Venir au Studio !</strong>
      </h2>
      <div className="description">
        Pour nous trouver, <strong>c’est so easy dans Paris !</strong> En plein cœur du 9ème
        arrondissement de Paris, venez vivre l’expérience Shootizy,{" "}
        <strong>le shooting en mode so easy !</strong>
      </div>
      <div className="row row-2 row-strech">
        <div className="col">
          <Form
            id="form-venir-au-studio"
            fields={FORM_FIELDS}
            submitBtn={FORM_SUBMIT_BTN}
            action="/api/venir-au-studio"
            errorMessage="Envoi échoué, veuillez réessayer !"
          />
        </div>
        <div className="col googlemaps">
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
      </div>
      <div className="row row-3 moreInfos">
        <div className="col">
          <div className="col-content">
            <h3 className="title">
              <Icon name="arrow-right" className="circle-icon" />
              Nous localiser
            </h3>
            <p>
              <a href="/maps">
                100 rue d'Amsterdam
                <br />
                75009 Paris
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="col-content">
            <h3 className="title">
              <Icon name="arrow-right" className="circle-icon" />
              Venir en transport
            </h3>
            <ul className="metros">
              <li>
                <span>Place de clichy</span>
                <span>
                  <img src={metrom} alt="Metro" />
                  <img src={metro13} alt="Metro Ligne 13" />
                </span>
              </li>
              <li>
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
        <div className="col">
          <div className="col-content">
            <h3 className="title">
              <Icon name="arrow-right" className="circle-icon" />
              Nous contacter
            </h3>
            <ul className="list-table">
              <li>
                <span>Tél. :</span> <a href="tel:+33984292171">+33 9 84 29 21 71</a>
              </li>
              <li>
                <span>Email :</span> <a href="mailto:contact@shootizy.com">contact@shootizy.com</a>
              </li>
            </ul>
          </div>
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
