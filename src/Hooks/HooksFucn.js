import React, { useState, useEffect } from "react";

function HooksFucn() {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect is used to perform "side effects" on functional components
  //   useEffect takes two arguments, first is arrow function and second is list of dependency array which is optional

  // On Every single render
  useEffect(() => {
    console.log("I re-rendered");
  });

  // On first Render/Mount only! - componentDidMount Alternative
  // only run this peace of code on first render/mount and after that, there is subsequent render don't run the code
  useEffect(() => {
    console.log("The component mounted");
  }, []);

  // On first Render + whenever dependency changes! -  componentDidUpdate Alternative
  // This component will always fire when component load
  useEffect(() => {
    // console.log(`The name changed!:${name}`);
    // return () => {
    //   // cleanup...
    //   console.log("We unmountd");
    // };
  }, [name]);

  // Follows the same rules, expect this handles the unmounting on a component! - componentWillUnmount Alternative
  useEffect(() => {
    
    console.log("attech listner");
    window.addEventListener("resize", updateWindowWidth);

    // return () => {
    //   // when component unmounts this cleanup code runs...
    //   console.log("deattech listner");
    //   window.removeEventListener("resize", updateWindowWidth);
    // };
  }, []);
  // [] -> limit the render rate

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <center>
        <h1>The useEffect Hooks</h1>
        <h2>The window width is: {windowWidth}</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
        />
      </center>
    </div>
  );
}

export default HooksFucn;
