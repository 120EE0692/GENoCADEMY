import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

//mui
import { TextField, InputLabel, Button, Typography } from "@mui/material";
import { Snackbar, Select, MenuItem } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from "@mui/styles";

//firebase
import { store } from "../config/firebase";
import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

//context
import authContext from "../context/AuthContext";

//placeholder
import { exams } from "../assets/placeholder/onBoarding";

export default function CreateLiveClassForm() {
  const classes = useStyle();
  const navigate = useNavigate();
  const { classid } = useParams();

  const [title, setTitle] = useState("");
  const [examName, setExamName] = useState("");
  const [meetPlatform, setMeetPlatform] = useState("");
  const [link, setLink] = useState("");
  const [dateAndTime, setDateAndTime] = useState(new Date());
  const [maxStudents, setMaxStudets] = useState(1);
  const [message, setMessage] = useState(false);

  const loginUserInfo = useContext(authContext);
  const id = loginUserInfo.id;
  const userName = loginUserInfo.loginUserName;

  const createClass = () => {
    const sheduleDetials = {
      userName,
      title,
      examName,
      meetPlatform,
      link,
      dateAndTime,
      maxStudents,
      id,
    };

    if (!sheduleDetials.examName.length)
      return;

    try {
      classid
        ? updateDoc(doc(store, "class Schedule", classid), sheduleDetials)
        : addDoc(collection(store, "class Schedule"), sheduleDetials);

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

  const deleteClass = () => {
    deleteDoc(doc(store, "class Schedule", classid)).then(navigate('/dashboard'))
  }


  useEffect(() => {

    const classScheduleInfo = async () => {
      if (classid) {
        const docRef = doc(store, "class Schedule", classid);

        const details = await getDoc(docRef);
        let scheduleInfo;
        if (details.exists()) {
          scheduleInfo = details.data();
        } else console.log("NO SUCH DOCS");

        setTitle(scheduleInfo.title);
        setExamName(scheduleInfo.examName);
        setDateAndTime(scheduleInfo.dateAndTime);
        setMeetPlatform(scheduleInfo.meetPlatform);
        setMaxStudets(scheduleInfo.maxStudents);
        setLink(scheduleInfo.link);
      }
    };

    classScheduleInfo()
  }, [classid]);

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <Typography variant="h4" component="h1">
          {classid ? `Update Schedule` : `Schedule a class`}
        </Typography>

        <div className={classes.textField}>
          <TextField required
            fullWidth
            label="Topic"
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
          />
        </div>
        <div className={classes.textField}>
          <InputLabel> Exam </InputLabel>
          <Select required
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
            <DateTimePicker required
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
          <Select required
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
          <TextField required
            fullWidth
            label="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>{message}</div>
      </div>

      <div classes={classes.buttons}>
        <Button variant="contained" type="submit" onClick={createClass}>
          {classid ? `Update` : `Create`}
        </Button>
        {classid ?
          <Button variant="contained" color="error" onClick={deleteClass}>
            Delete
          </Button> : <></>}
      </div>

      <Snackbar
        open={message}
        autoHideDuration={6000}
        message="Class Schedule"
      />
    </div >

  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100hw",
    alignItems: "center",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  textField: {
    margin: "10px 0 10px 0",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    buttons: {
      display: 'flex',
    },
  },
}));
