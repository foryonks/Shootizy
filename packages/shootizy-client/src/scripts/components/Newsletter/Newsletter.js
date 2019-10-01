import React from "react";

import "./Newsletter.scss";
import { Helmet } from "react-helmet";
import { FORM_FIELDS_MAIN } from "./NewsletterFormFields";
import Form from "scripts/components/Form";

const FORM_SUBMIT_BTN = {
  className: "btn-white btn-centered",
  label: "Envoyer",
  wrapper: null,
};

const NotreBook = props => (
  <div className="NewsletterWrapper page-container">
    <Helmet bodyAttributes={{ class: "header-padding-page-without-headerimage" }} />
    <div className="form-newsletter-block block block-corners block-primary-background container-2 txt-c">
      <div className="block-content">
        <h2 className="smallTitle">Newsletter</h2>
        <div className="text">
          <div className="big">
            <strong>Gagnez à nous suivre !</strong>
            <span>Abonnez-vous à notre newsletter</span>
          </div>
          <div className="advertphrase">
            Profitez de nos bons plans réguliers, offres spéciales et partenariats avantageux…{" "}
          </div>
        </div>

        <Form
          className="form-newsletter"
          id="form-newsletter"
          fields={FORM_FIELDS_MAIN}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/newsletter"
          successMessage="Votre souscription a été prise en compte, merci !"
          showFieldErrorFeedback={false}
        />
      </div>
    </div>
  </div>
);

export default NotreBook;
