import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

//This method is used because even if user is not logged in and do not see menus on the navbar,
//users can use URL to access to certain pages. So we need this Authentication step.
class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRoute;
