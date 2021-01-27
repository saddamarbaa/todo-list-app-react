import React from "react";
import "./Todo.css";
import "./App.css";

const Todo = (props) => {
  console.log(props);
  return (
    <div className="todo">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Todo;
