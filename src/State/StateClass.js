import React, { Component } from "react";

export default class StateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  /** 
//     This type is syschronouse
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  */

  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Welcome to my counter</h1>

        <p>Class count is : {this.state.count}</p>

        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
