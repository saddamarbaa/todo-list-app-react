import React from "react";
import "./Todo.css";

const Todo = ({ title, index, deleteTodo }) => {
  return (
    <div className="todo">
      <h2>{title}</h2>
      <button className="delete" onClick={deleteTodo.bind(this, index)}>
        Delete Todo
      </button>
    </div>
  );
};

export default Todo;
