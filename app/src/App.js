import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";
import Total from "./Total";
import Hello from "./Hello";
import React, { Component } from "react";
import Calculator from "./Calculator";
function App() {
  return <Calculator />;
}
export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     };
//   }

//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "phan van trung",
//       age: 21,
//     };
//   }
//   changeName = () => {
//     this.setState({ name: "Khuowng" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h2>{this.state.age}</h2>
//         <button type="button" onClick={this.changeName}>
//           Change Name
//         </button>
//       </div>
//     );
//   }
// }
