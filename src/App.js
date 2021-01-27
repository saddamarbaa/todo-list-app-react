import React, { useState } from "react";

import Todo from "./Todo";

import "./App.css";

function App() {
  // we need a list of todo's
  // useState

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // don refresh the webside on click
    e.preventDefault();
    // console.log(e);

    setTodos([...todos, input]);
    // clear the input filed
    setInput("");
  };

  const name = "saddam";
  return (
    <div className="App">
      <h1>to-do app made by {name}</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />

        {/* make the button disabled if the input is Empty */}
        <button disabled={!input} type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
}

export default App;
