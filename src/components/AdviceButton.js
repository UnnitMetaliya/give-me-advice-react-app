import React, { Component } from "react";
import "../styles/AdviceButton.scss";

class AdviceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    alert("Fucking button worked!");
  };
  render() {
    return (
      <div className="Advice-button">
        <a onClick={this.props.onClick}>
          Get Advice! <span role="img"> 🔥</span>
        </a>
      </div>
    );
  }
}

export default AdviceButton;
