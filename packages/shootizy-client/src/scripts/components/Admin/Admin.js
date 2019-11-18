import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import Product from "./Product";
import BlogArticle from "./Blog/Article";
import BlogCategories from "./Blog/Categories";
import Booking from "./Booking";
import PagesCustom from "./PagesCustom";

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
          <Route path="/admin/product" component={Product} />
          <Route
            path={["/admin/blog/article/:slug", "/admin/blog/article"]}
            component={BlogArticle}
          />
          <Route path="/admin/blog/categories" component={BlogCategories} />
          <Route path="/admin/blog" component={Blog} />
          <Route path="/admin/contents" component={SampleComponent} />
          <Route path="/admin/ratings" component={SampleComponent} />
          <Route path="/admin/pagescustom" component={PagesCustom} />
          <Route path="/admin/tarifs" component={PagesCustom} />
          <Redirect to="/admin/booking" />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
