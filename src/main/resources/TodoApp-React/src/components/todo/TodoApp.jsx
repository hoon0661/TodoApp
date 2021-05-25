import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

//To change port number to be used, go to package.json and fix scripts.start
//and then restart the app

class TodoApp extends Component {
  render() {
    return (
      //Switch is used to ensure only one of the routes is active at the moment.
      //In Route, path can be omitted to use when URI is not included below.
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>

        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

export default TodoApp;
