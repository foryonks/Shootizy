import React, { useContext, useCallback } from "react";

import { ACTIONS, CredentialsContext } from "scripts/contexts/Credentials";
import { setAppToken } from "scripts/utils/api";

import Form from "scripts/components/Form";

const FORM_FIELDS = [
  { type: "text", name: "username", label: "Identifiant :", isRequired: true },
  { type: "password", name: "password", label: "Mot de passe :", isRequired: true },
];
const FORM_SUBMIT_BTN = { label: "Valider", className: "btn-green" };

const LoginForm = () => {
  const { dispatch } = useContext(CredentialsContext);

  const handleSubmitSuccess = useCallback(response => {
    const { token, user } = response;

    //Save credentials
    setAppToken(token);
    dispatch({
      type: ACTIONS.USER_LOGGED_IN,
      token,
      user,
    });
  }, []);

  return (
    <Form
      fields={FORM_FIELDS}
      submitBtn={FORM_SUBMIT_BTN}
      action="/api/user/login"
      onSuccess={handleSubmitSuccess}
      errorMessage="Connexion échouée, veuillez réessayer !"
    />
  );
};

export default LoginForm;
