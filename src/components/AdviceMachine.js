import React, { Component } from "react";
import AdviceButton from "./AdviceButton";
import AdviceCard from "./AdviceCard";

class AdviceMachine extends Component {
  state = {};
  render() {
    return (
      <div className="Advice-machine">
        <AdviceButton />
        <AdviceCard />
      </div>
    );
  }
}

export default AdviceMachine;
