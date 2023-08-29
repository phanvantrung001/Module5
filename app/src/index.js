import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Total from "./Total";
import Color from "./Color";
import Hello from "./Hello";
import Add from "./Add";
import Student from "./Student";
import Car from "./Car";
import Game from "./Game";
import "./Game.css";




// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }



// class Football extends React.Component {
//   shoot = (a) => {
//     alert(a);
//   }
//   render() {
//     return (
//       <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
//     );
//   }
// }


// class Football extends React.Component {
//   shoot(a) {
//     alert(a);
//   }
//   render() {
//     return (
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     );
//   }
// }
// function ActionLink() {  
//   function handleClick(e) {  
//       e.preventDefault();  
//       alert('You had clicked a Link.');  
//   }  
//   return (  
//       <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleClick}>
//             Click_Me  
//       </a>  
//   );  
// }  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
