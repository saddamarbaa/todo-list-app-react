import React from "react";
import "./Todo.css";
import "./App.css";

// Todo component(child component)

const Todo = ({ title }) => {
  return (
    <div className="todo">
      <h2>{title}</h2>
    </div>
  );
};

export default Todo;
