import React, { Component } from "react";
import TodoContainer from "./TodoContainer";
import Calendar from "./Calendar";

export class Menu extends Component {
  state = {
    clicked: false,
  };
  render() {
    if (!this.state.clicked)
      return (
        <div>
          <TodoContainer />
          <button onClick={() => this.setState({ clicked: true })}>
            Calender
          </button>
        </div>
      );
    else
      return (
        <>
          <Calendar />
          <button onClick={() => this.setState({ clicked: false })}>
            TodoList
          </button>
        </>
      );
  }
}

export default Menu;
