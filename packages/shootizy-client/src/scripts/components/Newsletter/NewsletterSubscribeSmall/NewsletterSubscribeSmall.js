import React from "react";
//import PropTypes from "prop-types";
import Icon from "../../Icon";
import "./NewsletterSubscribeSmall.scss";
import { FORM_FIELDS_FOOTER } from "scripts/components/Newsletter/NewsletterFormFields";
import Form from "scripts/components/Form";

const FORM_SUBMIT_BTN = {
  hiddenOnSubmit: true,
  className: "btn-white",
  label: "Envoyer",
  wrapper: null,
};

const NewsletterSubscribeSmall = props => (
  <div className="NewsletterSubscribeSmall block-forms block block-corners block-primary-background txt-c">
    <h3 className="title">Newsletter Shootizy…</h3>
    <p className="grey-text">Bons plans, offres spéciales et partenariats avantageux…</p>
    <div className="col ">
      <Form
        className="form-newsletter"
        id="form-newsletter"
        fields={FORM_FIELDS_FOOTER}
        submitBtn={FORM_SUBMIT_BTN}
        action="/api/newsletter"
        successMessage="Votre souscription a été prise en compte, merci !"
        showFieldErrorFeedback={false}
      />
    </div>
  </div>
);

NewsletterSubscribeSmall.propTypes = {
  // bla: PropTypes.string,
};

NewsletterSubscribeSmall.defaultProps = {
  // bla: 'test',
};

export default NewsletterSubscribeSmall;
