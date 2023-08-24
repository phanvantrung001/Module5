import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";

// function App() {
// return (
//   <Count/>
// )
// };

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "phan van trung",
      age: 21,
    };
  }
  changeName = () => {
    this.setState({ name: "Khuowng" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}
export default App;
