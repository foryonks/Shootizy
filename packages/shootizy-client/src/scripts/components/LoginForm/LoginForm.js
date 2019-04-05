import React, { useState, useContext, useCallback } from "react";

import { ACTIONS, CredentialsContext } from "scripts/contexts/Credentials";
import { fetchJson, setAppToken } from "scripts/utils/api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(CredentialsContext);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      try {
        const { token, user } = await fetchJson("/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        //Save credentials
        setAppToken(token);
        dispatch({
          type: ACTIONS.USER_LOGGED_IN,
          token,
          user,
        });
      } catch (e) {
        setError("Login failed");
      }
    },
    [username, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        autoComplete="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button type="submit" disabled={!username || !password}>
        Login
      </button>
      <div>{error}</div>
    </form>
  );
};

export default LoginForm;
