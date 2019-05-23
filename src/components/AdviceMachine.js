import React, { Component } from "react";
import AdviceButton from "./AdviceButton";
import AdviceCard from "./AdviceCard";

class AdviceMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAdvice: "",
      imageSource: "https://picsum.photos/400/320"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ currentAdvice: responseJson.slip.advice });
        console.log(this.state.currentAdvice);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick() {
    //Fetching advice from Advice Slip
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          currentAdvice: responseJson.slip.advice
        });
        console.log(this.state.currentAdvice);
      })
      .catch(error => {
        console.log(error);
      });

    // Fetching new image for background in card from Unsplash
    // const imgUrl = "https://picsum.photos/400/320";
    // fetch(imgUrl)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({
    //       imageSource: responseJson.data
    //     });
    //   });
    // console.log(this.state.imageSource);
  }

  render() {
    return (
      <div className="Advice-machine">
        <AdviceCard
          text={this.state.currentAdvice}
          imageSource={this.state.imageSource}
        />
        <AdviceButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default AdviceMachine;
