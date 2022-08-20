import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Bobik" animal="Dog" breed="Smart boy" />
      <Pet name="White" animal="Cat" breed="Elegant kitten" />
      <Pet name="Doink" animal="Cow" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
