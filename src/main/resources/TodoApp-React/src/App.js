import React, { Component } from "react";
import TodoApp from "./components/todo/TodoApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}
export default App;
