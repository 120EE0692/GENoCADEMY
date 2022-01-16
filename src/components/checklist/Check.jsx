//this is the form from which user can choose the topics 

import React, { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
//mui
import { InputLabel, MenuItem, Typography } from "@mui/material";
import { Select, Button, Avatar } from "@mui/material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { makeStyles } from "@mui/styles";

//placeholder
import { topics } from "../../assets/placeholder/onBoarding";

//firebase
import { store } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const Check = ({ addTask }) => {
  const classes = useStyle();
  const [checklist, setChecklist] = useState("");
  const[todo, setTodo]= useState({
    topic:[],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTask(checklist); //definition of addTask in ./ToDo/App.js
    setChecklist("");
  };

  const handleChange = (e) => {
    setChecklist( e.target.value)
    setTodo({...todo, topic:e.target.value})
}
  return (
    <>
      <div className={classes.container}>
        <div className={classes.Wrapper}>
          <div className={classes.avatar}>
            <Avatar>
              <FactCheckOutlinedIcon />
            </Avatar>
          </div>

          <div>
            <div className={classes.heading}>
              <Typography component="h1" variant="h5">
                Weekly Checklist
              </Typography>
            </div>

            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.input}>
                <div className={classes.textInput}>
                  <div className={classes.dropDown}>
                    <InputLabel> Select the topics </InputLabel>
                    <Select
                      fullWidth
                      value={checklist}
                      onChange={handleChange}
                    >
                      {topics.map((topicName) => (
                        <MenuItem key={topicName} value={topicName}>
                          {topicName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className={classes.addbtn}>
                  <Avatar>
                    <Button className={classes.button} onClick={handleSubmit}>
                      <AddBoxOutlinedIcon />
                    </Button>
                  </Avatar>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3% 0 0 5%",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
  },
  dropDown: {
    width: "100%",
  },
  Wrapper: {
    width: "80%",
    backgroundColor: "#EBFFFB",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  addbtn: {
    marginTop: "25px",
  },
  formBackground: {
    width: "70hw",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  nameField: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    width: "80%",
  },
  textInput: {
    width: "85%",
  },
  input: {
    marginTop: "30px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
}));
