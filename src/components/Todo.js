import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
  },
}));

const Todo = ({ title, index, deleteTodo }) => {
  const classes = useStyles();
  return (
    <div className="todo">
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        className={(classes.button, "k")}
        startIcon={<DeleteIcon />}
        onClick={deleteTodo.bind(this, index)}
      >
        DELETE
      </Button>
    </div>
  );
};

export default Todo;
