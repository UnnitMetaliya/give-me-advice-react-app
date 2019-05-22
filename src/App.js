import React, { Component } from "react";
import "./styles/App.css";
import AdviceMachine from "./components/AdviceMachine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdviceMachine />
      </div>
    );
  }
}

export default App;
