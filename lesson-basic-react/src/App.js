import React from 'react';
import ClickerCounter from "./ClickerCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <ClickerCounter number={this.state.counter}></ClickerCounter>
        <button onClick={this.handleClick}>Click!</button>
      </>
    );
  }
}

export default App;
