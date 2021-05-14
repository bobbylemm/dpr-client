import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
