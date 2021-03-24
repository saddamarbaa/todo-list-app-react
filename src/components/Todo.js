/** @format */

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React from "react";
import "./Todo.css";
import firebase from "../firebase";
import db from "../firebase";

const useStyles = makeStyles((theme) => ({}));

const Todo = ({ title, index, deleteTodo, id }) => {
	const classes = useStyles();
	return (
		<div className='todo'>
			<Typography variant='subtitle1' gutterBottom>
				{title}
			</Typography>
			<Button
				size='large'
				variant='contained'
				color='secondary'
				className={classes.button}
				startIcon={<DeleteForeverIcon />}
				onClick={deleteTodo.bind(this, index, id)}
				// onClick={(e) => db.collection("todos").doc(id).delete()}
			>
				DELETE
			</Button>
		</div>
	);
};

export default Todo;
