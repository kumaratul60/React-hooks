import React, { useState, useEffect } from "react";

function HooksFucn() {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect is used to perform "side effects" on functional components
  //   useEffect takes two arguments, first is arrow function and second is list of dependency array which is optional

  // mount  On Every single render
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
    // cleanup...
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

  // -------------------------------------------------------------------------------------------------------------------------

  // runs after every rerender ---> This renders every time our app renders and at initial render. But we don't want to render each time, this can cause an infinite loop and we should avoid this.
  useEffect(() => {
    console.log("I run after every render and at initial render");
  });

  // runs at initial render ---> This only runs once when the component is mounted or loaded.
  useEffect(() => {
    console.log("I only run once");
  }, []);

  // useEffect comes with a cleanup function that helps unmount the component,  componentWillUnmount Alternative

  // When we need to clear a subscription or clear timeout, we can use cleanup functions. When we run the code, the code first will clean up the old state, then will run the updated state. This can help us to remove unnecessary behavior or prevent memory leaking issues.
  useEffect(() => {
    // effect;
    return () => {
      // cleanup;
    };
  }, [name]);

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
