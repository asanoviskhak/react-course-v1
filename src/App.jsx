const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
