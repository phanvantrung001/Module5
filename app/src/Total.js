import { Component } from "react";

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  Cong = () => {
    this.setState({ number: this.state.number + 1 });
  };
  Tru = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <button onClick={this.cong}>+</button>
        <span style={{ padding: 10 }}>{this.state.number}</span>
        <button onClick={this.tru}>-</button>
      </div>
    );
  }
}

export default Total;