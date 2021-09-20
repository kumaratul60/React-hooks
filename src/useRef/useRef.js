import React from "react";

function Counter() {
  const hasClickedButton = React.useRef(false);

  const [count, setCount] = React.useState(0);

  function onClick() {
    // const newCount = count + 1;

    // setCount(newCount);

    hasClickedButton.current = true;
  }

  // Does only run for the first render.
  // Component does not render again, because no state is set anymore.
  // Only the ref's current property is set, which does not trigger a re-render.
  console.log("Has clicked button? " + hasClickedButton.current);

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}
