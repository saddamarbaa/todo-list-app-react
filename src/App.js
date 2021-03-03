import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";
import {
  Button,
  Container,
  CssBaseline,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  // we need a list of todo's

  // useState(short time memory)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // the goal here is that when the app load, we need to listen to the database and fetch
  // new todos as they get added/deleted
  // useEffect(function, depencies)
  // useEffect HOOK mean is that run this peice of code only once
  // when the componet loaded and dont run again
  useEffect(() => {
    // this code here Run ....... first when the app.js is loaded
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        // console.log(snapshot.docs.map((doc) => doc.id));

        setTodos(snapshot.docs.map((doc) => doc.data().todo));
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
      todo: input,
      // set added time to firebase server time
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "rgb(252, 247, 207)",
            height: "100vh",
            borderRadius: "20px",
          }}
        >
          <div className="App">
            <div className="app-container">
              <Typography variant="h4" gutterBottom className="ok">
                Sadam's Todo List
              </Typography>

              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  variant="outlined"
                  className="input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />

                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={!input}
                  type="submit"
                  onClick={addTodo}
                  className={classes.button}
                  startIcon={<AddIcon />}
                >
                  ADD
                </Button>
              </form>

              {todos.map((todo, index) => (
                <Todo
                  title={todo}
                  key={uuidv4()}
                  index={index}
                  deleteTodo={deleteTodo}
                />
              ))}
            </div>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default App;
