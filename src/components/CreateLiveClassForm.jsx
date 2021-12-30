import React, { useState, useContext } from "react";

//mui
import { TextField, InputLabel, Button, Typography } from "@mui/material";
import { Snackbar, Select, MenuItem } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from "@mui/styles";

//firebase
import { store } from "../config/firebase";
import { collection, addDoc, setDoc } from "firebase/firestore";

//context
import authContext from "../context/AuthContext";

//placeholder
import { exams } from "../assets/placeholder/onBoarding";
import { width } from "@mui/system";

export default function CreateLiveClassForm() {
  const classes = useStyle();

  const [title, setTitle] = useState("");
  const [examName, setExamName] = useState("");
  const [meetPlatform, setMeetPlatform] = useState("");
  const [link, setLink] = useState("");
  const [dateAndTime, setDateAndTime] = useState(new Date());
  const [maxStudents, setMaxStudets] = useState(1);
  const [message, setMessage] = useState(false);
  const id = useContext(authContext);

  const createClass = () => {
    const sheduleDetials = {
      title,
      examName,
      meetPlatform,
      link,
      dateAndTime,
      maxStudents,
      id,
    };
    try {
      addDoc(collection(store, "class Schedule"), sheduleDetials);
      setTitle("");
      setExamName("");
      setMeetPlatform("");
      setLink("");
      setDateAndTime(new Date());
      setMaxStudets(1);
      setMessage(true);
      setTimeout(() => setMessage(false), 3000);
    } catch (error) {
      console.log(error.message);
      setMessage("Please Try Again");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <Typography variant="h4" component="h1">
          Schedule a class
        </Typography>

        <div className={classes.textField}>
          <TextField
            fullWidth
            label="Topic"
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
          />
        </div>
        <div className={classes.textField}>
          <InputLabel> Exam </InputLabel>
          <Select
            fullWidth
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          >
            {exams.map((examName) => (
              <MenuItem key={examName} value={examName}>
                {examName}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={classes.textField}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              fullWidth
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={dateAndTime}
              onChange={(newValue) => {
                setDateAndTime(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        <div className={classes.textField}>
          <InputLabel> Meet Platform </InputLabel>
          <Select
            value={meetPlatform}
            fullWidth
            onChange={(e) => setMeetPlatform(e.target.value)}
          >
            <MenuItem value="google"> Google Meet</MenuItem>
            <MenuItem value="youtube"> YouTube</MenuItem>
            <MenuItem value="zoom"> Zoom</MenuItem>
            <MenuItem value="teams"> Teams</MenuItem>
          </Select>
        </div>
        <div className={classes.textField}>
          <TextField
            fullWidth
            label="Max-no-of-students"
            value={maxStudents}
            onChange={(e) => setMaxStudets(e.target.value)}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            fullWidth
            label="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>{message}</div>
        <Button variant="contained" onClick={createClass}>
          Create
        </Button>
      </div>
      <Snackbar
        open={message}
        autoHideDuration={6000}
        message="Class Schedule"
      />
    </div>
  );
}

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100hw",
    alignItems: "center",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  textField: {
    margin: "10px 0 10px 0",
    width: "50%",
  },
}));
