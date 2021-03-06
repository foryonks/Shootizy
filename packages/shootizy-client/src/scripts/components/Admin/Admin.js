import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import Booking from "./Booking";

import "./Admin.scss";

//TO-DO Make your own component
const SampleComponent = () => <div>TO-DO</div>;

const Admin = () => {
  return (
    <div className="admin-home">
      <Header />
      <div className="admin-home__body">
        <Switch>
          <Route path="/admin/booking" component={Booking} />
          <Route path="/admin/blog" component={Blog} />
          <Route path="/admin/contents" component={SampleComponent} />
          <Route path="/admin/ratings" component={SampleComponent} />
          <Redirect to="/admin/booking" />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
