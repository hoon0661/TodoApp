import React, { Component } from "react";
import moment from "moment";
//moment is use to format date
import { Formik, Form, Field, ErrorMessage } from "formik";
//formik is a very popular libary for forms
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveTodo(username, this.state.id).then((response) =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
      })
    );
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();

    let todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (this.state.id === -1) {
      TodoDataService.createTodo(username, todo).then(() => {
        this.props.history.push("/todos/");
      });
    } else {
      TodoDataService.updateTodo(username, this.state.id, todo).then(() => {
        this.props.history.push("/todos/");
      });
    }
  }

  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 Characters in Description";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid Target Date";
    }
    return errors;
  }

  render() {
    let { description, targetDate } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          {/* Formik need initial values */}
          <Formik
            initialValues={{
              description,
              targetDate,
            }}
            // Why do we not need to pass in any in onSubmit and validate...?
            // By default, validate on change and blur is set to true, and enableReinitialize (for value prop in input field) is false
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
