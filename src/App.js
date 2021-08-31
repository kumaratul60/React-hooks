import React from "react";
import "./App.css";
import HooksFucn from "./Hooks/HooksFucn";
import StateClass from "./State/StateClass";
import StateFun from "./State/StateFun";

function App() {
  return (
    <div className="App">
      <HooksFucn />
      <StateFun />
      <StateClass />
    </div>
  );
}

export default App;
