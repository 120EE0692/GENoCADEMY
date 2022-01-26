import React, { useState, useContext, useEffect } from "react";

//components
import ToDoList from "./ToDoList";
import Check from "../Check";

//mui
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

//context
import authContext from "../../../context/AuthContext";

//firebase
import { store } from "../../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const App = () => {
  const classes = useStyle();

  const [toDoList, setToDoList] = useState([]);
  const [length, setLength] = useState(0);

  const { id } = useContext(authContext);

  const handleToggle = (id) => {
    let mapped = toDoList?.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList?.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
    setDoc(doc(store, "checklist", id), { ...filtered });
  };

  const addTask = async (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  useEffect(async () => {
    if (toDoList.length === 0) {
      while (toDoList.length === 0) {
        const dblist = await getDoc(doc(store, "checklist", id));
        if (dblist) {
          setLength(Object.keys(dblist.data()).length);
          setToDoList([...toDoList, ...Object.values(dblist.data())]);
          break;
        } else {
          setDoc(doc(store, "checklist", id), {});
        }

        if (toDoList.length) break;
      }
    }
  }, [id]);

  useEffect(async () => {
    if (toDoList.length > length) {
      try {
        if (id) await setDoc(doc(store, "checklist", id), { ...toDoList });
      } catch (error) {
        console.log(error);
      }
    }
  }, [toDoList]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.Wrapper}>
          <div>
            <Check addTask={addTask} />
            <div className={classes.heading}>
              <Typography component="h2" variant="h6">
                Here's your To-Do List. <br /> Happy Learning!
              </Typography>
              <ToDoList
                toDoList={toDoList}
                handleToggle={handleToggle}
                handleFilter={handleFilter}
              />
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
    marginBottom: "100px",
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
