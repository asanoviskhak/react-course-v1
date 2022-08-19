import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bobik",
      animal: "Dog",
      breed: "Smart boy",
    }),
    React.createElement(Pet, {
      name: "White",
      animal: "Cat",
      breed: "Elegant kitten",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cow",
      breed: "Mix",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
