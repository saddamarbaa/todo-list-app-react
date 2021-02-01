import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

// App component(parent component)

const App = () => {
  // we need a list of todo's
  // useState
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // don refresh the webside on click.
    e.preventDefault();
    // console.log(e);
    // console.log("BOOM > ", input);

    // add Whatever in the input filed to the todos array
    setTodos([...todos, input]);

    // clear the input filed
    setInput("");

    // console.log([...todos, input]);
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
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
};

export default App;
