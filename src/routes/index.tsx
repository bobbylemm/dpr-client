import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Posts from "../pages/posts/Posts";
import PostDetail from "../pages/posts/PostDetail";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:postId" component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
