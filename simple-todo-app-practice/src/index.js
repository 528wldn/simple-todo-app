import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

ReactDOM.render(
  //render TodoContainer to 'root'
  <TodoContainer />,
  document.getElementById("root")
);
