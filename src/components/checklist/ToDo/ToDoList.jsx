import React from "react";
import ToDo from "./ToDo";
import { makeStyles } from "@mui/styles";
import Backdrop from "@mui/material/Backdrop";
import ClearForm from "../ClearForm";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle2 = () => {
    setOpen(!open);
  };
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button
        type="submit"
        className={classes.button}
        size="large"
        variant="contained"
        onClick={handleToggle2}
      >
        Clear Completed
      </button>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleFilter}
        className={classes.backdrop}
      >
        <ClearForm handleFilter={handleFilter} handleClose={handleClose}/>
      </Backdrop>
    </div>
  );
};

export default ToDoList;
const useStyle = makeStyles((theme) => ({
  button: {
    margin: "20px",
    padding: "8px",
    backgroundColor: "#CDE4DC",
    "&:hover": {
      boxShadow: " 0 2px 2px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.19)",
    },
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "400",
    borderRadius: "10px",
  },
  backdrop: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));
