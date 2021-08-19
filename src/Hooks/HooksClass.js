import React, { Component } from "react";

export default class HooksClass extends Component {
  constructor(props) {
    //access of this in a subclass before super() call is not allowed, because in ES6
    //this is being born in the base class, therefore super() is needed to initialize it.

    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    // Lifecycle func - when component mounts/loads
    console.log("The app component loaded ");
  }

  componentDidUpdate(prevProps) {
    // Lifecycle func - when component props change
  }
  componentWillUnmount() {
    // Lifecycle func - when component unmounts/cleanup function
  }

  render() {
    return (
      <div>
        <center>
          <h1>The useEffect Hooks</h1>
          <h2>The window width is: {this.windowWidth}</h2>
        </center>
      </div>
    );
  }
}
