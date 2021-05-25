import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      welcomeMessage: "",
    };
  }
  retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
    // HelloWorldService.executeHelloWorldBeanService().then((response) =>
    //   this.handleSuccessfulResponse(response)
    // );
    // HelloWorldService.executeHelloWorldService().then((response) =>
    //   this.handleSuccessfulResponse(response)
    // );
  };

  handleSuccessfulResponse = (response) => {
    this.setState({ welcomeMessage: response.data.message });
  };

  handleError = (error) => {
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  };
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. Manage your todos{" "}
          <Link to="/todos">here</Link>
        </div>
        <div className="container">
          Click here to get a customized welcome message.
          <button
            className="btn btn-success"
            onClick={this.retrieveWelcomeMessage}
          >
            Get Welcome Message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    ); //Used to fetch URI parameter, and parameter should match parameter in Route
    //when <a> is used, entire page is reloaded, but <Link> does not.
  }
}

export default WelcomeComponent;
