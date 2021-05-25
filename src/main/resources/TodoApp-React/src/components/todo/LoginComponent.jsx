import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value, //usually put const value, but if want to use variable, use [], and name in "form" and "state" must be the same for this
    });
  };

  loginClicked = () => {
    // if (this.state.username === "hoon" && this.state.password === "dummy") {
    //   AuthenticationService.registerSuccessfulLogin(
    //     //to put user info in Session Storage.
    //     //------------------ IMPORTANT --------------------
    //     //Data stored in localStorage has no expiration time.
    //     //Data stored in sessionStorage gets cleared when the page session ends
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.props.history.push(`/welcome/${this.state.username}`);
    //   // this.setState({ showSuccessMessage: true });
    //   // this.setState({ hasLoginFalied: false });
    // } else {
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }

    // AuthenticationService.executeBasicAuthenticationService(
    //   this.state.username,
    //   this.state.password
    // )
    //   .then(() => {
    //     //to put user info in Session Storage.
    //     //------------------ IMPORTANT --------------------
    //     //Data stored in localStorage has no expiration time.
    //     //Data stored in sessionStorage gets cleared when the page session ends
    //     AuthenticationService.registerSuccessfulLogin(
    //       this.state.username,
    //       this.state.password
    //     );
    //     this.props.history.push(`/welcome/${this.state.username}`);
    //   })
    //   .catch(() => {
    //     this.setState({ showSuccessMessage: false });
    //     this.setState({ hasLoginFailed: true });
    //   });

    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        //to put user info in Session Storage.
        //------------------ IMPORTANT --------------------
        //Data stored in localStorage has no expiration time.
        //Data stored in sessionStorage gets cleared when the page session ends
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Success</div>}
          User Name:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
