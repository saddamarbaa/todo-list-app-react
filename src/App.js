import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  // we need a list of todo's
  // useState(short time memory)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // dont refresh the webside on click.
    e.preventDefault();

    // add Whatever in the input filed to the todos array
    setTodos([...todos, input]);

    // clear the input filed
    setInput("");
  };

  const deleteTodo = (indexToDelete) => {
    let newTodos = todos.filter((todo, index) => {
      return indexToDelete !== index;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />

        {/* make the button disabled if the input is Empty */}
        <button
          className="add"
          disabled={!input}
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      {todos.map((todo, index) => (
        <Todo title={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default App;
