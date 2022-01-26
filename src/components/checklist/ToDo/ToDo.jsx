import React from "react";
import { makeStyles } from "@mui/styles";

const ToDo = ({ todo, handleToggle }) => {
  const classes = useStyle();
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? classes.strike : classes.nonstrike}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
const useStyle = makeStyles((theme) => ({
  strike: {
    textDecoration: "line-through",
    cursor: "pointer",
  },
  nonstrike:{
    cursor: "pointer",
    fontSize: "16px",
      fontWeight: "400",
  }
}));
