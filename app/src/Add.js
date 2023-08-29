import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item !== "") {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.item],
        item: "",
      }));
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleAddItem();
    }
  };
  handleDeleteItem = (index) => {
    this.setState((prevState) => {
      const updatedList = [...prevState.list];
      updatedList.splice(index, 1);
      return { list: updatedList };
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.handleAddItem}>Add Item</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}
             <button onClick={() => this.handleDeleteItem(index)}>Delete</button>   
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Add;