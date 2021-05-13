import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from "../pages/authentication/Login";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
