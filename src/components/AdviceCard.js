import React, { Component } from "react";
import "../styles/AdviceCard.scss";

class AdviceCard extends Component {
  state = {};
  render() {
    return (
      <div className="Advice-card">
        <div className="container">
          <div className="card">
            <div className="card__image-container">
              <img
                className="card__image"
                src={this.props.imageSource}
                alt=""
              />
            </div>

            <svg className="card__svg" viewBox="0 0 800 500">
              <path
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                stroke="transparent"
                fill="black"
              />
              <path
                className="card__line"
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                stroke="pink"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>

            <div className="card__content">
              <p className="card__text">{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdviceCard;
