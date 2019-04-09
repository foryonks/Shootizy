import React, { useContext, lazy } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { CredentialsContext } from "scripts/contexts/Credentials";
import LazyRoute from "scripts/components/LazyRoute";
import AdminLogin from "scripts/components/LoginForm";

const AdminHome = lazy(() => import("scripts/components/Admin"));

const Admin = () => {
  const { state: credentials } = useContext(CredentialsContext);

  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <Link to="/">Back to Shootizy</Link>
      <br />
      <br />
      <br />
      <Switch>
        <Route
          path="/admin/login"
          render={() => (!credentials ? <AdminLogin /> : <Redirect to="/admin" />)}
        />
        {!credentials ? (
          <Redirect to="/admin/login" />
        ) : !credentials.user.isAdmin ? (
          <Redirect to="/" />
        ) : (
          <LazyRoute path="/admin" lazyComponent={AdminHome} />
        )}
        <Redirect to="/admin" />
      </Switch>
    </>
  );
};

export default Admin;
