import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import db from "./firebase";
import "./App.css";

const App = () => {
  // we need a list of todo's
  // useState(short time memory)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // useEffect(function, depencies)
  // useEffect HOOK mean is that run this peice of code only once
  // when the componet loaded and dont run again
  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      // array of object
      // const resultBeenReturned = snapshot.docs.map((doc) => doc.data().title);
      // console.log(resultBeenReturned);
      setTodos(
        snapshot.docs.map((doc) => {
          return doc.data().title;
        })
      );
    });
  }, []);

  const addTodo = (e) => {
    // dont refresh the webside on click.
    e.preventDefault();

    // add Whatever in the input filed to the todos array
    // setTodos([...todos, "here is what the new todo"]);
    // setTodos([...todos, input]);
    // console.log([...todos, input]);

    // Now let add to the firebase Database
    db.collection("todos").add({
      title: input,
    });

    // clear up the input filed  after clicking add todo button
    setInput("");
  };

  const deleteTodo = (indexToDelete) => {
    let newTodos = todos.filter((todo, index) => {
      return indexToDelete !== index;
    });
    setTodos(newTodos);

    // idea to delete from database is
    // db.collection.("todos").doc("the ID goes here").delete
  };

  return (
    <div className="App">
      <h1>Sadam's Todo List</h1>
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
        <Todo title={todo} key={index} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default App;
