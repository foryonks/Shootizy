import React from "react";

import "./Contact.scss";
import { Helmet } from "react-helmet";
import Form from "scripts/components/Form";

const FORM_FIELDS = [
  {
    type: "select",
    name: "status",
    label: "Vous êtes",
    isRequired: true,
    list: [
      { label: "Un particulier", value: "Un particulier" },
      { label: "Un indépendant", value: "Un indépendant" },
      { label: "Une agence", value: "Une agence" },
      { label: "Un annonceur", value: "Un annonceur" },
    ],
  },
  { type: "text", name: "name", label: "Nom complet", isRequired: true },
  { type: "text", name: "email", label: "Email", isRequired: true },
  { type: "text", name: "phone", label: "Téléphone", isRequired: true },
  { type: "textarea", rows: 3, name: "comment", label: "Commentaire", isRequired: true },
];

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
          fields={FORM_FIELDS}
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
