import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      colors: ['black', 'pink', 'blue', 'green', 'yellow']
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        const nextIndex = (prevState.colorIndex + 1) % prevState.colors.length;
        return { colorIndex: nextIndex };
      });
    }, 2000);
  }

  render() {
    const { colorIndex, colors } = this.state;
    const currentColor = colors[colorIndex];

    return (
      <div>
        <div
          style={{
            backgroundColor: currentColor,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto'
          }}
        />
      </div>
    );
  }
}

export default Color;