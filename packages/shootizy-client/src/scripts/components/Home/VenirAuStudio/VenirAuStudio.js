import React from "react";
//import PropTypes from "prop-types";
import "./VenirAuStudio.scss";
import metroImg from "../../../../assets/misc/metros.png";
import Icon from "../../Icon";

const VenirAuStudio = props => (
  <section className="VenirAuStudio page-section">
    <div className="container-2">
      <h2 className="title">Venir au studio !</h2>
      <div className="description">
        Pour nous trouver, <strong>c’est so easy dans Paris !</strong> En plein cœur du 9ème
        arrondissement de Paris, venez vivre l’expérience Shootizy,{" "}
        <strong>le shooting en mode so easy !</strong>
      </div>
      <div className="row row-2">
        <div className="col">
          <form action="">
            <div className="form-line label-top">
              <label htmlFor="venirstudionom">Nom :</label>
              <input type="text" id="venirstudionom" />
            </div>
            <div className="form-line label-top">
              <label htmlFor="venirstudioemail">Email :</label>
              <input type="text" id="venirstudioemail" />
            </div>
            <div className="form-line label-top">
              <label htmlFor="venirstudiomessage">
                Message (ou numéro de téléphone pour être rappelé)
              </label>
              <textarea id="venirstudiomessage" />
            </div>
            <div className="button-container-centered">
              <button className="btn-green" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row row-3 moreInfos">
        <div className="col">
          <h3 className="title">
            <Icon name="fleche-right" />
            Nous localiser
          </h3>
          <p>
            <a href="/maps">100 rue d'Amsterdam 75009 Paris</a>
          </p>
        </div>
        <div className="col">
          <h3 className="title">
            <Icon name="fleche-right" />
            Venir en transport
          </h3>
          <p class="metros">
            <a href="/maps">
              Place de clichy <span className="nowrap">St-Lazare</span>
            </a>
            <img src={metroImg} alt="metros" />
          </p>
        </div>
        <div className="col">
          <h3 className="title">
            <Icon name="fleche-right" />
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

        <div className="col" />
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
