import React, { useState } from "react";
import ToDoList from "./ToDoList";
import data from "./data.json";
import Check from "../Check";
//mui
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const App = () => {
  const classes = useStyle();
  const [ toDoList, setToDoList ] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.Wrapper}>
          <div>
            <Check addTask={addTask}/>
            <div className={classes.heading}>
              <Typography component="h2" variant="h6">
                Here's your To-Do List. <br/> Happy Learning! 
              </Typography>
              <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3% 0 0 5%",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
  },
    Wrapper: {
    width: "50%",
    backgroundColor: "#EBFFFB",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  
}));
